

namespace KBT.DIS.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PurchaseOrderRow;

    public class PurchaseOrderRepository
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

                var createPO = this.Connection.CreateCommand();
                createPO.CommandText = "Execute GenerateNumber 'PO'";
                Row.PurchaseOrderNumber = createPO.ExecuteScalar().ToString();
                Row.CompanyId = 1;
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                var createRO = this.Connection.CreateCommand();
                createRO.CommandText = "Execute GenerateNumber 'RO'";

                var ro = ReceiveOrderRow.Fields;
                var rordId = (int)new SqlInsert(ro.TableName)
                .Set(ro.PurchaseOrderId, Row.PurchaseOrderId)
                .Set(ro.ReceiveOrderNumber, createRO.ExecuteScalar())
                .Set(ro.ReceiveOrderStatus, "In Progress")
                .ExecuteAndGetID(this.Connection);

                var po = PurchaseOrderRow.Fields;

                var odtls = this.UnitOfWork.Connection.List<PurchaseOrderDetailRow>(new Criteria(po.PurchaseOrderId) == Row.PurchaseOrderId.Value);
                foreach (PurchaseOrderDetailRow o in odtls)
                {
                    var priceCol = ProductPriceRow.Fields;
                    var prices = this.Connection.List<ProductPriceRow>(new
                        Criteria(priceCol.ProductId) == o.ProductId.Value && new Criteria(priceCol.OrderCategoryId) == Row.OrderCategoryId.Value);

                    var rodtl = ReceiveOrderDetailRow.Fields;
                    var rodtlid = (int)new SqlInsert(rodtl.TableName)
                       .Set(rodtl.ReceiveOrderId, rordId)
                       .Set(rodtl.POQty, o.Quantity)
                       .Set(rodtl.ReceiveQty, o.Quantity)
                       .Set(rodtl.ProductId, o.ProductId)
                       .Set(rodtl.Price, prices[0].Price)
                       .Set(rodtl.BackOrderQty, 0)
                       .Set(rodtl.ReceiveComplete, 0)
                       .ExecuteAndGetID(this.Connection);
                }

             

                BatchGenerationUpdater.OnCommit(this.UnitOfWork, ReceiveOrderRow.Fields.GenerationKey);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}