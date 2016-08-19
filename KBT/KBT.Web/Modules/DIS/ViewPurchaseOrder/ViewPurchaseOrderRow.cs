

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

    [ConnectionKey("Default"), DisplayName("ViewPurchaseOrder"), InstanceName("ViewPurchaseOrder"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ViewPurchaseOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Order Id"), Column("PurchaseOrderID"), NotNull]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Purchase Order Number"), Size(50), QuickSearch]
        public String PurchaseOrderNumber
        {
            get { return Fields.PurchaseOrderNumber[this]; }
            set { Fields.PurchaseOrderNumber[this] = value; }
        }

        [DisplayName("Company Id")]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Purchase Order Date")]
        public DateTime? PurchaseOrderDate
        {
            get { return Fields.PurchaseOrderDate[this]; }
            set { Fields.PurchaseOrderDate[this] = value; }
        }

        [DisplayName("Cost Id"), Column("CostID")]
        public Int32? CostId
        {
            get { return Fields.CostId[this]; }
            set { Fields.CostId[this] = value; }
        }

        [DisplayName("Order Category Id"), Column("OrderCategoryID")]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Purchase Order Status"), Size(20)]
        public String PurchaseOrderStatus
        {
            get { return Fields.PurchaseOrderStatus[this]; }
            set { Fields.PurchaseOrderStatus[this] = value; }
        }

        [DisplayName("Order Category Name"), Size(50)]
        public String OrderCategoryName
        {
            get { return Fields.OrderCategoryName[this]; }
            set { Fields.OrderCategoryName[this] = value; }
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Company Name"), Size(50)]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Address"), Size(100)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Fax"), Size(50)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Logo"), Size(100)]
        public String Logo
        {
            get { return Fields.Logo[this]; }
            set { Fields.Logo[this] = value; }
        }

        [DisplayName("Phone"), Size(18)]
        public Decimal? Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PurchaseOrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewPurchaseOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderId;
            public StringField PurchaseOrderNumber;
            public Int32Field CompanyId;
            public DateTimeField PurchaseOrderDate;
            public Int32Field CostId;
            public Int32Field OrderCategoryId;
            public StringField PurchaseOrderStatus;
            public StringField OrderCategoryName;
            public StringField Description;
            public StringField CompanyName;
            public StringField Address;
            public StringField Fax;
            public StringField Logo;
            public DecimalField Phone;

            public RowFields()
                : base("[dbo].[ViewPurchaseOrder]")
            {
                LocalTextPrefix = "DIS.ViewPurchaseOrder";
            }
        }
    }
}