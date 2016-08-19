

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

    [ConnectionKey("Default"), DisplayName("Inventory"), InstanceName("Inventory"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.Inventory")]
    public sealed class InventoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Inventory Id"), Column("InventoryID"), Identity]
        public Int32? InventoryId
        {
            get { return Fields.InventoryId[this]; }
            set { Fields.InventoryId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(ProductsRow))]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order Category"), ForeignKey("[dbo].[OrderCategory]", "OrderCategoryId"), LeftJoin("jOrderCategory"), TextualField("OrderCategoryOrderCategoryName")]
        [LookupEditor(typeof(OrderCategoryRow))]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Order Category Order Category Name"), Expression("jOrderCategory.[OrderCategoryName]")]
        public String OrderCategoryOrderCategoryName
        {
            get { return Fields.OrderCategoryOrderCategoryName[this]; }
            set { Fields.OrderCategoryOrderCategoryName[this] = value; }
        }

        [DisplayName("Qty")]
        public Int32? Qty
        {
            get { return Fields.Qty[this]; }
            set { Fields.Qty[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]"), ProductLookupEditor, QuickFilter]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Product Number"), Expression("jProduct.[ProductNumber]")]
        public String ProductProductNumber
        {
            get { return Fields.ProductProductNumber[this]; }
            set { Fields.ProductProductNumber[this] = value; }
        }

        [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryID]")]
        public Int32? ProductProductCategoryId
        {
            get { return Fields.ProductProductCategoryId[this]; }
            set { Fields.ProductProductCategoryId[this] = value; }
        }

        [DisplayName("Product Product Type Id"), Expression("jProduct.[ProductTypeID]")]
        public Int32? ProductProductTypeId
        {
            get { return Fields.ProductProductTypeId[this]; }
            set { Fields.ProductProductTypeId[this] = value; }
        }

        [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Description"), Expression("jProduct.[Description]")]
        public String ProductDescription
        {
            get { return Fields.ProductDescription[this]; }
            set { Fields.ProductDescription[this] = value; }
        }

        [DisplayName("Product Bin Location"), Expression("jProduct.[BinLocation]")]
        public String ProductBinLocation
        {
            get { return Fields.ProductBinLocation[this]; }
            set { Fields.ProductBinLocation[this] = value; }
        }

        [DisplayName("Status"), Column("InventoryStatus")]
        public String InventoryStatus
        {
            get { return Fields.InventoryStatus[this]; }
            set { Fields.InventoryStatus[this] = value; }
        }

        [DisplayName("Document No"), Column("DocumentNo")]
        public String DocumentNo
        {
            get { return Fields.DocumentNo[this]; }
            set { Fields.DocumentNo[this] = value; }
        }

        [DisplayName("Entry Date"), Column("EntryDate")]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InventoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InventoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field InventoryId;
            public Int32Field ProductId;
            public Int32Field OrderCategoryId;
            public StringField OrderCategoryOrderCategoryName;
            public Int32Field Qty;

            public StringField ProductProductName;
            public StringField ProductProductNumber;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductProductTypeId;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public StringField ProductBinLocation;
            public StringField InventoryStatus;
            public StringField DocumentNo;

            public DateTimeField EntryDate;

            public RowFields()
                : base("[dbo].[Inventory]")
            {
                LocalTextPrefix = "DIS.Inventory";
            }
        }
    }
}