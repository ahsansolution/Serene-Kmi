
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Cost")]
    [BasedOnRow(typeof(Entities.CostRow))]
    public class CostColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CostId { get; set; }
        [EditLink]
        public String CostName { get; set; }
        public Decimal Amount { get; set; }
        public Int16 Percentage { get; set; }
    }
}