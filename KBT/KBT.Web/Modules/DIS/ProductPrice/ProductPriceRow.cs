

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

    [ConnectionKey("Default"), DisplayName("ProductPrice"), InstanceName("ProductPrice"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ProductPrice")]
    public sealed class ProductPriceRow : Row, IIdRow
    {
        [DisplayName("Product Price Id"), Column("ProductPriceID"), Identity]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName"), LookupInclude]
        //[ProductLookupEditor, QuickFilter]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order Category"), ForeignKey("[dbo].[OrderCategory]", "OrderCategoryId"), LeftJoin("jOrderCategory"), TextualField("OrderCategoryOrderCategoryName"), LookupInclude]
        [LookupEditor(typeof(OrderCategoryRow))]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Price"), Size(18), LookupInclude]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Is Active")]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Entry Date")]
        public DateTime? EntryDate
        {
            get { return Fields.EntryDate[this]; }
            set { Fields.EntryDate[this] = value; }
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

        [DisplayName("Order Category Order Category Name"), Expression("jOrderCategory.[OrderCategoryName]"), LookupEditor(typeof(OrderCategoryRow)), QuickFilter]
        public String OrderCategoryOrderCategoryName
        {
            get { return Fields.OrderCategoryOrderCategoryName[this]; }
            set { Fields.OrderCategoryOrderCategoryName[this] = value; }
        }

        [DisplayName("Order Category Description"), Expression("jOrderCategory.[Description]")]
        public String OrderCategoryDescription
        {
            get { return Fields.OrderCategoryDescription[this]; }
            set { Fields.OrderCategoryDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductPriceId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductPriceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductPriceId;
            public Int32Field ProductId;
            public Int32Field OrderCategoryId;
            public DecimalField Price;
            public BooleanField IsActive;
            public DateTimeField EntryDate;

            public StringField ProductProductName;
            public StringField ProductProductNumber;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductProductTypeId;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public StringField ProductBinLocation;

            public StringField OrderCategoryOrderCategoryName;
            public StringField OrderCategoryDescription;

            public RowFields()
                : base("[dbo].[ProductPrice]")
            {
                LocalTextPrefix = "DIS.ProductPrice";
            }
        }
    }
}