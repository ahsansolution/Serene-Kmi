
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("DIS.PurchaseOrderNumberLookup")]
    public class PurchaseOrderNumberLookup : RowLookupScript<PurchaseOrderRow>
    {
        public PurchaseOrderNumberLookup()
        {
            IdField = PurchaseOrderRow.Fields.PurchaseOrderNumber.PropertyName;
            TextField = PurchaseOrderRow.Fields.PurchaseOrderNumber.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PurchaseOrderRow.Fields;
            query.Distinct(true)
            .Select(fld.ProductTypeId)
            .Select(fld.PurchaseOrderNumber)
            .Select(fld.PurchaseOrderId)
            .Where(
                new Criteria(fld.PurchaseOrderNumber) != "" &
                new Criteria(fld.PurchaseOrderId).IsNotNull());
        }
    }
}