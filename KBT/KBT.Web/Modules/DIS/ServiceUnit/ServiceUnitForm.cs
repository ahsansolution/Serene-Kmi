
namespace KBT.DIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DIS.ServiceUnit")]
    [BasedOnRow(typeof(Entities.ServiceUnitRow))]
    public class ServiceUnitForm
    {
        [Category("Service Unit Details")]
        [ServiceUnitDetailEditor]
        public List<Entities.ServiceUnitDetailRow> DetailList { get; set; }
    }
}