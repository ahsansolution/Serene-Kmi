

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

    [ConnectionKey("Default"), DisplayName("PurchaseOrderDetail"), InstanceName("PurchaseOrderDetail"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.PurchaseOrderDetail")]
    public sealed class PurchaseOrderDetailRow : Row, IIdRow
    {
        [DisplayName("Purchase Order Detail Id"), Column("PurchaseOrderDetailID"), Identity]
        public Int32? PurchaseOrderDetailId
        {
            get { return Fields.PurchaseOrderDetailId[this]; }
            set { Fields.PurchaseOrderDetailId[this] = value; }
        }

        [DisplayName("Purchase Order"), Column("PurchaseOrderID"), ForeignKey("[dbo].[PurchaseOrder]", "PurchaseOrderID"), 
            LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderPurchaseOrderNumber"), LookupInclude]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(ProductsRow))]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("ProductPriceId"), Expression("jProduct.ProductID"), ForeignKey("[dbo].[ProductPrice]", "ProductID"), LeftJoin("jProductPrice")]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
        }


        [DisplayName("Price"), Column("Price"), LookupInclude, DisplayFormat("#,##0.00"), AlignRight]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Quantity"), LookupInclude]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
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

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Product Number"), Expression("jProduct.[ProductNumber]"), LookupInclude]
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

        [DisplayName("Serial Number"), Expression("jProduct.[SerialNumber]")]
        public String ProductSerialNumber
        {
            get { return Fields.ProductSerialNumber[this]; }
            set { Fields.ProductSerialNumber[this] = value; }
        }

        [DisplayName("Color"), Expression("jProduct.[Color]")]
        public String ProductColor
        {
            get { return Fields.ProductColor[this]; }
            set { Fields.ProductColor[this] = value; }
        }


        [DisplayName("Manufacture Year"), Expression("jProduct.[ManufactureYear]")]
        public String ProductManufactureYear
        {
            get { return Fields.ProductManufactureYear[this]; }
            set { Fields.ProductManufactureYear[this] = value; }
        }



        [DisplayName("Line Total"), AlignRight, DisplayFormat("#,##0.00"), Column("Total")]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("PPN"), AlignRight, DisplayFormat("#,##0.00"), Column("PPN")]
        public Decimal? CostTotal
        {
            get { return Fields.CostTotal[this]; }
            set { Fields.CostTotal[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseOrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderDetailId;
            public Int32Field PurchaseOrderId;
            public Int32Field ProductId;
            public Int16Field Quantity;
            public Int32Field ProductPriceId;
            public DecimalField Price;
            public DecimalField LineTotal;
            public DecimalField CostTotal;

            public StringField PurchaseOrderPurchaseOrderNumber;
            public Int32Field PurchaseOrderCompanyId;
            public DateTimeField PurchaseOrderPurchaseOrderDate;
            public Int32Field PurchaseOrderCostId;
            public Int32Field PurchaseOrderOrderCategoryId;
            public StringField PurchaseOrderPurchaseOrderStatus;

            public StringField ProductProductName;
            public StringField ProductSerialNumber;
            public StringField ProductColor;
            public StringField ProductManufactureYear;
            public StringField ProductProductNumber;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductProductTypeId;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public StringField ProductBinLocation;

            public RowFields()
                : base("[dbo].[PurchaseOrderDetail]")
            {
                LocalTextPrefix = "DIS.PurchaseOrderDetail";
            }
        }
    }
}