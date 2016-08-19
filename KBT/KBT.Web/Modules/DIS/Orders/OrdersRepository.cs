

namespace KBT.DIS.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.OrdersRow;

    public class OrdersRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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

                var createOrd = this.Connection.CreateCommand();
                createOrd.CommandText = "Execute GenerateNumber 'ORD'";
                Row.OrderNumber = createOrd.ExecuteScalar().ToString();
            }

            protected override void AfterSave()
            {
                base.AfterSave();
                OrdersRow ordHdr = this.Connection.ById<OrdersRow>(Row.OrderId);
                List<OrderDetailRow> ordDtl = Row.DetailList;
                decimal totalOrder = 0;

                foreach (OrderDetailRow ord in ordDtl)
                {
                    this.Connection.Insert(new KBT.DIS.Entities.InventoryRow
                    {
                        ProductId = ord.ProductID,
                        OrderCategoryId = ord.OrderCategoryId,
                        InventoryStatus = "Out",
                        DocumentNo = ordHdr.OrderNumber,
                        Qty = ord.OrderQty
                    });

                    totalOrder = totalOrder + ord.LineTotal.Value;
                }

                BatchGenerationUpdater.OnCommit(this.UnitOfWork, KBT.DIS.Entities.InventoryRow.Fields.GenerationKey);

                this.UnitOfWork.Connection.Insert(new KBT.DIS.Entities.RevenueRow
                {
                    OrderId = ordHdr.OrderId,
                    Credit = totalOrder,
                    EntryDate = DateTime.Now,
                    DocumentNo = ordHdr.OrderNumber,
                    CancelationStatus = false
                });

                BatchGenerationUpdater.OnCommit(this.UnitOfWork, KBT.DIS.Entities.RevenueRow.Fields.GenerationKey);

                if (Row.ProductTypeID == 2 && IsCreate)
                {
                    foreach (OrderDetailRow ord in ordDtl)
                    {
                        this.UnitOfWork.Connection.Insert(new KBT.DIS.Entities.ServiceUnitRow
                        {
                            ProductId = ord.ProductID,
                            CustomerDealerId = ordHdr.CustomerDealerId,
                            OrderUnitId = ordHdr.OrderId
                        });
                    }
                    BatchGenerationUpdater.OnCommit(this.UnitOfWork, KBT.DIS.Entities.ServiceUnitRow.Fields.GenerationKey);
                }

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}