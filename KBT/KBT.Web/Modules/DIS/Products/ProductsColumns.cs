
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow))]
    public class ProductsColumns
    {
        [EditLink, Width(150)]
        public String PartNumber { get; set; }
        [Width(250)]
        public String Description { get; set; }
        [Width(150), QuickFilter, UnitStockEditor]
        public String UnitStock { get; set; }
        [Width(120)]
        public String ProductTypeProductTypeName { get; set; }
        [Width(100)]
        public Boolean Discontinued { get; set; }
        [Width(250)]
        public String BinLocation { get; set; }
    }
}