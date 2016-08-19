using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace KBT.DIS
{
    public partial class OrderStatusEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "KBT.DIS.OrderStatusEditor";

        public OrderStatusEditorAttribute()
            : base(Key)
        {
        }
    }
}

