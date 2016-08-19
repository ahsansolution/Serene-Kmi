
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow))]
    public class SupplierForm
    {
        public String SupplierName { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String ContactName { get; set; }
    }
}