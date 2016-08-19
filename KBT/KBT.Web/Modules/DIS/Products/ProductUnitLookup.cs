
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("DIS.ProductUnitLookup")]
    public class ProductUnitLookup : RowLookupScript<ViewProductUnitOrderRow>
    {
        public ProductUnitLookup()
        {
            IdField = ViewProductUnitOrderRow.Fields.ProductId.PropertyName;
            TextField = ViewProductUnitOrderRow.Fields.ProductNumberName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ViewProductUnitOrderRow.Fields;
            query.Select(fld.CustomerDealerId)
            .Select(fld.ProductNumberName)
            .Select(fld.ProductTypeId)
            .Where(
                new Criteria(fld.ProductTypeId) == 2 &
                new Criteria(fld.ProductNumberName) != "" &
                new Criteria(fld.CustomerDealerId).IsNotNull());
        }
    }
}