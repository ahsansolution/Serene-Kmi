

namespace KBT.DIS.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ReceiveOrderDetailRow;

    public class ReceiveOrderDetailRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.BackOrderQty == 0 || request.Entity.BackOrderQty == null)
            {
                request.Entity.ReceiveComplete = true;
            }
            SaveResponse save = new MySaveHandler().Process(uow, request, SaveRequestType.Update);

            ReceiveOrderDetailRow ord = uow.Connection.TryById<ReceiveOrderDetailRow>(request.Entity.ReceiveOrderDetailId);
            var fld = ReceiveOrderDetailRow.Fields;
            var ords = uow.Connection.List<ReceiveOrderDetailRow>(
                new Criteria(fld.ReceiveOrderId) == request.Entity.ReceiveOrderId.Value &&
                new Criteria(fld.ReceiveComplete) == 0);
            if (ords.Count == 0)
            {
                uow.Connection.UpdateById(new ReceiveOrderRow
                {
                    ReceiveOrderId = ord.ReceiveOrderId,
                    ReceiveOrderStatus = "Complete"
                });

                ReceiveOrderRow ro = uow.Connection.ById<ReceiveOrderRow>(ord.ReceiveOrderId);
               
                uow.Connection.UpdateById(new PurchaseOrderRow
                {
                    PurchaseOrderId = ro.PurchaseOrderId,
                    PurchaseOrderStatus = "Complete"
                });

                BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.ReceiveOrderRow.Fields.GenerationKey);
                BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.PurchaseOrderRow.Fields.GenerationKey);
            }
            else
            {
                uow.Connection.UpdateById(new ReceiveOrderRow
                {
                    ReceiveOrderId = ord.ReceiveOrderId,
                    ReceiveOrderStatus = "Partial Complete"
                });
                BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.ReceiveOrderRow.Fields.GenerationKey);
            }

            var fldInv = InventoryRow.Fields;

            ReceiveOrderRow ordHdr = uow.Connection.ById<ReceiveOrderRow>(ord.ReceiveOrderId);
            PurchaseOrderRow prdHdr = uow.Connection.ById<PurchaseOrderRow>(ordHdr.PurchaseOrderId);


            //var Invs = uow.Connection.List<InventoryRow>(
            //    new Criteria(fldInv.ProductId) == ord.ProductId.Value &&
            //    new Criteria(fldInv.OrderCategoryId) == ordHdr.PurchaseOrderOrderCategoryId.Value);

            //if (Invs == null)
            //{
            uow.Connection.Insert(new KBT.DIS.Entities.InventoryRow
            {
                ProductId = ord.ProductId,
                OrderCategoryId = prdHdr.OrderCategoryId,
                InventoryStatus = "In",
                DocumentNo = ordHdr.ReceiveOrderNumber,
                Qty = request.Entity.ReceiveQty
            });
            BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.InventoryRow.Fields.GenerationKey);
            //}
            //else
            //{
            //    uow.Connection.UpdateById(new KBT.DIS.Entities.InventoryRow
            //    {
            //        InventoryId = Invs[0].InventoryId,
            //        Qty = request.Entity.ReceiveQty
            //    });
            //    BatchGenerationUpdater.OnCommit(uow, KBT.DIS.Entities.InventoryRow.Fields.GenerationKey);
            //}

            return save; 
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
                //if (IsCreate)
                //{
                //    Row.ReceiveQty = Row.POQty;
                //    base.BeforeSave();
                //}
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}