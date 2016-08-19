using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace KBT.DIS
{
    public partial class StatusFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "KBT.DIS.StatusFormatter";

        public StatusFormatterAttribute()
            : base(Key)
        {
        }
    }
}

