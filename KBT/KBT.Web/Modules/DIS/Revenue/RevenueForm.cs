
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.Revenue")]
    [BasedOnRow(typeof(Entities.RevenueRow))]
    public class RevenueForm
    {
        public Int32 PurchaseOrderId { get; set; }
        public Int32 OrderId { get; set; }
        public Decimal Credit { get; set; }
        public Decimal Debit { get; set; }
        public DateTime EntryDate { get; set; }
        public String DocumentNo { get; set; }
        public Boolean CancelationStatus { get; set; }
    }
}