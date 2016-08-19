using Serenity.Services;
using System.Collections.Generic;

namespace KBT.DIS
{
    public class ProductBulkActionRequest : ServiceRequest
    {
        public List<int> ProductIDs { get; set; }
    }
}