

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

    [ConnectionKey("Default"), DisplayName("OrderCategory"), InstanceName("OrderCategory"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.OrderCategory")]
    public sealed class OrderCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Category Id"), Identity]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Order Category Name"), Size(50), QuickSearch]
        public String OrderCategoryName
        {
            get { return Fields.OrderCategoryName[this]; }
            set { Fields.OrderCategoryName[this] = value; }
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderCategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderCategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderCategoryId;
            public StringField OrderCategoryName;
            public StringField Description;

            public RowFields()
                : base("[dbo].[OrderCategory]")
            {
                LocalTextPrefix = "DIS.OrderCategory";
            }
        }
    }
}