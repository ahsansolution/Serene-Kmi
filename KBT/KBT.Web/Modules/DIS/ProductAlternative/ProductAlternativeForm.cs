
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;
    [FormScript("DIS.ProductAlternative")]
    [BasedOnRow(typeof(Entities.ProductAlternativeRow))]
    public class ProductAlternativeForm
    {
        [ProductLookupEditor]
        public Int32 ProductIdAlt { get; set; }
        public Int16 SeqNo { get; set; }
    }
}