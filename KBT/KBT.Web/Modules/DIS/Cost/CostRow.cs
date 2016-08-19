

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

    [ConnectionKey("Default"), DisplayName("Cost"), InstanceName("Cost"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.Cost")]
    public sealed class CostRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cost Id"), Column("CostID"), Identity]
        public Int32? CostId
        {
            get { return Fields.CostId[this]; }
            set { Fields.CostId[this] = value; }
        }

        [DisplayName("Cost Name"), Size(50), QuickSearch, LookupInclude]
        public String CostName
        {
            get { return Fields.CostName[this]; }
            set { Fields.CostName[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4), LookupInclude]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Percentage"), LookupInclude]
        public Int16? Percentage
        {
            get { return Fields.Percentage[this]; }
            set { Fields.Percentage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CostId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CostName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CostRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CostId;
            public StringField CostName;
            public DecimalField Amount;
            public Int16Field Percentage;

            public RowFields()
                : base("[dbo].[Cost]")
            {
                LocalTextPrefix = "DIS.Cost";
            }
        }
    }
}