
namespace KBT.DIS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DIS.CustomerDealer")]
    [BasedOnRow(typeof(Entities.CustomerDealerRow))]
    public class CustomerDealerColumns
    {
        [EditLink, Width(200)]
        public String CustomerDealerName { get; set; }
        [Width(400)]
        public String Address { get; set; }
    }
}