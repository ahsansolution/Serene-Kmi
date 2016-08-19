
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ProductCategory")]
    [BasedOnRow(typeof(Entities.ProductCategoryRow))]
    public class ProductCategoryForm
    {
        public String ProductCategoryName { get; set; }
    }
}