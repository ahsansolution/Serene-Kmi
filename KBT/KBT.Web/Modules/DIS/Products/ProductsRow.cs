

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

    [ConnectionKey("Default"), DisplayName("Products"), InstanceName("Products"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.Products")]
    public sealed class ProductsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Id"), Column("ProductID"), Identity]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), NotNull, QuickSearch, MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }
        //LookupEditor("DIS.ProductNumberLookup")
        [DisplayName("Product Number"), Size(10), LookupInclude, MinSelectLevel(SelectLevel.List), QuickFilter, ProductNumberLookupEditor]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }

        [DisplayName("Product Category"), Column("ProductCategoryID"), ForeignKey("[dbo].[ProductCategory]", "ProductCategoryID"), LeftJoin("jProductCategory"), TextualField("ProductCategoryProductCategoryName")]
        [LookupEditor(typeof(ProductCategoryRow), InplaceAdd = true)]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Type"), LookupInclude, Column("ProductTypeID"), ForeignKey("[dbo].[ProductType]", "ProductTypeID"), LeftJoin("jProductType"), TextualField("ProductTypeProductTypeName")]
        [LookupEditor(typeof(ProductTypeRow))]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Product Image"), Size(100)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Description"), Size(10)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Bin Location"), Size(100)]
        public String BinLocation
        {
            get { return Fields.BinLocation[this]; }
            set { Fields.BinLocation[this] = value; }
        }

        [DisplayName("Product Category Product Category Name"), Expression("jProductCategory.[ProductCategoryName]")]
        public String ProductCategoryProductCategoryName
        {
            get { return Fields.ProductCategoryProductCategoryName[this]; }
            set { Fields.ProductCategoryProductCategoryName[this] = value; }
        }

        [DisplayName("Product Type Product Type Name"), Expression("jProductType.[ProductTypeName]")]
        public String ProductTypeProductTypeName
        {
            get { return Fields.ProductTypeProductTypeName[this]; }
            set { Fields.ProductTypeProductTypeName[this] = value; }
        }

        [DisplayName("Merek"), Size(10)]
        public String Merek
        {
            get { return Fields.Merek[this]; }
            set { Fields.Merek[this] = value; }
        }
        [DisplayName("Police Number"), Size(10)]
        public String PoliceNumber
        {
            get { return Fields.PoliceNumber[this]; }
            set { Fields.PoliceNumber[this] = value; }
        }
        [DisplayName("Machine No"), Size(10), LookupInclude]
        public String MachineNo
        {
            get { return Fields.MachineNo[this]; }
            set { Fields.MachineNo[this] = value; }
        }
        [DisplayName("Serial Number"), Size(10), LookupInclude]
        public String SerialNumber
        {
            get { return Fields.SerialNumber[this]; }
            set { Fields.SerialNumber[this] = value; }
        }

        [DisplayName("Part Number"), Size(10), LookupInclude]
        public String PartNumber
        {
            get { return Fields.PartNumber[this]; }
            set { Fields.PartNumber[this] = value; }
        }

        [DisplayName("Color"), Size(10), LookupInclude]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("ManufactureYear"), Size(10), LookupInclude]
        public Int16? ManufactureYear
        {
            get { return Fields.ManufactureYear[this]; }
            set { Fields.ManufactureYear[this] = value; }
        }

        [DisplayName("Unit Stock"), Size(10)]
        public String UnitStock
        {
            get { return Fields.UnitStock[this]; }
            set { Fields.UnitStock[this] = value; }
        }

        [DisplayName("Product(s)"), MasterDetailRelation(foreignKey: "ProductIDMain"), ClientSide, MinSelectLevel(SelectLevel.List)]
        public List<ProductAlternativeRow> ProductAltList
        {
            get { return Fields.ProductAltList[this]; }
            set { Fields.ProductAltList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductID;
            public StringField ProductName;
            public StringField ProductNumber;
            public Int32Field ProductCategoryId;
            public Int32Field ProductTypeId;
            public BooleanField Discontinued;
            public StringField ProductImage;
            public StringField Description;
            public StringField BinLocation;

            public StringField ProductCategoryProductCategoryName;
            public StringField ProductTypeProductTypeName;

            public StringField Merek;
            public StringField PoliceNumber;
            public StringField MachineNo;
            public StringField SerialNumber;
            public StringField PartNumber;
            public StringField Color;
            public StringField UnitStock;
            public Int16Field ManufactureYear;

            public RowListField<ProductAlternativeRow> ProductAltList;

            public RowFields()
                : base("[dbo].[Products]")
            {
                LocalTextPrefix = "DIS.Products";
            }
        }
    }
}