
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ViewProductStock")]
    [BasedOnRow(typeof(Entities.ViewProductStockRow))]
    public class ViewProductStockForm
    {
        public Int32 ProductId { get; set; }
        public String ProductName { get; set; }
        public String ProductNumber { get; set; }
        public String ProductTypeName { get; set; }
        public Int32 TotalIn { get; set; }
        public Int32 TotalOut { get; set; }
        public Int32 Stock { get; set; }
    }
}