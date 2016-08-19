
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;
    [FormScript("DIS.ReceiveOrder")]
    [BasedOnRow(typeof(Entities.ReceiveOrderRow))]
    public class ReceiveOrderForm
    {
        //[LookupEditor(typeof(PurchaseOrderRow))]
        //public Int32 PurchaseOrderId { get; set; }
        [Insertable(false), Updatable(false)]
        public String ReceiveOrderNumber { get; set; }
        public DateTime ReceiveDate { get; set; }
        public String ReceiveBy { get; set; }
        public String AcknowledgeBy { get; set; }
        [Category("Receive Order Details")]
        [KBT.DIS.ReceiveOrderDetailEditor]
        public List<Entities.ReceiveOrderDetailRow> DetailList { get; set; }
    }
}