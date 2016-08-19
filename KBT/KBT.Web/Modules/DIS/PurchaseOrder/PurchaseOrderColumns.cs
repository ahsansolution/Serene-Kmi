
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow))]
    public class PurchaseOrderColumns
    {
        
        [EditLink, Width(200), SortOrder(1, true), QuickFilter, LookupEditor("DIS.PurchaseOrderNumberLookup")]
        public String PurchaseOrderNumber { get; set; }
        [Width(200)]
        public DateTime PurchaseOrderDate { get; set; }
        [Width(200)]
        public String PurchaseOrderOrderCategoryName { get; set; }
        [StatusFormatter, QuickFilter, OrderStatusEditor]
        public String PurchaseOrderStatus { get; set; }
    }
}