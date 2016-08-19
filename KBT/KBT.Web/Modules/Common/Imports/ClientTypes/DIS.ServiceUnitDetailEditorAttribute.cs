using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace KBT.DIS
{
    public partial class ServiceUnitDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "KBT.DIS.ServiceUnitDetailEditor";

        public ServiceUnitDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}

