
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ServiceUnitDetail")]
    [BasedOnRow(typeof(Entities.ServiceUnitDetailRow))]
    public class ServiceUnitDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ServiceUnitDetailId { get; set; }
        [Width(150)]
        public Decimal ServiceCharge { get; set; }
        [Width(150)]
        public Int32 KmInUse { get; set; }
        [Width(150)]
        public DateTime ServiceDate { get; set; }
    }
}