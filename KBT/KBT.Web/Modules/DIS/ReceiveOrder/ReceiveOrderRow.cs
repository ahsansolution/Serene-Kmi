

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

    [ConnectionKey("Default"), DisplayName("ReceiveOrder"), InstanceName("ReceiveOrder"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ReceiveOrder")]
    public sealed class ReceiveOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Receive Order Id"), Column("ReceiveOrderID"), Identity]
        public Int32? ReceiveOrderId
        {
            get { return Fields.ReceiveOrderId[this]; }
            set { Fields.ReceiveOrderId[this] = value; }
        }

        [DisplayName("Receive Order Number"), Size(50), QuickSearch]
        public String ReceiveOrderNumber
        {
            get { return Fields.ReceiveOrderNumber[this]; }
            set { Fields.ReceiveOrderNumber[this] = value; }
        }

        [DisplayName("Purchase Order"), Column("PurchaseOrderID"), ForeignKey("[dbo].[PurchaseOrder]", "PurchaseOrderID"), LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderPurchaseOrderNumber")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Receive Date")]
        public DateTime? ReceiveDate
        {
            get { return Fields.ReceiveDate[this]; }
            set { Fields.ReceiveDate[this] = value; }
        }

        [DisplayName("Receive By"), Size(50)]
        public String ReceiveBy
        {
            get { return Fields.ReceiveBy[this]; }
            set { Fields.ReceiveBy[this] = value; }
        }

        [DisplayName("Acknowledge By"), Size(50)]
        public String AcknowledgeBy
        {
            get { return Fields.AcknowledgeBy[this]; }
            set { Fields.AcknowledgeBy[this] = value; }
        }

        [DisplayName("Receive Order Status"), Size(20)]
        public String ReceiveOrderStatus
        {
            get { return Fields.ReceiveOrderStatus[this]; }
            set { Fields.ReceiveOrderStatus[this] = value; }
        }

        [DisplayName("Purchase Order Purchase Order Number"), Expression("jPurchaseOrder.[PurchaseOrderNumber]")]
        public String PurchaseOrderPurchaseOrderNumber
        {
            get { return Fields.PurchaseOrderPurchaseOrderNumber[this]; }
            set { Fields.PurchaseOrderPurchaseOrderNumber[this] = value; }
        }

        [DisplayName("Purchase Order Company Id"), Expression("jPurchaseOrder.[CompanyId]")]
        public Int32? PurchaseOrderCompanyId
        {
            get { return Fields.PurchaseOrderCompanyId[this]; }
            set { Fields.PurchaseOrderCompanyId[this] = value; }
        }

        [DisplayName("Purchase Order Purchase Order Date"), Expression("jPurchaseOrder.[PurchaseOrderDate]")]
        public DateTime? PurchaseOrderPurchaseOrderDate
        {
            get { return Fields.PurchaseOrderPurchaseOrderDate[this]; }
            set { Fields.PurchaseOrderPurchaseOrderDate[this] = value; }
        }

        [DisplayName("Purchase Order Cost Id"), Expression("jPurchaseOrder.[CostID]")]
        public Int32? PurchaseOrderCostId
        {
            get { return Fields.PurchaseOrderCostId[this]; }
            set { Fields.PurchaseOrderCostId[this] = value; }
        }

        [DisplayName("Purchase Order Order Category Id"), Expression("jPurchaseOrder.[OrderCategoryID]")]
        public Int32? PurchaseOrderOrderCategoryId
        {
            get { return Fields.PurchaseOrderOrderCategoryId[this]; }
            set { Fields.PurchaseOrderOrderCategoryId[this] = value; }
        }

        [DisplayName("Purchase Order Purchase Order Status"), Expression("jPurchaseOrder.[PurchaseOrderStatus]")]
        public String PurchaseOrderPurchaseOrderStatus
        {
            get { return Fields.PurchaseOrderPurchaseOrderStatus[this]; }
            set { Fields.PurchaseOrderPurchaseOrderStatus[this] = value; }
        }

        [DisplayName("PO Detail"), MasterDetailRelation(foreignKey: "ReceiveOrderID"), ClientSide, MinSelectLevel(SelectLevel.List)]
        public List<ReceiveOrderDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ReceiveOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReceiveOrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiveOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReceiveOrderId;
            public StringField ReceiveOrderNumber;
            public Int32Field PurchaseOrderId;
            public DateTimeField ReceiveDate;
            public StringField ReceiveBy;
            public StringField AcknowledgeBy;
            public StringField ReceiveOrderStatus;

            public StringField PurchaseOrderPurchaseOrderNumber;
            public Int32Field PurchaseOrderCompanyId;
            public DateTimeField PurchaseOrderPurchaseOrderDate;
            public Int32Field PurchaseOrderCostId;
            public Int32Field PurchaseOrderOrderCategoryId;
            public StringField PurchaseOrderPurchaseOrderStatus;

            public RowListField<ReceiveOrderDetailRow> DetailList;


            public RowFields()
                : base("[dbo].[ReceiveOrder]")
            {
                LocalTextPrefix = "DIS.ReceiveOrder";
            }
        }
    }
}