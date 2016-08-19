
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.OrderCategory")]
    [BasedOnRow(typeof(Entities.OrderCategoryRow))]
    public class OrderCategoryForm
    {
        public String OrderCategoryName { get; set; }
        public String Description { get; set; }
    }
}