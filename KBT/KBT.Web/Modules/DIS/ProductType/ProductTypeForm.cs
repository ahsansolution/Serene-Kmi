
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ProductType")]
    [BasedOnRow(typeof(Entities.ProductTypeRow))]
    public class ProductTypeForm
    {
        public String ProductTypeName { get; set; }
    }
}