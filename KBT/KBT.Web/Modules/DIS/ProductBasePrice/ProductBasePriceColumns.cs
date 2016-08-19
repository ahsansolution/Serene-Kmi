
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
    [ColumnsScript("DIS.ProductBasePrice")]
    [BasedOnRow(typeof(Entities.ProductBasePriceRow))]
    public class ProductBasePriceColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ProductBasePriceId { get; set; }
        //[LookupEditor(typeof(ProductsRow)), Width(300)]
        [EditLink, Width(250)]
        public String ProductProductName { get; set; }
        [Width(250)]
        public String ProductProductNumber { get; set; }
        [Width(250), AlignCenter]
        public Decimal Price { get; set; }
        [Width(200), AlignCenter]
        public DateTime EntryDate { get; set; }
        [Width(100), AlignCenter]
        public Boolean IsActive { get; set; }
    }
}