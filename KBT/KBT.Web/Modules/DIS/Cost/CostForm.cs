
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.Cost")]
    [BasedOnRow(typeof(Entities.CostRow))]
    public class CostForm
    {
        public String CostName { get; set; }
        public Decimal Amount { get; set; }
        public Int16 Percentage { get; set; }
    }
}