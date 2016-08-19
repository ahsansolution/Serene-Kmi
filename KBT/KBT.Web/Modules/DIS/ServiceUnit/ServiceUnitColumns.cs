
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.ServiceUnit")]
    [BasedOnRow(typeof(Entities.ServiceUnitRow))]
    public class ServiceUnitColumns
    {
        [Width(200), EditLink]
        public String ProductProductNumber { get; set; }
        [Width(200)]
        public String ProductProductName { get; set; }
        [Width(200)]
        public String CustomerDealerCustomerDealerName { get; set; }
        [Width(200)]
        public String CustomerDealerAddress { get; set; }
        //[Width(200)]
        //public String OrderUnitOrderNumber { get; set; }
    }
}