

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

    [ConnectionKey("Default"), DisplayName("ViewProductUnit"), InstanceName("ViewProductUnit"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ViewProductUnitRow : Row, INameRow
    {
        [DisplayName("Order Number"), Size(50), QuickSearch]
        public String OrderNumber
        {
            get { return Fields.OrderNumber[this]; }
            set { Fields.OrderNumber[this] = value; }
        }

        [DisplayName("Customer Name"), Size(50)]
        public String CustomerDealerName
        {
            get { return Fields.CustomerDealerName[this]; }
            set { Fields.CustomerDealerName[this] = value; }
        }

        [DisplayName("Address"), Size(200)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Serial Number"), Size(50)]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Man. Year")]
        public Int16? ManufactureYear
        {
            get { return Fields.ManufactureYear[this]; }
            set { Fields.ManufactureYear[this] = value; }
        }

        [DisplayName("Color"), Size(50)]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("Order Id"), Column("OrderID"), NotNull]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Detail Id"), Column("OrderDetailID"), NotNull]
        public Int32? OrderDetailId
        {
            get { return Fields.OrderDetailId[this]; }
            set { Fields.OrderDetailId[this] = value; }
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewProductUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField OrderNumber;
            public StringField CustomerDealerName;
            public StringField Address;
            public StringField ProductName;
            public StringField SerialNumber;
            public Int16Field ManufactureYear;
            public StringField Color;
            public Int32Field OrderId;
            public Int32Field OrderDetailId;
            public DateTimeField OrderDate;

            public RowFields()
                : base("[dbo].[ViewProductUnit]")
            {
                LocalTextPrefix = "DIS.ViewProductUnit";
            }
        }
    }
}