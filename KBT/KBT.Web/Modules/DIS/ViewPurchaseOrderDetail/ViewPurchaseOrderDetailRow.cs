

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

    [ConnectionKey("Default"), DisplayName("ViewPurchaseOrderDetail"), InstanceName("ViewPurchaseOrderDetail"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ViewPurchaseOrderDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Order Detail Id"), Column("PurchaseOrderDetailID"), NotNull]
        public Int32? PurchaseOrderDetailId
        {
            get { return Fields.PurchaseOrderDetailId[this]; }
            set { Fields.PurchaseOrderDetailId[this] = value; }
        }

        [DisplayName("Purchase Order Id"), Column("PurchaseOrderID")]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Quantity")]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(4)]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Ppn"), Column("PPN"), Size(19), Scale(4)]
        public Decimal? Ppn
        {
            get { return Fields.Ppn[this]; }
            set { Fields.Ppn[this] = value; }
        }

        [DisplayName("Total"), Size(19), Scale(4)]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Product Price Id"), Column("ProductPriceID")]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull, QuickSearch]
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

        [DisplayName("Product Type Id"), Column("ProductTypeID")]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewPurchaseOrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderDetailId;
            public Int32Field PurchaseOrderId;
            public Int32Field ProductId;
            public Int16Field Quantity;
            public DecimalField Price;
            public DecimalField Ppn;
            public DecimalField Total;
            public Int32Field ProductPriceId;
            public StringField ProductName;
            public StringField ProductNumber;
            public StringField PartNumber;
            public Int32Field ProductCategoryId;
            public Int32Field ProductTypeId;
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

            public RowFields()
                : base("[dbo].[ViewPurchaseOrderDetail]")
            {
                LocalTextPrefix = "DIS.ViewPurchaseOrderDetail";
            }
        }
    }
}