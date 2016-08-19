
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Inventory")]
    [BasedOnRow(typeof(Entities.InventoryRow))]
    public class InventoryColumns
    {
        [Width(250), SortOrder(1)]
        public String ProductProductName { get; set; }
        [Width(250)]
        public String OrderCategoryOrderCategoryName { get; set; }
        public Int32 Qty { get; set; }
        [Width(100)]
        public String InventoryStatus { get; set; }
        [Width(200)]
        public String DocumentNo { get; set; }
        [Width(200), QuickFilter]
        public DateTime EntryDate { get; set; }
    }
}