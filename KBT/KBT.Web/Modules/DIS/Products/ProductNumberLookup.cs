
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("DIS.ProductNumberLookup")]
    public class ProductNumberLookup : RowLookupScript<ProductsRow>
    {
        public ProductNumberLookup()
        {
            IdField = ProductsRow.Fields.ProductNumber.PropertyName;
            TextField = ProductsRow.Fields.ProductNumber.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ProductsRow.Fields;
            query.Distinct(true)
            .Select(fld.ProductNumber)
            .Select(fld.ProductName)
            .Where(
                new Criteria(fld.ProductName) != "" &
                new Criteria(fld.ProductNumber).IsNotNull());
        }
    }
}