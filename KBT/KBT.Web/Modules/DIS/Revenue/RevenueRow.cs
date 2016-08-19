

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

    [ConnectionKey("Default"), DisplayName("Revenue"), InstanceName("Revenue"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class RevenueRow : Row, IIdRow, INameRow
    {
        [DisplayName("Revenue Id"), Column("RevenueID"), Identity]
        public Int32? RevenueId
        {
            get { return Fields.RevenueId[this]; }
            set { Fields.RevenueId[this] = value; }
        }

        [DisplayName("Purchase Order"), Column("PurchaseOrderID"), ForeignKey("[dbo].[PurchaseOrder]", "PurchaseOrderID"), LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderPurchaseOrderNumber")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Order"), Column("OrderID"), ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jOrder"), TextualField("OrderOrderNumber")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Credit"), Size(19), Scale(4)]
        public Decimal? Credit
        {
            get { return Fields.Credit[this]; }
            set { Fields.Credit[this] = value; }
        }

        [DisplayName("Debit"), Size(19), Scale(4)]
        public Decimal? Debit
        {
            get { return Fields.Debit[this]; }
            set { Fields.Debit[this] = value; }
        }

        [DisplayName("Entry Date")]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }

        [DisplayName("Document No"), Size(50), QuickSearch]
        public String DocumentNo
        {
            get { return Fields.DocumentNo[this]; }
            set { Fields.DocumentNo[this] = value; }
        }

        [DisplayName("Cancelation Status")]
        public Boolean? CancelationStatus
        {
            get { return Fields.CancelationStatus[this]; }
            set { Fields.CancelationStatus[this] = value; }
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

        [DisplayName("Order Order Number"), Expression("jOrder.[OrderNumber]")]
        public String OrderOrderNumber
        {
            get { return Fields.OrderOrderNumber[this]; }
            set { Fields.OrderOrderNumber[this] = value; }
        }

        [DisplayName("Order Order Date"), Expression("jOrder.[OrderDate]")]
        public DateTime? OrderOrderDate
        {
            get { return Fields.OrderOrderDate[this]; }
            set { Fields.OrderOrderDate[this] = value; }
        }

        [DisplayName("Order Customer Dealer Id"), Expression("jOrder.[CustomerDealerID]")]
        public Int32? OrderCustomerDealerId
        {
            get { return Fields.OrderCustomerDealerId[this]; }
            set { Fields.OrderCustomerDealerId[this] = value; }
        }

        [DisplayName("Order User Id"), Expression("jOrder.[UserID]")]
        public Int32? OrderUserId
        {
            get { return Fields.OrderUserId[this]; }
            set { Fields.OrderUserId[this] = value; }
        }

        [DisplayName("Order Product Type Id"), Expression("jOrder.[ProductTypeID]")]
        public Int32? OrderProductTypeId
        {
            get { return Fields.OrderProductTypeId[this]; }
            set { Fields.OrderProductTypeId[this] = value; }
        }

        [DisplayName("Order Payment Service"), Expression("jOrder.[PaymentService]")]
        public Decimal? OrderPaymentService
        {
            get { return Fields.OrderPaymentService[this]; }
            set { Fields.OrderPaymentService[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RevenueId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RevenueRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RevenueId;
            public Int32Field PurchaseOrderId;
            public Int32Field OrderId;
            public DecimalField Credit;
            public DecimalField Debit;
            public DateTimeField EntryDate;
            public StringField DocumentNo;
            public BooleanField CancelationStatus;

            public StringField PurchaseOrderPurchaseOrderNumber;
            public Int32Field PurchaseOrderCompanyId;
            public DateTimeField PurchaseOrderPurchaseOrderDate;
            public Int32Field PurchaseOrderCostId;
            public Int32Field PurchaseOrderOrderCategoryId;
            public StringField PurchaseOrderPurchaseOrderStatus;

            public StringField OrderOrderNumber;
            public DateTimeField OrderOrderDate;
            public Int32Field OrderCustomerDealerId;
            public Int32Field OrderUserId;
            public Int32Field OrderProductTypeId;
            public DecimalField OrderPaymentService;

            public RowFields()
                : base("[dbo].[Revenue]")
            {
                LocalTextPrefix = "DIS.Revenue";
            }
        }
    }
}