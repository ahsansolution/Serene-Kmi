
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow))]
    public class CompanyColumns
    {
     
        [EditLink, Width(150)]
        public String CompanyName { get; set; }
        [Width(300)]
        public String Address { get; set; }
        [Width(100)]
        public String Fax { get; set; }
        [Width(100)]
        public Decimal Phone { get; set; }
    }
}