
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("DIS.ReceiveOrderNumberLookup")]
    public class ReceiveOrderNumberLookup : RowLookupScript<ReceiveOrderRow>
    {
        public ReceiveOrderNumberLookup()
        {
            IdField = ReceiveOrderRow.Fields.ReceiveOrderNumber.PropertyName;
            TextField = ReceiveOrderRow.Fields.ReceiveOrderNumber.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ReceiveOrderRow.Fields;
            query.Distinct(true)
            .Select(fld.ReceiveOrderNumber)
            .Select(fld.ReceiveOrderId)
            .Where(
                new Criteria(fld.ReceiveOrderNumber) != "" &
                new Criteria(fld.ReceiveOrderId).IsNotNull());
        }
    }
}