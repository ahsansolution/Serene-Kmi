
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
    [FormScript("DIS.OrderDetail")]
    [BasedOnRow(typeof(Entities.OrderDetailRow))]
    public class OrderDetailForm
    {
        //[LookupEditor("DIS.ProductLookup")]
        [ProductLookupEditor]
        public Int32 ProductID { get; set; }
        //[LookupEditor(typeof(OrderCategoryRow))]
        //[DefaultValue(2)]
        //public Int16 OrderCategoryId { get; set; }
        public Int16 OrderQty { get; set; }
        public Decimal BasePrice { get; set; }
        //[LookupEditor(typeof(CostRow)), Insertable(false), Updatable(false)]
        //[DefaultValue(1)]
        //public Int32 CostId { get; set; }
        //[Insertable(false), Updatable(false)]
        public Int16 Stock { get; set; }
        public String OrderDetailProductSerialNumber { get; set; }
        public String OrderDetailProductColor { get; set; }
        public Int16 OrderDetailProductManufactureYear { get; set; }
    }
}