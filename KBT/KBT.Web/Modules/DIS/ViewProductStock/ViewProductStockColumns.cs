
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;
    [ColumnsScript("DIS.ViewProductStock")]
    [BasedOnRow(typeof(Entities.ViewProductStockRow))]
    public class ViewProductStockColumns
    {
        [Width(200)]
        public String ProductName { get; set; }
        [Width(300)]
        public String ProductNumber { get; set; }
        [Width(200), QuickFilter,  LookupFiltering(typeof(ProductTypeRow), IdField = "ProductTypeId")]
        public String ProductTypeNameDesc { get; set; }
        //[Width(70)]
        //public Int32 TotalIn { get; set; }
        //[Width(70)]
        //public Int32 TotalOut { get; set; }
        [Width(70)]
        public Int32 Stock { get; set; }
    }
}