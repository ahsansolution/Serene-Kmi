
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ServiceUnitDetail")]
    [BasedOnRow(typeof(Entities.ServiceUnitDetailRow))]
    public class ServiceUnitDetailForm
    {
        public Decimal ServiceCharge { get; set; }
        public Int32 KmInUse { get; set; }
        public DateTime ServiceDate { get; set; }

        [Category("Order Spare Part Details")]
        [OrderDetailEditor]
        public List<Entities.OrderDetailRow> DetailList { get; set; }
    }
}