using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace KBT.DIS
{
    public partial class ProductAlternativeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "KBT.DIS.ProductAlternativeEditor";

        public ProductAlternativeEditorAttribute()
            : base(Key)
        {
        }
    }
}

