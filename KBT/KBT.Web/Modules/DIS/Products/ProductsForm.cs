
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow))]
    public class ProductsForm
    {
        [Category("Product Type Information")]
        public Int32 ProductTypeId { get; set; }
        [DefaultValue(true)]
        public Boolean Discontinued { get; set; }
        [UnitStockEditor]
        public String UnitStock { get; set; }

        [Category("Spare Part Information")]
        public String PartNumber { get; set; }
        public String ProductName { get; set; }
      
        [Category("Unit Information")]
        public String SerialNumber { get; set; }
        public String Color { get; set; }
        public Int16 ManufactureYear { get; set; }

        [Category("Product Alternative")]
        [ProductAlternativeEditor]
        public List<Entities.ProductAlternativeRow> ProductAltList { get; set; }

        //public String BinLocation { get; set; }
        //public Int32 ProductCategoryId { get; set; }
        //public String ProductImage { get; set; }
        //public String PoliceNumber { get; set; }
        //public String MachineNo { get; set; }
        //public String Description { get; set; }  
        //public String ProductNumber { get; set; }
        //public String Merek { get; set; }
    }
}