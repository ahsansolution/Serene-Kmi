
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ProductType")]
    [BasedOnRow(typeof(Entities.ProductTypeRow))]
    public class ProductTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductTypeId { get; set; }
        [Width(200)]
        public String ProductTypeName { get; set; }
    }
}