
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ViewProductUnit")]
    [BasedOnRow(typeof(Entities.ViewProductUnitRow))]
    public class ViewProductUnitColumns
    {
      
        [Width(200), EditLink(IdField = "OrderDetailId", ItemType = "DIS.OrderDetail")]
        public String SerialNumber { get; set; }
        [Width(200)]
        public String ProductName { get; set; }
        [Width(70)]
        public Int16 ManufactureYear { get; set; }
        [Width(100)]
        public String Color { get; set; }
        [Width(200)]
        public String CustomerDealerName { get; set; }
        [Width(200)]
        public String Address { get; set; }
        [Width(150)]
        public DateTime OrderDate { get; set; }
    }
}