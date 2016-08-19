

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

    [ConnectionKey("Default"), DisplayName("Orders"), InstanceName("Orders"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.Orders")]
    public sealed class OrdersRow : Row, IIdRow
    {
        [DisplayName("Order Id"), Column("OrderID"), Identity]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Order Number")]
        public String OrderNumber
        {
            get { return Fields.OrderNumber[this]; }
            set { Fields.OrderNumber[this] = value; }
        }

        [DisplayName("Customer Dealer"), LookupInclude, Column("CustomerDealerID"), ForeignKey("[dbo].[CustomerDealer]", "CustomerDealerID"), LeftJoin("jCustomerDealer"), TextualField("CustomerDealerCustomerDealerName")]
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
        public Int32? ProductTypeID
        {
            get { return Fields.ProductTypeID[this]; }
            set { Fields.ProductTypeID[this] = value; }
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

        [DisplayName("Order Status"), LookupInclude, DefaultValue("Complete")]
        public String OrderStatus
        {
            get { return Fields.OrderStatus[this]; }
            set { Fields.OrderStatus[this] = value; }
        }

        [DisplayName("Payment Service")]
        public Decimal? PaymentService
        {
            get { return Fields.PaymentService[this]; }
            set { Fields.PaymentService[this] = value; }
        }

   

        [DisplayName("KM"), Size(10), LookupInclude]
        public Int16? KmInUse
        {
            get { return Fields.KmInUse[this]; }
            set { Fields.KmInUse[this] = value; }
        }


        [DisplayName("Order Detail"), MasterDetailRelation(foreignKey: "OrderID"), ClientSide, MinSelectLevel(SelectLevel.List)]
        public List<OrderDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public DateTimeField OrderDate;
            public Int32Field CustomerDealerId;
            public Int32Field UserId;
            public Int32Field ProductTypeID;

            public StringField OrderNumber;
            public StringField CustomerDealerCustomerDealerName;
            public StringField CustomerDealerAddress;

            public StringField OrderStatus;
            public RowListField<OrderDetailRow> DetailList;

            public DecimalField PaymentService;

           

            public Int16Field KmInUse;

            public RowFields()
                : base("[dbo].[Orders]")
            {
                LocalTextPrefix = "DIS.Orders";
            }
        }
    }
}