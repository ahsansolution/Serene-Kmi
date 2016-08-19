

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

    [ConnectionKey("Default"), DisplayName("ViewProductStock"), InstanceName("ViewProductStock"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.ViewProductStock")]
    public sealed class ViewProductStockRow : Row,  INameRow
    {
        [DisplayName("Product Id"), Column("ProductID"), LookupInclude]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull, QuickSearch, LookupInclude]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Number"), Size(50), LookupInclude]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }

        [DisplayName("Product Type Id"), Column("ProductTypeID"), ForeignKey("ProductType", "ProductTypeID"), LeftJoin("type")]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeID[this]; }
            set { Fields.ProductTypeID[this] = value; }
        }

        [DisplayName("Product Type Name"), Size(50), Expression("type.[ProductTypeName]")]
        public String ProductTypeNameDesc
        {
            get { return Fields.ProductTypeNameDesc[this]; }
            set { Fields.ProductTypeNameDesc[this] = value; }
        }

        [DisplayName("Product Type Name"), Size(50)]
        public String ProductTypeName
        {
            get { return Fields.ProductTypeName[this]; }
            set { Fields.ProductTypeName[this] = value; }
        }

        [DisplayName("Total In"), LookupInclude]
        public Int32? TotalIn
        {
            get { return Fields.TotalIn[this]; }
            set { Fields.TotalIn[this] = value; }
        }

        [DisplayName("Total Out"), LookupInclude]
        public Int32? TotalOut
        {
            get { return Fields.TotalOut[this]; }
            set { Fields.TotalOut[this] = value; }
        }

        [DisplayName("Stock"), LookupInclude]
        public Int32? Stock
        {
            get { return Fields.Stock[this]; }
            set { Fields.Stock[this] = value; }
        }

        //IIdField IIdRow.IdField
        //{
        //    get { return Fields.ProductId; }
        //}

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewProductStockRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public StringField ProductName;
            public StringField ProductNumber;
            public StringField ProductTypeName;
            public Int32Field TotalIn;
            public Int32Field TotalOut;
            public Int32Field Stock;

            public Int32Field ProductTypeID;
            public StringField ProductTypeNameDesc;

            public RowFields()
                : base("[dbo].[ViewProductStock]")
            {
                LocalTextPrefix = "DIS.ViewProductStock";
            }
        }
    }
}