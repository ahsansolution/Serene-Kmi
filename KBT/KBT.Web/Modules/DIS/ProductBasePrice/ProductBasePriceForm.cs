
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ProductBasePrice")]
    [BasedOnRow(typeof(Entities.ProductBasePriceRow))]
    public class ProductBasePriceForm
    {
        [ProductLookupEditor]
        public Int32 ProductID { get; set; }
        public Decimal Price { get; set; }
        public DateTime EntryDate { get; set; }
        public Boolean IsActive { get; set; }
    }
}