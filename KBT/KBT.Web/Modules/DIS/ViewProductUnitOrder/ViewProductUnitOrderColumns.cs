
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ViewProductUnitOrder")]
    [BasedOnRow(typeof(Entities.ViewProductUnitOrderRow))]
    public class ViewProductUnitOrderColumns
    {
        public Int32 OrderDetailId { get; set; }
        public Int32 OrderId { get; set; }
        public Int32 ProductId { get; set; }
        public Int16 OrderQty { get; set; }
        public Int32 ProductPriceId { get; set; }
        public Int32 CostId { get; set; }
        public Int32 OrderCategoryId { get; set; }
        public Decimal BasePrice { get; set; }
        public Decimal Total { get; set; }
        public Decimal Ppn { get; set; }
        public Int32 KmInUse { get; set; }
        public Int16 ServiceQuantity { get; set; }
        [EditLink]
        public String OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public Int32 CustomerDealerId { get; set; }
        public Int32 UserId { get; set; }
        public Int32 ProductTypeId { get; set; }
        public Int32 ProductUnitId { get; set; }
        public String OrderProductSerialNumber { get; set; }
        public String OrderProductColor { get; set; }
        public Int32 OrderProductManufactureYear { get; set; }
        public Decimal PaymentService { get; set; }
        public String OrderStatus { get; set; }
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
        public String ProductTypeName { get; set; }
    }
}