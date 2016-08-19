
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.OrderDetail")]
    [BasedOnRow(typeof(Entities.OrderDetailRow))]
    public class OrderDetailColumns
    {
        [EditLink, Width(200)]
        public String ProductProductName { get; set; }
        [Width(100)]
        public Int16 OrderQty { get; set; }
        [Width(100), DisplayFormat("#,##0.00"), Insertable(false), Updatable(false)]
        public Decimal BasePrice { get; set; }
        [Width(100)]
        public Decimal LineTotal { get; set; }
        [Width(100), Insertable(false), Updatable(false)]
        public Decimal CostTotal { get; set; }
    }
}