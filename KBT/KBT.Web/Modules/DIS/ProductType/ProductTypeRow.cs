

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

    [ConnectionKey("Default"), DisplayName("ProductType"), InstanceName("ProductType"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ProductType")]
    public sealed class ProductTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Type Id"), Column("ProductTypeID"), Identity]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Product Type Name"), Size(50), QuickSearch]
        public String ProductTypeName
        {
            get { return Fields.ProductTypeName[this]; }
            set { Fields.ProductTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductTypeId;
            public StringField ProductTypeName;

            public RowFields()
                : base("[dbo].[ProductType]")
            {
                LocalTextPrefix = "DIS.ProductType";
            }
        }
    }
}