
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.PurchaseOrderDetail")]
    [BasedOnRow(typeof(Entities.PurchaseOrderDetailRow))]
    public class PurchaseOrderDetailForm
    {
        [ProductLookupEditor]
        public Int32 ProductId { get; set; }
        public Int16 Quantity { get; set; }
        public Decimal Price { get; set; }
        [HideOnInsert(true), HideOnUpdate(true)]
        public Int32 ProductPriceId { get; set; }
        public String ProductSerialNumber { get; set; }
        public String ProductColor { get; set; }
        public String ProductManufactureYear { get; set; }
    }
}