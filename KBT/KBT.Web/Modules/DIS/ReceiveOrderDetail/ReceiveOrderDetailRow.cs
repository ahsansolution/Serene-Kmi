

namespace KBT.DIS.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("ReceiveOrderDetail"), InstanceName("ReceiveOrderDetail"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ReceiveOrderDetail")]
    public sealed class ReceiveOrderDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Receive Order Detail Id"), Column("ReceiveOrderDetailID"), Identity]
        public Int32? ReceiveOrderDetailId
        {
            get { return Fields.ReceiveOrderDetailId[this]; }
            set { Fields.ReceiveOrderDetailId[this] = value; }
        }

        [DisplayName("Receive Order"), Column("ReceiveOrderID"), ForeignKey("[dbo].[ReceiveOrder]", "ReceiveOrderID"), LeftJoin("jReceiveOrder"), TextualField("ReceiveOrderReceiveOrderNumber")]
        public Int32? ReceiveOrderId
        {
            get { return Fields.ReceiveOrderId[this]; }
            set { Fields.ReceiveOrderId[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("prd")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Name"), Size(10), QuickSearch, Expression("prd.ProductName"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Receive Qty")]
        public Int16? ReceiveQty
        {
            get { return Fields.ReceiveQty[this]; }
            set { Fields.ReceiveQty[this] = value; }
        }

        [DisplayName("PO Qty")]
        public Int16? POQty
        {
            get { return Fields.POQty[this]; }
            set { Fields.POQty[this] = value; }
        }

        [DisplayName("Back Order Qty")]
        public Int16? BackOrderQty
        {
            get { return Fields.BackOrderQty[this]; }
            set { Fields.BackOrderQty[this] = value; }
        }

        [DisplayName("Price"), Size(10), QuickSearch, LookupInclude]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Bin Location"), Size(10)]
        public String BinLocation
        {
            get { return Fields.BinLocation[this]; }
            set { Fields.BinLocation[this] = value; }
        }

        [DisplayName("Receive Complete")]
        public Boolean? ReceiveComplete
        {
            get { return Fields.ReceiveComplete[this]; }
            set { Fields.ReceiveComplete[this] = value; }
        }

        [DisplayName("Receive Order Receive Order Number"), Expression("jReceiveOrder.[ReceiveOrderNumber]")]
        public String ReceiveOrderNumber
        {
            get { return Fields.ReceiveOrderNumber[this]; }
            set { Fields.ReceiveOrderNumber[this] = value; }
        }

        [DisplayName("Receive Order Purchase Order Id"), Expression("jReceiveOrder.[PurchaseOrderID]")]
        public Int32? ReceiveOrderPurchaseOrderId
        {
            get { return Fields.ReceiveOrderPurchaseOrderId[this]; }
            set { Fields.ReceiveOrderPurchaseOrderId[this] = value; }
        }

        [DisplayName("Receive Order Receive Date"), Expression("jReceiveOrder.[ReceiveDate]")]
        public DateTime? ReceiveOrderReceiveDate
        {
            get { return Fields.ReceiveOrderReceiveDate[this]; }
            set { Fields.ReceiveOrderReceiveDate[this] = value; }
        }

        [DisplayName("Receive Order Receive By"), Expression("jReceiveOrder.[ReceiveBy]")]
        public String ReceiveOrderReceiveBy
        {
            get { return Fields.ReceiveOrderReceiveBy[this]; }
            set { Fields.ReceiveOrderReceiveBy[this] = value; }
        }

        [DisplayName("Receive Order Acknowledge By"), Expression("jReceiveOrder.[AcknowledgeBy]")]
        public String ReceiveOrderAcknowledgeBy
        {
            get { return Fields.ReceiveOrderAcknowledgeBy[this]; }
            set { Fields.ReceiveOrderAcknowledgeBy[this] = value; }
        }

        [DisplayName("Receive Order Receive Order Status"), Expression("jReceiveOrder.[ReceiveOrderStatus]")]
        public String ReceiveOrderReceiveOrderStatus
        {
            get { return Fields.ReceiveOrderReceiveOrderStatus[this]; }
            set { Fields.ReceiveOrderReceiveOrderStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ReceiveOrderDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReceiveOrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReceiveOrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReceiveOrderDetailId;
            public Int32Field ReceiveOrderId;
            public Int32Field ProductId;
            public Int16Field ReceiveQty;
            public Int16Field BackOrderQty;
            public Int16Field POQty;
            public DecimalField Price;
            public StringField ProductName;
            public StringField BinLocation;
            public BooleanField ReceiveComplete;

            public StringField ReceiveOrderNumber;
            public Int32Field ReceiveOrderPurchaseOrderId;
            public DateTimeField ReceiveOrderReceiveDate;
            public StringField ReceiveOrderReceiveBy;
            public StringField ReceiveOrderAcknowledgeBy;
            public StringField ReceiveOrderReceiveOrderStatus;

            public RowFields()
                : base("[dbo].[ReceiveOrderDetail]")
            {
                LocalTextPrefix = "DIS.ReceiveOrderDetail";
            }
        }
    }
}