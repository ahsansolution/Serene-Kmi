

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

    [ConnectionKey("Default"), DisplayName("OrderDetail"), InstanceName("OrderDetail"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class OrderDetailRow : Row, IIdRow
    {
        [DisplayName("Order Detail Id"), Column("OrderDetailID"), Identity]
        public Int32? OrderDetailId
        {
            get { return Fields.OrderDetailId[this]; }
            set { Fields.OrderDetailId[this] = value; }
        }

        [DisplayName("Order"), Column("OrderID"), ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jOrder")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), 
            LeftJoin("jProduct"), TextualField("ProductProductName"), LookupInclude, MinSelectLevel(SelectLevel.List)]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Qty")]
        public Int16? OrderQty
        {
            get { return Fields.OrderQty[this]; }
            set { Fields.OrderQty[this] = value; }
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

        [DisplayName("Product Price"), Column("ProductPriceID"), ForeignKey("[dbo].[ProductPrice]", "ProductPriceID"), LeftJoin("jProductPrice")]
        public Int32? ProductPriceId
        {
            get { return Fields.ProductPriceId[this]; }
            set { Fields.ProductPriceId[this] = value; }
        }

        [DisplayName("Cost"), Column("CostID"), ForeignKey("[dbo].[Cost]", "CostID"), LeftJoin("jCost"), 
            TextualField("CostCostName"), LookupInclude]
        public Int32? CostId
        {
            get { return Fields.CostId[this]; }
            set { Fields.CostId[this] = value; }
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

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List)]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Number"), Expression("jProduct.[ProductNumber]")]
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

        [DisplayName("Product Price Product Id"), Expression("jProductPrice.[ProductID]")]
        public Int32? ProductPriceProductId
        {
            get { return Fields.ProductPriceProductId[this]; }
            set { Fields.ProductPriceProductId[this] = value; }
        }

        [DisplayName("Product Price Order Category Id"), Expression("jProductPrice.[OrderCategoryID]")]
        public Int32? ProductPriceOrderCategoryId
        {
            get { return Fields.ProductPriceOrderCategoryId[this]; }
            set { Fields.ProductPriceOrderCategoryId[this] = value; }
        }

        [DisplayName("Price"), Expression("jProductPrice.[Price]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public Decimal? ProductPricePrice
        {
            get { return Fields.ProductPricePrice[this]; }
            set { Fields.ProductPricePrice[this] = value; }
        }

        [DisplayName("Price"), DisplayFormat("#,##0.00")]
        public Decimal? BasePrice
        {
            get { return Fields.BasePrice[this]; }
            set { Fields.BasePrice[this] = value; }
        }

        [DisplayName("Order Category Id"), Column("OrderCategoryID"), ForeignKey("OrderCategory", "OrderCategoryId"), LeftJoin("cat")]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Order Cat Name"), Expression("cat.[OrderCategoryName]")]
        public String OrderCategoryName
        {
            get { return Fields.OrderCategoryName[this]; }
            set { Fields.OrderCategoryName[this] = value; }
        }

        [DisplayName("Product Price Is Active"), Expression("jProductPrice.[IsActive]")]
        public Boolean? ProductPriceIsActive
        {
            get { return Fields.ProductPriceIsActive[this]; }
            set { Fields.ProductPriceIsActive[this] = value; }
        }

        [DisplayName("Product Price Entry Date"), Expression("jProductPrice.[EntryDate]")]
        public DateTime? ProductPriceEntryDate
        {
            get { return Fields.ProductPriceEntryDate[this]; }
            set { Fields.ProductPriceEntryDate[this] = value; }
        }

        [DisplayName("Cost Cost Name"), Expression("jCost.[CostName]")]
        public String CostCostName
        {
            get { return Fields.CostCostName[this]; }
            set { Fields.CostCostName[this] = value; }
        }

       

        [DisplayName("Stock"), ClientSide]
        public Int16? Stock
        {
            get { return Fields.Stock[this]; }
            set { Fields.Stock[this] = value; }
        }

        [DisplayName("Cost Amount"), Expression("jCost.[Amount]")]
        public Decimal? CostAmount
        {
            get { return Fields.CostAmount[this]; }
            set { Fields.CostAmount[this] = value; }
        }

        [DisplayName("Cost Percentage"), Expression("jCost.[Percentage]")]
        public Int16? CostPercentage
        {
            get { return Fields.CostPercentage[this]; }
            set { Fields.CostPercentage[this] = value; }
        }

        [DisplayName("Km")]
        public Int16? KmInUse
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

        
        [DisplayName("Machine No"), Size(10), Expression("jProduct.[MachineNo]"), LookupInclude]
        public String OrderDetailProductMachineNo
        {
            get { return Fields.OrderDetailProductMachineNo[this]; }
            set { Fields.OrderDetailProductMachineNo[this] = value; }
        }

        [DisplayName("Serial Number"), Size(10), Expression("jProduct.[SerialNumber]"), LookupInclude]
        public String OrderDetailProductSerialNumber
        {
            get { return Fields.OrderDetailProductSerialNumber[this]; }
            set { Fields.OrderDetailProductSerialNumber[this] = value; }
        }

        [DisplayName("Color"), Size(10), Expression("jProduct.[Color]"), LookupInclude]
        public String OrderDetailProductColor
        {
            get { return Fields.OrderDetailProductColor[this]; }
            set { Fields.OrderDetailProductColor[this] = value; }
        }

        [DisplayName("ManufactureYear"), Size(10), Expression("jProduct.[ManufactureYear]"), LookupInclude]
        public Int16? OrderDetailProductManufactureYear
        {
            get { return Fields.OrderDetailProductManufactureYear[this]; }
            set { Fields.OrderDetailProductManufactureYear[this] = value; }
        }

        [DisplayName("Service Unit Detail Id"), Column("ServiceUnitDetailId")]
        public Int32? ServiceUnitDetailId
        {
            get { return Fields.ServiceUnitDetailId[this]; }
            set { Fields.ServiceUnitDetailId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderDetailId;
            public Int32Field OrderId;
            public Int32Field ProductID;
            public Int16Field OrderQty;
            public Int32Field ProductPriceId;
            public Int32Field CostId;

            public DateTimeField OrderOrderDate;
            public Int32Field OrderCustomerDealerId;
            public Int32Field OrderUserId;

            public StringField ProductProductName;
            public StringField ProductProductNumber;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductProductTypeId;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public StringField ProductBinLocation;

            public Int32Field ProductPriceProductId;
            public Int32Field ProductPriceOrderCategoryId;
            public DecimalField ProductPricePrice;
            public BooleanField ProductPriceIsActive;
            public DateTimeField ProductPriceEntryDate;

            public StringField CostCostName;
            public DecimalField CostAmount;
            public DecimalField CostTotal;
            public DecimalField BasePrice;
            public DecimalField LineTotal;
            public Int16Field CostPercentage;

            public Int16Field KmInUse;
            public Int16Field ServiceQuantity;

            public Int32Field OrderCategoryId;
            public StringField OrderCategoryName;
            public Int16Field Stock;

            public StringField OrderDetailProductMachineNo;
            public StringField OrderDetailProductSerialNumber;
            public StringField OrderDetailProductColor;
            public Int16Field OrderDetailProductManufactureYear;

            public Int32Field ServiceUnitDetailId;

            public RowFields()
                : base("[dbo].[OrderDetail]")
            {
                LocalTextPrefix = "DIS.OrderDetail";
            }
        }
    }
}