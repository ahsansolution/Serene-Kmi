

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

    [ConnectionKey("Default"), DisplayName("ViewProductUnitOrder"), InstanceName("ViewProductUnitOrder"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ViewProductUnitOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Detail Id"), Column("OrderDetailID"), NotNull]
        public Int32? OrderDetailId
        {
            get { return Fields.OrderDetailId[this]; }
            set { Fields.OrderDetailId[this] = value; }
        }

        [DisplayName("Order Id"), Column("OrderID")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order Qty")]
        public Int16? OrderQty
        {
            get { return Fields.OrderQty[this]; }
            set { Fields.OrderQty[this] = value; }
        }

        [DisplayName("Product Price Id"), Column("ProductPriceID")]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
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

        [DisplayName("Base Price"), Size(19), Scale(4)]
        public Decimal? BasePrice
        {
            get { return Fields.BasePrice[this]; }
            set { Fields.BasePrice[this] = value; }
        }

        [DisplayName("Total"), Size(19), Scale(4)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Ppn"), Column("PPN"), Size(19), Scale(4)]
        public Decimal? Ppn
        {
            get { return Fields.Ppn[this]; }
            set { Fields.Ppn[this] = value; }
        }

        [DisplayName("Km In Use")]
        public Int32? KmInUse
        {
            get { return Fields.KmInUse[this]; }
            set { Fields.KmInUse[this] = value; }
        }

        [DisplayName("Service Quantity")]
        public Int16? ServiceQuantity
        {
            get { return Fields.ServiceQuantity[this]; }
            set { Fields.ServiceQuantity[this] = value; }
        }

        [DisplayName("Order Number"), Size(50), QuickSearch]
        public String OrderNumber
        {
            get { return Fields.OrderNumber[this]; }
            set { Fields.OrderNumber[this] = value; }
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Customer Dealer Id"), Column("CustomerDealerID"), LookupInclude]
        public Int32? CustomerDealerId
        {
            get { return Fields.CustomerDealerId[this]; }
            set { Fields.CustomerDealerId[this] = value; }
        }

        [DisplayName("User Id"), Column("UserID")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Product Type Id"), Column("ProductTypeID"), LookupInclude]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Product Unit Id"), Column("ProductUnitID")]
        public Int32? ProductUnitId
        {
            get { return Fields.ProductUnitId[this]; }
            set { Fields.ProductUnitId[this] = value; }
        }

        [DisplayName("Order Product Serial Number"), Size(50)]
        public String OrderProductSerialNumber
        {
            get { return Fields.OrderProductSerialNumber[this]; }
            set { Fields.OrderProductSerialNumber[this] = value; }
        }

        [DisplayName("Order Product Color"), Size(20)]
        public String OrderProductColor
        {
            get { return Fields.OrderProductColor[this]; }
            set { Fields.OrderProductColor[this] = value; }
        }

        [DisplayName("Order Product Manufacture Year")]
        public Int32? OrderProductManufactureYear
        {
            get { return Fields.OrderProductManufactureYear[this]; }
            set { Fields.OrderProductManufactureYear[this] = value; }
        }

        [DisplayName("Payment Service"), Size(19), Scale(4)]
        public Decimal? PaymentService
        {
            get { return Fields.PaymentService[this]; }
            set { Fields.PaymentService[this] = value; }
        }

        [DisplayName("Order Status"), Size(20)]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Number"), Size(50)]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }


        [DisplayName("Product Number Name"), Size(50), LookupInclude]
        public String ProductNumberName
        {
            get { return Fields.ProductNumberName[this]; }
            set { Fields.ProductNumberName[this] = value; }
        }

        [DisplayName("Part Number"), Size(50)]
        public String PartNumber
        {
            get { return Fields.PartNumber[this]; }
            set { Fields.PartNumber[this] = value; }
        }

        [DisplayName("Product Category Id"), Column("ProductCategoryID")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Product Image"), Size(100)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Description"), Size(10)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Bin Location"), Size(100)]
        public String BinLocation
        {
            get { return Fields.BinLocation[this]; }
            set { Fields.BinLocation[this] = value; }
        }

        [DisplayName("Merek"), Size(50)]
        public String Merek
        {
            get { return Fields.Merek[this]; }
            set { Fields.Merek[this] = value; }
        }

        [DisplayName("Police Number"), Size(50)]
        public String PoliceNumber
        {
            get { return Fields.PoliceNumber[this]; }
            set { Fields.PoliceNumber[this] = value; }
        }

        [DisplayName("Machine No"), Size(50)]
        public String MachineNo
        {
            get { return Fields.MachineNo[this]; }
            set { Fields.MachineNo[this] = value; }
        }

        [DisplayName("Serial Number"), Size(50)]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Color"), Size(50)]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("Manufacture Year")]
        public Int16? ManufactureYear
        {
            get { return Fields.ManufactureYear[this]; }
            set { Fields.ManufactureYear[this] = value; }
        }

        [DisplayName("Product Type Name"), Size(50)]
        public String ProductTypeName
        {
            get { return Fields.ProductTypeName[this]; }
            set { Fields.ProductTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewProductUnitOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderDetailId;
            public Int32Field OrderId;
            public Int32Field ProductId;
            public Int16Field OrderQty;
            public Int32Field ProductPriceId;
            public Int32Field CostId;
            public Int32Field OrderCategoryId;
            public DecimalField BasePrice;
            public DecimalField Total;
            public DecimalField Ppn;
            public Int32Field KmInUse;
            public Int16Field ServiceQuantity;
            public StringField OrderNumber;
            public DateTimeField OrderDate;
            public Int32Field CustomerDealerId;
            public Int32Field UserId;
            public Int32Field ProductTypeId;
            public Int32Field ProductUnitId;
            public StringField OrderProductSerialNumber;
            public StringField OrderProductColor;
            public Int32Field OrderProductManufactureYear;
            public DecimalField PaymentService;
            public StringField OrderStatus;
            public StringField ProductName;
            public StringField ProductNumber;
            public StringField ProductNumberName;
            public StringField PartNumber;
            public Int32Field ProductCategoryId;
            public BooleanField Discontinued;
            public StringField ProductImage;
            public StringField Description;
            public StringField BinLocation;
            public StringField Merek;
            public StringField PoliceNumber;
            public StringField MachineNo;
            public StringField SerialNumber;
            public StringField Color;
            public Int16Field ManufactureYear;
            public StringField ProductTypeName;

            public RowFields()
                : base("[dbo].[ViewProductUnitOrder]")
            {
                LocalTextPrefix = "DIS.ViewProductUnitOrder";
            }
        }
    }
}