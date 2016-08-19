
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow))]
    public class OrdersColumns
    {
        [EditLink, Width(200), DisplayName("Order Number"), 
            QuickFilter, LookupEditor("DIS.OrderNumberLookup"), SortOrder(1, true)]
        public String OrderNumber { get; set; }
        [Width(200)]
        public DateTime OrderDate { get; set; }
        [Width(175)]
        public String CustomerDealerCustomerDealerName { get; set; }
        [Width(100), QuickFilter, StatusFormatter, OrderStatusEditor]
        public String OrderStatus { get; set; }
        //public Int32 UserId { get; set; }
    }
}