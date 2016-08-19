
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ProductPrice")]
    [BasedOnRow(typeof(Entities.ProductPriceRow))]
    public class ProductPriceForm
    {
        [ProductLookupEditor]
        public Int32 ProductId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Decimal Price { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime EntryDate { get; set; }
    }
}