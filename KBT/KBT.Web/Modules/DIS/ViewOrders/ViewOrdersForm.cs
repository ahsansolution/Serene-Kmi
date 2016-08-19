
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ViewOrders")]
    [BasedOnRow(typeof(Entities.ViewOrdersRow))]
    public class ViewOrdersForm
    {
        public Int32 OrderId { get; set; }
        public String OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public Int32 CustomerDealerId { get; set; }
        public Int32 UserId { get; set; }
        public Int32 ProductTypeId { get; set; }
        public Int16 KmInUse { get; set; }
        public Decimal PaymentService { get; set; }
        public String OrderStatus { get; set; }
        public Int32 OrderDetailId { get; set; }
        public Int32 ProductId { get; set; }
        public Int16 OrderQty { get; set; }
        public Int32 ProductPriceId { get; set; }
        public Int32 CostId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Decimal BasePrice { get; set; }
        public Decimal Total { get; set; }
        public Decimal Ppn { get; set; }
        public Int16 ServiceQuantity { get; set; }
        public Int32 ServiceUnitDetailId { get; set; }
        public String CustomerDealerName { get; set; }
        public String Address { get; set; }
        public String ProductTypeName { get; set; }
        public String ProductName { get; set; }
        public String ProductNumber { get; set; }
        public String PartNumber { get; set; }
        public Int32 ProductCategoryId { get; set; }
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
        public Int32 ServiceUnitId { get; set; }
        public Decimal ServiceCharge { get; set; }
        public DateTime ServiceDate { get; set; }
        public Int32 OrderIdService { get; set; }
    }
}