
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow))]
    public class PurchaseOrderForm
    {
        public String PurchaseOrderNumber { get; set; }
        public DateTime PurchaseOrderDate { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Int32 ProductTypeId { get; set; }

        [Category("Purchase Order Details")]
        [PurchaseOrderDetailEditor]
        public List<Entities.PurchaseOrderDetailRow> DetailList { get; set; }

    }
}