
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.CustomerDealer")]
    [BasedOnRow(typeof(Entities.CustomerDealerRow))]
    public class CustomerDealerForm
    {
        public String CustomerDealerName { get; set; }
        public String Address { get; set; }
    }
}