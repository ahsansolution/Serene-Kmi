

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

    [ConnectionKey("Default"), DisplayName("ProductCategory"), InstanceName("ProductCategory"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ProductCategory")]
    public sealed class ProductCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Category Id"), Column("ProductCategoryID"), Identity]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Category Name"), Size(50), QuickSearch]
        public String ProductCategoryName
        {
            get { return Fields.ProductCategoryName[this]; }
            set { Fields.ProductCategoryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductCategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductCategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductCategoryId;
            public StringField ProductCategoryName;

            public RowFields()
                : base("[dbo].[ProductCategory]")
            {
                LocalTextPrefix = "DIS.ProductCategory";
            }
        }
    }
}