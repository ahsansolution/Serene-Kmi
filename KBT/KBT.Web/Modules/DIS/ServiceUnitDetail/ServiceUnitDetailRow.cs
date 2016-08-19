

namespace KBT.DIS.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("ServiceUnitDetail"), InstanceName("ServiceUnitDetail"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ServiceUnitDetailRow : Row, IIdRow
    {
        [DisplayName("Service Unit Detail Id"), Column("ServiceUnitDetailID"), Identity]
        public Int32? ServiceUnitDetailId
        {
            get { return Fields.ServiceUnitDetailId[this]; }
            set { Fields.ServiceUnitDetailId[this] = value; }
        }

        [DisplayName("Service Unit"), Column("ServiceUnitID"), ForeignKey("[dbo].[ServiceUnit]", "ServiceUnitID"), LeftJoin("jServiceUnit")]
        public Int32? ServiceUnitId
        {
            get { return Fields.ServiceUnitId[this]; }
            set { Fields.ServiceUnitId[this] = value; }
        }

        [DisplayName("Service Charge"), Size(19), Scale(4)]
        public Decimal? ServiceCharge
        {
            get { return Fields.ServiceCharge[this]; }
            set { Fields.ServiceCharge[this] = value; }
        }

        [DisplayName("Km In Use")]
        public Int32? KmInUse
        {
            get { return Fields.KmInUse[this]; }
            set { Fields.KmInUse[this] = value; }
        }

        [DisplayName("Service Date")]
        public DateTime? ServiceDate
        {
            get { return Fields.ServiceDate[this]; }
            set { Fields.ServiceDate[this] = value; }
        }

        [DisplayName("Service Unit Product Id"), Expression("jServiceUnit.[ProductID]")]
        public Int32? ServiceUnitProductId
        {
            get { return Fields.ServiceUnitProductId[this]; }
            set { Fields.ServiceUnitProductId[this] = value; }
        }

        [DisplayName("Service Unit Customer Dealer Id"), Expression("jServiceUnit.[CustomerDealerID]")]
        public Int32? ServiceUnitCustomerDealerId
        {
            get { return Fields.ServiceUnitCustomerDealerId[this]; }
            set { Fields.ServiceUnitCustomerDealerId[this] = value; }
        }

        [DisplayName("Service Unit Order Unit Id"), Expression("jServiceUnit.[OrderUnitID]")]
        public Int32? ServiceUnitOrderUnitId
        {
            get { return Fields.ServiceUnitOrderUnitId[this]; }
            set { Fields.ServiceUnitOrderUnitId[this] = value; }
        }

        [DisplayName("OrderID Service")]
        public Int32? OrderIDService
        {
            get { return Fields.OrderIDService[this]; }
            set { Fields.OrderIDService[this] = value; }
        }

        [DisplayName("Order Detail"), MasterDetailRelation(foreignKey: "ServiceUnitDetailID", CheckChangesOnUpdate = false), ClientSide, MinSelectLevel(SelectLevel.List)]
        public List<OrderDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceUnitDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitDetailId;
            public Int32Field ServiceUnitId;
            public DecimalField ServiceCharge;
            public Int32Field KmInUse;
            public DateTimeField ServiceDate;

            public Int32Field ServiceUnitProductId;
            public Int32Field ServiceUnitCustomerDealerId;
            public Int32Field ServiceUnitOrderUnitId;
            public Int32Field OrderIDService;

            public RowListField<OrderDetailRow> DetailList;

            public RowFields()
                : base("[dbo].[ServiceUnitDetail]")
            {
                LocalTextPrefix = "DIS.ServiceUnitDetail";
            }
        }
    }
}