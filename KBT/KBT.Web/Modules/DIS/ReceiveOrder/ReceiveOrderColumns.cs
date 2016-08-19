
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ReceiveOrder")]
    [BasedOnRow(typeof(Entities.ReceiveOrderRow))]
    public class ReceiveOrderColumns
    {
        [EditLink,  Width(200), SortOrder(1, true), QuickFilter, LookupEditor("DIS.ReceiveOrderNumberLookup")] //EditorType("DIS.ReceiveOrderDetail"),
        public String ReceiveOrderNumber { get; set; }
        [Width(200)]
        public DateTime ReceiveDate { get; set; }
        [Width(200)]
        public String ReceiveBy { get; set; }
        [Width(200)]
        public String AcknowledgeBy { get; set; }
        [QuickFilter, StatusFormatter, ReceiveOrderStatusEditor]
        public String ReceiveOrderStatus { get; set; }
    }
}