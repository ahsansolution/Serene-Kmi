
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ProductPrice")]
    [BasedOnRow(typeof(Entities.ProductPriceRow))]
    public class ProductPriceColumns
    {
        [EditLink, Width(250)]
        public String ProductProductName { get; set; }
        [Width(200)]
        public String OrderCategoryOrderCategoryName { get; set; }
        [Width(150), DisplayFormat("#,##0.00"), AlignRight]
        public Decimal Price { get; set; }
        [Width(200), AlignCenter]
        public Boolean IsActive { get; set; }
        [Width(200)]
        public DateTime EntryDate { get; set; }
    }
}