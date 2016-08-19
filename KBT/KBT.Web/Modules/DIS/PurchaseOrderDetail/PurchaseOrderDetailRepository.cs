﻿

namespace KBT.DIS.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PurchaseOrderDetailRow;

    public class PurchaseOrderDetailRepository
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
            protected override void AfterSave()
            {
                base.AfterSave();
                //var ro = ReceiveOrderRow.Fields;
                //var rordId = (int)new SqlInsert(fld.TableName)
                //   .Set(ro.PurchaseOrderId, Row.PurchaseOrderId)
                //   .Set(ro.ReceiveOrderStatus, "In Progress")
                //   .ExecuteAndGetID(this.Connection);

                //var po = PurchaseOrderRow.Fields;

                //var odtls = this.UnitOfWork.Connection.List<PurchaseOrderDetailRow>(new Criteria(po.PurchaseOrderId) == Row.PurchaseOrderId.Value);
                //foreach (PurchaseOrderDetailRow o in odtls)
                //{

                //    var rodtl = ReceiveOrderDetailRow.Fields;
                //    var rodtlid = (int)new SqlInsert(rodtl.TableName)
                //       .Set(rodtl.ReceiveOrderId, Row.PurchaseOrderId.Value)
                //       .Set(rodtl.ReceiveQty, o.Quantity)
                //       .ExecuteAndGetID(this.Connection);
                //}
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}