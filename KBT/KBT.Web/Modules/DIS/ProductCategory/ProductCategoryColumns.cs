
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ProductCategory")]
    [BasedOnRow(typeof(Entities.ProductCategoryRow))]
    public class ProductCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductCategoryId { get; set; }
        [Width(200)]
        public String ProductCategoryName { get; set; }
    }
}