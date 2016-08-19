using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace KBT.DIS
{
    public partial class ProductLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "KBT.DIS.ProductLookupEditor";

        public ProductLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}

