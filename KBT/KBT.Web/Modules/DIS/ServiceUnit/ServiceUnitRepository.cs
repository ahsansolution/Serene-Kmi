

namespace KBT.DIS.Repositories
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.ServiceUnitRow;
    using System.Linq;

    public class ServiceUnitRepository
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

                var createOrd = this.Connection.CreateCommand();
                createOrd.CommandText = "Execute GenerateNumber 'ORD'";
                var OrdNo = createOrd.ExecuteScalar().ToString();

                var OrderId = this.Connection.InsertAndGetID(new KBT.DIS.Entities.OrdersRow
                {
                    OrderNumber = OrdNo,
                    CustomerDealerId = Row.CustomerDealerId,
                    OrderDate = DateTime.Now,
                    OrderStatus = "Complete",
                    ProductTypeID = 1
                });
                BatchGenerationUpdater.OnCommit(this.UnitOfWork, KBT.DIS.Entities.OrdersRow.Fields.GenerationKey);

                var getOrdId = this.Connection.CreateCommand();
                getOrdId.CommandText = "Execute GetLastOrderId";
                var ordId = getOrdId.ExecuteScalar().ToString();

                var getOrdDtlId = this.Connection.CreateCommand();
                getOrdDtlId.CommandText = "Execute GetLastOrderDetailId";
                var ordDtlId = int.Parse(getOrdDtlId.ExecuteScalar().ToString());

                var getSrvUnitDtlId = this.Connection.CreateCommand();
                getSrvUnitDtlId.CommandText = "Execute GetLastServiceUnitDetailId";
                var srvUnitDtlId = int.Parse(getSrvUnitDtlId.ExecuteScalar().ToString());

                foreach (OrderDetailRow row in Row.DetailList[Row.DetailList.Count - 1].DetailList)
                {
                    this.Connection.UpdateById(new OrderDetailRow
                    {
                        OrderDetailId = ordDtlId,
                        OrderId = int.Parse(ordId)
                    });
                    --ordDtlId;
                    BatchGenerationUpdater.OnCommit(this.UnitOfWork, KBT.DIS.Entities.OrderDetailRow.Fields.GenerationKey);
                }

                this.Connection.UpdateById(new ServiceUnitDetailRow
                {
                    ServiceUnitDetailId = srvUnitDtlId,
                    OrderIDService = int.Parse(ordId)
                });
                BatchGenerationUpdater.OnCommit(this.UnitOfWork, KBT.DIS.Entities.ServiceUnitDetailRow.Fields.GenerationKey);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}