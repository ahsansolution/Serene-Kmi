
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Revenue")]
    [BasedOnRow(typeof(Entities.RevenueRow))]
    public class RevenueColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RevenueId { get; set; }
        public Int32 PurchaseOrderId { get; set; }
        public Int32 OrderId { get; set; }
        public Decimal Credit { get; set; }
        public Decimal Debit { get; set; }
        public DateTime EntryDate { get; set; }
        [EditLink]
        public String DocumentNo { get; set; }
        public Boolean CancelationStatus { get; set; }
    }
}