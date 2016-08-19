

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

    [ConnectionKey("Default"), DisplayName("ServiceUnit"), InstanceName("ServiceUnit"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ServiceUnit")]
    public sealed class ServiceUnitRow : Row, IIdRow
    {
        [DisplayName("Service Unit Id"), Column("ServiceUnitID"), Identity]
        public Int32? ServiceUnitId
        {
            get { return Fields.ServiceUnitId[this]; }
            set { Fields.ServiceUnitId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Customer Dealer"), Column("CustomerDealerID"), ForeignKey("[dbo].[CustomerDealer]", "CustomerDealerID"), LeftJoin("jCustomerDealer"), TextualField("CustomerDealerCustomerDealerName")]
        public Int32? CustomerDealerId
        {
            get { return Fields.CustomerDealerId[this]; }
            set { Fields.CustomerDealerId[this] = value; }
        }

        [DisplayName("Order Unit"), Column("OrderUnitID"), ForeignKey("[dbo].[Orders]", "OrderID"), LeftJoin("jOrderUnit"), TextualField("OrderUnitOrderNumber")]
        public Int32? OrderUnitId
        {
            get { return Fields.OrderUnitId[this]; }
            set { Fields.OrderUnitId[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
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

        [DisplayName("Product Part Number"), Expression("jProduct.[PartNumber]")]
        public String ProductPartNumber
        {
            get { return Fields.ProductPartNumber[this]; }
            set { Fields.ProductPartNumber[this] = value; }
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

        [DisplayName("Product Merek"), Expression("jProduct.[Merek]")]
        public String ProductMerek
        {
            get { return Fields.ProductMerek[this]; }
            set { Fields.ProductMerek[this] = value; }
        }

        [DisplayName("Product Police Number"), Expression("jProduct.[PoliceNumber]")]
        public String ProductPoliceNumber
        {
            get { return Fields.ProductPoliceNumber[this]; }
            set { Fields.ProductPoliceNumber[this] = value; }
        }

        [DisplayName("Product Machine No"), Expression("jProduct.[MachineNo]")]
        public String ProductMachineNo
        {
            get { return Fields.ProductMachineNo[this]; }
            set { Fields.ProductMachineNo[this] = value; }
        }

        [DisplayName("Product Serial Number"), Expression("jProduct.[SerialNumber]")]
        public String ProductSerialNumber
        {
            get { return Fields.ProductSerialNumber[this]; }
            set { Fields.ProductSerialNumber[this] = value; }
        }

        [DisplayName("Product Color"), Expression("jProduct.[Color]")]
        public String ProductColor
        {
            get { return Fields.ProductColor[this]; }
            set { Fields.ProductColor[this] = value; }
        }

        [DisplayName("Product Manufacture Year"), Expression("jProduct.[ManufactureYear]")]
        public Int16? ProductManufactureYear
        {
            get { return Fields.ProductManufactureYear[this]; }
            set { Fields.ProductManufactureYear[this] = value; }
        }

        [DisplayName("Customer Dealer Customer Dealer Name"), Expression("jCustomerDealer.[CustomerDealerName]")]
        public String CustomerDealerCustomerDealerName
        {
            get { return Fields.CustomerDealerCustomerDealerName[this]; }
            set { Fields.CustomerDealerCustomerDealerName[this] = value; }
        }

        [DisplayName("Customer Dealer Address"), Expression("jCustomerDealer.[Address]")]
        public String CustomerDealerAddress
        {
            get { return Fields.CustomerDealerAddress[this]; }
            set { Fields.CustomerDealerAddress[this] = value; }
        }

        [DisplayName("Order Unit Order Number"), Expression("jOrderUnit.[OrderNumber]")]
        public String OrderUnitOrderNumber
        {
            get { return Fields.OrderUnitOrderNumber[this]; }
            set { Fields.OrderUnitOrderNumber[this] = value; }
        }

        [DisplayName("Order Unit Order Date"), Expression("jOrderUnit.[OrderDate]")]
        public DateTime? OrderUnitOrderDate
        {
            get { return Fields.OrderUnitOrderDate[this]; }
            set { Fields.OrderUnitOrderDate[this] = value; }
        }

        [DisplayName("Order Unit Customer Dealer Id"), Expression("jOrderUnit.[CustomerDealerID]")]
        public Int32? OrderUnitCustomerDealerId
        {
            get { return Fields.OrderUnitCustomerDealerId[this]; }
            set { Fields.OrderUnitCustomerDealerId[this] = value; }
        }

        [DisplayName("Order Unit User Id"), Expression("jOrderUnit.[UserID]")]
        public Int32? OrderUnitUserId
        {
            get { return Fields.OrderUnitUserId[this]; }
            set { Fields.OrderUnitUserId[this] = value; }
        }

        [DisplayName("Order Unit Product Type Id"), Expression("jOrderUnit.[ProductTypeID]")]
        public Int32? OrderUnitProductTypeId
        {
            get { return Fields.OrderUnitProductTypeId[this]; }
            set { Fields.OrderUnitProductTypeId[this] = value; }
        }

       

        [DisplayName("Order Unit Km In Use"), Expression("jOrderUnit.[KmInUse]")]
        public Int16? OrderUnitKmInUse
        {
            get { return Fields.OrderUnitKmInUse[this]; }
            set { Fields.OrderUnitKmInUse[this] = value; }
        }

        [DisplayName("Order Unit Payment Service"), Expression("jOrderUnit.[PaymentService]")]
        public Decimal? OrderUnitPaymentService
        {
            get { return Fields.OrderUnitPaymentService[this]; }
            set { Fields.OrderUnitPaymentService[this] = value; }
        }

        [DisplayName("Order Unit Order Status"), Expression("jOrderUnit.[OrderStatus]")]
        public String OrderUnitOrderStatus
        {
            get { return Fields.OrderUnitOrderStatus[this]; }
            set { Fields.OrderUnitOrderStatus[this] = value; }
        }

        [DisplayName("Service Unit Detail"), MasterDetailRelation(foreignKey: "ServiceUnitID", CheckChangesOnUpdate = false), ClientSide, MinSelectLevel(SelectLevel.List)]
        public List<ServiceUnitDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceUnitId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ServiceUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceUnitId;
            public Int32Field ProductId;
            public Int32Field CustomerDealerId;
            public Int32Field OrderUnitId;

            public StringField ProductProductName;
            public StringField ProductProductNumber;
            public StringField ProductPartNumber;
            public Int32Field ProductProductCategoryId;
            public Int32Field ProductProductTypeId;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public StringField ProductDescription;
            public StringField ProductBinLocation;
            public StringField ProductMerek;
            public StringField ProductPoliceNumber;
            public StringField ProductMachineNo;
            public StringField ProductSerialNumber;
            public StringField ProductColor;
            public Int16Field ProductManufactureYear;

            public StringField CustomerDealerCustomerDealerName;
            public StringField CustomerDealerAddress;

            public StringField OrderUnitOrderNumber;
            public DateTimeField OrderUnitOrderDate;
            public Int32Field OrderUnitCustomerDealerId;
            public Int32Field OrderUnitUserId;
            public Int32Field OrderUnitProductTypeId;
            public Int16Field OrderUnitKmInUse;
            public DecimalField OrderUnitPaymentService;
            public StringField OrderUnitOrderStatus;

            public RowListField<ServiceUnitDetailRow> DetailList;

            public RowFields()
                : base("[dbo].[ServiceUnit]")
            {
                LocalTextPrefix = "DIS.ServiceUnit";
            }
        }
    }
}