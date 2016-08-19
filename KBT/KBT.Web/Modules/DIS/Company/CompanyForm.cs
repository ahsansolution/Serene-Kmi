
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow))]
    public class CompanyForm
    {
        public String CompanyName { get; set; }
        public String Address { get; set; }
        public String Fax { get; set; }
        public String Logo { get; set; }
        public Decimal Phone { get; set; }
    }
}