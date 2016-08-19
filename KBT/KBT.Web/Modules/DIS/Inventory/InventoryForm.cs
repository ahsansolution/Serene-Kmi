
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.Inventory")]
    [BasedOnRow(typeof(Entities.InventoryRow))]
    public class InventoryForm
    {
        [ProductLookupEditor]
        public Int32 ProductId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Int32 Qty { get; set; }
    }
}