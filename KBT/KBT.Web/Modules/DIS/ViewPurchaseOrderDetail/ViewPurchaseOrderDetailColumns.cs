
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ViewPurchaseOrderDetail")]
    [BasedOnRow(typeof(Entities.ViewPurchaseOrderDetailRow))]
    public class ViewPurchaseOrderDetailColumns
    {
        public Int32 PurchaseOrderDetailId { get; set; }
        public Int32 PurchaseOrderId { get; set; }
        public Int32 ProductId { get; set; }
        public Int16 Quantity { get; set; }
        public Decimal Price { get; set; }
        public Decimal Ppn { get; set; }
        public Decimal Total { get; set; }
        public Int32 ProductPriceId { get; set; }
        [EditLink]
        public String ProductName { get; set; }
        public String ProductNumber { get; set; }
        public String PartNumber { get; set; }
        public Int32 ProductCategoryId { get; set; }
        public Int32 ProductTypeId { get; set; }
        public Boolean Discontinued { get; set; }
        public String ProductImage { get; set; }
        public String Description { get; set; }
        public String BinLocation { get; set; }
        public String Merek { get; set; }
        public String PoliceNumber { get; set; }
        public String MachineNo { get; set; }
        public String SerialNumber { get; set; }
        public String Color { get; set; }
        public Int16 ManufactureYear { get; set; }
    }
}