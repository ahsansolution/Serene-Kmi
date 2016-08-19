
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.PurchaseOrderDetail")]
    [BasedOnRow(typeof(Entities.PurchaseOrderDetailRow))]
    public class PurchaseOrderDetailColumns
    {
        [EditLink, Width(200)]
        public String ProductProductName { get; set; }
        [Width(100)]
        public Int16 Quantity { get; set; }
        [Width(100), DisplayFormat("#,##0.00"), AlignRight]
        public Int32 Price { get; set; }
        [Width(100)]
        public Int32 LineTotal { get; set; }
        [Width(148), DisplayFormat("#,##0.00"), AlignRight]
        public Int32 CostTotal { get; set; }
    }
}