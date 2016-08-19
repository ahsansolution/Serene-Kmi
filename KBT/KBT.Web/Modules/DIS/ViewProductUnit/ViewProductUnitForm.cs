
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ViewProductUnit")]
    [BasedOnRow(typeof(Entities.ViewProductUnitRow))]
    public class ViewProductUnitForm
    {
        public String OrderNumber { get; set; }
        public String CustomerDealerName { get; set; }
        public String Address { get; set; }
        public String ProductName { get; set; }
        public String SerialNumber { get; set; }
        public Int16 ManufactureYear { get; set; }
        public String Color { get; set; }
        public Int32 OrderId { get; set; }
        public DateTime OrderDate { get; set; }
    }
}