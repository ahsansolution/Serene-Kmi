
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
    [FormScript("DIS.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow))]
    public class OrdersForm
    {
        [LookupEditor(typeof(CustomerDealerRow), InplaceAdd = true)]
        public Int32 CustomerDealerId { get; set; }
        [LookupEditor(typeof(ProductTypeRow))]
        public Int32 ProductTypeID { get; set; }
        //[LookupEditor("DIS.ProductUnitLookup1")]//typeof(ProductsRow)
        //public Int32 ProductUnitId { get; set; }

        //[Category("Unit Information")]
        //public String OrderProductSerialNumber { get; set; }
        //public String OrderProductColor { get; set; }
        //public Int16 OrderProductManufactureYear { get; set; }

        //[DefaultValue(0)]
        //public Decimal PaymentService { get; set; }
        //public Int16 KmInUse { get; set; }

        [Category("Order Details")]
        [OrderDetailEditor]
        public List<Entities.OrderDetailRow> DetailList { get; set; }
    }
}