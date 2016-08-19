
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ReceiveOrderDetail")]
    [BasedOnRow(typeof(Entities.ReceiveOrderDetailRow))]
    public class ReceiveOrderDetailForm
    {
        public Int32 ReceiveOrderId { get; set; }
        [ProductLookupEditor]
        public Int32 ProductId { get; set; }
        public Int16 POQty { get; set; }
        public Int16 BackOrderQty { get; set; }
        public String Price { get; set; }
        public String BinLocation { get; set; }
        public Boolean ReceiveComplete { get; set; }
    }
}