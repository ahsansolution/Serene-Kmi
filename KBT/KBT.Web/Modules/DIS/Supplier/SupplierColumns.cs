
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.Supplier")]
    [BasedOnRow(typeof(Entities.SupplierRow))]
    public class SupplierColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupplierId { get; set; }
        [EditLink]
        public String SupplierName { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String ContactName { get; set; }
    }
}