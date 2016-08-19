
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.OrderCategory")]
    [BasedOnRow(typeof(Entities.OrderCategoryRow))]
    public class OrderCategoryColumns
    {
        [EditLink]
        public String OrderCategoryName { get; set; }
        public String Description { get; set; }
    }
}