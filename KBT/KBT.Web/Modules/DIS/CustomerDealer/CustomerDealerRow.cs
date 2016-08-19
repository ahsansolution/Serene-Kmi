

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

    [ConnectionKey("Default"), DisplayName("CustomerDealer"), InstanceName("CustomerDealer"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.CustomerDealer")]
    public sealed class CustomerDealerRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Dealer Id"), Column("CustomerDealerID"), Identity]
        public Int32? CustomerDealerId
        {
            get { return Fields.CustomerDealerId[this]; }
            set { Fields.CustomerDealerId[this] = value; }
        }

        [DisplayName("Customer Dealer Name"), Size(50), QuickSearch]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerDealerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerDealerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerDealerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerDealerId;
            public StringField CustomerDealerName;
            public StringField Address;

            public RowFields()
                : base("[dbo].[CustomerDealer]")
            {
                LocalTextPrefix = "DIS.CustomerDealer";
            }
        }
    }
}