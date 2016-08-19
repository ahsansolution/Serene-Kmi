
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    [LookupScript("DIS.ProductLookup")]
    public class ProductLookup : RowLookupScript<ProductsRow>
    {
        public ProductLookup()
        {
            IdField = ProductsRow.Fields.ProductID.PropertyName;
            TextField = ProductsRow.Fields.ProductName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ProductsRow.Fields;
            query.Distinct(true)
            .Select(fld.ProductTypeId)
            .Select(fld.ProductID)
            .Select(fld.ProductName)
            .Select(fld.ProductNumber)
            .Where(
                new Criteria(fld.ProductName) != "" &
                new Criteria(fld.ProductID).IsNotNull());
        }
    }
}