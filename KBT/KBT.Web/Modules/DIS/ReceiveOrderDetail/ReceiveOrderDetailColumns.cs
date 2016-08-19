
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ReceiveOrderDetail")]
    [BasedOnRow(typeof(Entities.ReceiveOrderDetailRow))]
    public class ReceiveOrderDetailColumns
    {
        [Width(150)]
        public String ProductName { get; set; }
        [Width(100)]
        public Int16 POQty { get; set; }
        [Width(100)]
        public Int16 ReceiveQty { get; set; }
        [Width(100)]
        public Int16 BackOrderQty { get; set; }
        [EditLink, DisplayFormat("#,##0.00"), Width(100), AlignRight]
        public Decimal Price { get; set; }
        [Width(170)]
        public String BinLocation { get; set; }
        [Width(150), AlignCenter]
        public Boolean ReceiveComplete { get; set; }
    }
}