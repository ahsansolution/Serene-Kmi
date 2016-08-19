
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ProductAlternative")]
    [BasedOnRow(typeof(Entities.ProductAlternativeRow))]
    public class ProductAlternativeColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ProductAlternativeId { get; set; }
        //[Width(200)]
        //public String ProductIdMain { get; set; }
        [DisplayName("No"), EditLink]
        public Int16 SeqNo { get; set; }
        [Width(200), DisplayName("Product Number")]
        public String ProductIdAltProductNumber { get; set; }
        [Width(200), DisplayName("Product Name")]
        public String ProductIdAltProductName { get; set; }

    }
}