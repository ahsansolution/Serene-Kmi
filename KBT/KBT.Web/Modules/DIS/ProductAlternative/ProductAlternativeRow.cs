

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

    [ConnectionKey("Default"), DisplayName("ProductAlternative"), InstanceName("ProductAlternative"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ProductAlternativeRow : Row, IIdRow
    {
        [DisplayName("Product Alternative Id"), Column("ProductAlternativeID"), Identity]
        public Int32? ProductAlternativeId
        {
            get { return Fields.ProductAlternativeId[this]; }
            set { Fields.ProductAlternativeId[this] = value; }
        }

        [DisplayName("Product Id Alt"), Column("ProductIDAlt"), ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProductIdAlt"), TextualField("ProductIdAltProductName")]
        public Int32? ProductIdAlt
        {
            get { return Fields.ProductIdAlt[this]; }
            set { Fields.ProductIdAlt[this] = value; }
        }

        [DisplayName("Product Id Main"), Column("ProductIDMain")]
        public Int32? ProductIdMain
        {
            get { return Fields.ProductIdMain[this]; }
            set { Fields.ProductIdMain[this] = value; }
        }

        [DisplayName("Seq No")]
        public Int16? SeqNo
        {
            get { return Fields.SeqNo[this]; }
            set { Fields.SeqNo[this] = value; }
        }

        [DisplayName("Product Id Alt Product Name"), Expression("jProductIdAlt.[ProductName]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String ProductIdAltProductName
        {
            get { return Fields.ProductIdAltProductName[this]; }
            set { Fields.ProductIdAltProductName[this] = value; }
        }

        [DisplayName("Product Id Alt Product Number"), Expression("jProductIdAlt.[ProductNumber]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String ProductIdAltProductNumber
        {
            get { return Fields.ProductIdAltProductNumber[this]; }
            set { Fields.ProductIdAltProductNumber[this] = value; }
        }

        [DisplayName("Product Id Alt Part Number"), Expression("jProductIdAlt.[PartNumber]")]
        public String ProductIdAltPartNumber
        {
            get { return Fields.ProductIdAltPartNumber[this]; }
            set { Fields.ProductIdAltPartNumber[this] = value; }
        }

        [DisplayName("Product Id Alt Product Category Id"), Expression("jProductIdAlt.[ProductCategoryID]")]
        public Int32? ProductIdAltProductCategoryId
        {
            get { return Fields.ProductIdAltProductCategoryId[this]; }
            set { Fields.ProductIdAltProductCategoryId[this] = value; }
        }

        [DisplayName("Product Id Alt Product Type Id"), Expression("jProductIdAlt.[ProductTypeID]")]
        public Int32? ProductIdAltProductTypeId
        {
            get { return Fields.ProductIdAltProductTypeId[this]; }
            set { Fields.ProductIdAltProductTypeId[this] = value; }
        }

        [DisplayName("Product Id Alt Discontinued"), Expression("jProductIdAlt.[Discontinued]")]
        public Boolean? ProductIdAltDiscontinued
        {
            get { return Fields.ProductIdAltDiscontinued[this]; }
            set { Fields.ProductIdAltDiscontinued[this] = value; }
        }

        [DisplayName("Product Id Alt Product Image"), Expression("jProductIdAlt.[ProductImage]")]
        public String ProductIdAltProductImage
        {
            get { return Fields.ProductIdAltProductImage[this]; }
            set { Fields.ProductIdAltProductImage[this] = value; }
        }

        [DisplayName("Product Id Alt Description"), Expression("jProductIdAlt.[Description]")]
        public String ProductIdAltDescription
        {
            get { return Fields.ProductIdAltDescription[this]; }
            set { Fields.ProductIdAltDescription[this] = value; }
        }

        [DisplayName("Product Id Alt Bin Location"), Expression("jProductIdAlt.[BinLocation]")]
        public String ProductIdAltBinLocation
        {
            get { return Fields.ProductIdAltBinLocation[this]; }
            set { Fields.ProductIdAltBinLocation[this] = value; }
        }

        [DisplayName("Product Id Alt Merek"), Expression("jProductIdAlt.[Merek]")]
        public String ProductIdAltMerek
        {
            get { return Fields.ProductIdAltMerek[this]; }
            set { Fields.ProductIdAltMerek[this] = value; }
        }

        [DisplayName("Product Id Alt Police Number"), Expression("jProductIdAlt.[PoliceNumber]")]
        public String ProductIdAltPoliceNumber
        {
            get { return Fields.ProductIdAltPoliceNumber[this]; }
            set { Fields.ProductIdAltPoliceNumber[this] = value; }
        }

        [DisplayName("Product Id Alt Machine No"), Expression("jProductIdAlt.[MachineNo]")]
        public String ProductIdAltMachineNo
        {
            get { return Fields.ProductIdAltMachineNo[this]; }
            set { Fields.ProductIdAltMachineNo[this] = value; }
        }

        [DisplayName("Product Id Alt Serial Number"), Expression("jProductIdAlt.[SerialNumber]")]
        public String ProductIdAltSerialNumber
        {
            get { return Fields.ProductIdAltSerialNumber[this]; }
            set { Fields.ProductIdAltSerialNumber[this] = value; }
        }

        [DisplayName("Product Id Alt Color"), Expression("jProductIdAlt.[Color]")]
        public String ProductIdAltColor
        {
            get { return Fields.ProductIdAltColor[this]; }
            set { Fields.ProductIdAltColor[this] = value; }
        }

        [DisplayName("Product Id Alt Manufacture Year"), Expression("jProductIdAlt.[ManufactureYear]")]
        public Int16? ProductIdAltManufactureYear
        {
            get { return Fields.ProductIdAltManufactureYear[this]; }
            set { Fields.ProductIdAltManufactureYear[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductAlternativeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductAlternativeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductAlternativeId;
            public Int32Field ProductIdMain;
            public Int32Field ProductIdAlt;
            public Int16Field SeqNo;

            public StringField ProductIdAltProductName;
            public StringField ProductIdAltProductNumber;
            public StringField ProductIdAltPartNumber;
            public Int32Field ProductIdAltProductCategoryId;
            public Int32Field ProductIdAltProductTypeId;
            public BooleanField ProductIdAltDiscontinued;
            public StringField ProductIdAltProductImage;
            public StringField ProductIdAltDescription;
            public StringField ProductIdAltBinLocation;
            public StringField ProductIdAltMerek;
            public StringField ProductIdAltPoliceNumber;
            public StringField ProductIdAltMachineNo;
            public StringField ProductIdAltSerialNumber;
            public StringField ProductIdAltColor;
            public Int16Field ProductIdAltManufactureYear;

            public RowFields()
                : base("[dbo].[ProductAlternative]")
            {
                LocalTextPrefix = "DIS.ProductAlternative";
            }
        }
    }
}