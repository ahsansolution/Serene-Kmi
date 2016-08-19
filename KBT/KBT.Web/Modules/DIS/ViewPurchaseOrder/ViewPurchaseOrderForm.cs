
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ViewPurchaseOrder")]
    [BasedOnRow(typeof(Entities.ViewPurchaseOrderRow))]
    public class ViewPurchaseOrderForm
    {
        public Int32 PurchaseOrderId { get; set; }
        public String PurchaseOrderNumber { get; set; }
        public Int32 CompanyId { get; set; }
        public DateTime PurchaseOrderDate { get; set; }
        public Int32 CostId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public String PurchaseOrderStatus { get; set; }
        public String OrderCategoryName { get; set; }
        public String Description { get; set; }
        public String CompanyName { get; set; }
        public String Address { get; set; }
        public String Fax { get; set; }
        public String Logo { get; set; }
        public Decimal Phone { get; set; }
    }
}