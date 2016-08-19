using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace KBT.DIS
{
    public partial class OrderCategoryEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "KBT.DIS.OrderCategoryEditor";

        public OrderCategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}

