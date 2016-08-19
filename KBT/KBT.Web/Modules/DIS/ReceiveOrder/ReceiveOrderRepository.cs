

namespace KBT.DIS.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.ReceiveOrderRow;

    public class ReceiveOrderRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            List<Entities.ReceiveOrderDetailRow> rows = request.Entity.DetailList;
            List<Entities.ReceiveOrderDetailRow> pendingRows = rows.FindAll(x => x.BackOrderQty > 0);
            if (pendingRows.Count == 0)
            {
                request.Entity.ReceiveOrderStatus = "Complete";

                ReceiveOrderRow ro = uow.Connection.ById<ReceiveOrderRow>(request.Entity.ReceiveOrderId);

                uow.Connection.UpdateById(new PurchaseOrderRow
                {
                    PurchaseOrderId = ro.PurchaseOrderId,
                    PurchaseOrderStatus = "Complete"
                });
                BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.PurchaseOrderRow.Fields.GenerationKey);

            }
            else
            {
                request.Entity.ReceiveOrderStatus = "UnComplete";
            }

            List<Entities.ReceiveOrderDetailRow> completeRows = rows.FindAll(x => x.BackOrderQty == 0);
            if (completeRows.Count > 0)
            {
                int x = 0;
                foreach (ReceiveOrderDetailRow completeRow in completeRows)
                {
                    ReceiveOrderRow ordHdr = uow.Connection.ById<ReceiveOrderRow>(request.Entity.ReceiveOrderId);
                    PurchaseOrderRow prdHdr = uow.Connection.ById<PurchaseOrderRow>(ordHdr.PurchaseOrderId);

                    uow.Connection.Insert(new KBT.DIS.Entities.InventoryRow
                    {
                        ProductId = completeRow.ProductId,
                        OrderCategoryId = prdHdr.OrderCategoryId,
                        InventoryStatus = "In",
                        DocumentNo = ordHdr.ReceiveOrderNumber,
                        Qty = completeRow.ReceiveQty
                    });
                    BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.InventoryRow.Fields.GenerationKey);

                    request.Entity.DetailList[x].ReceiveComplete = true;
                    x++;
                }
            }

            //if (request.Entity.DetailListBackOrderQty == 0 || request.Entity.BackOrderQty == null)
            //{
            //    request.Entity.ReceiveComplete = true;
            //}
            //SaveResponse save = new MySaveHandler().Process(uow, request, SaveRequestType.Update);

            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}