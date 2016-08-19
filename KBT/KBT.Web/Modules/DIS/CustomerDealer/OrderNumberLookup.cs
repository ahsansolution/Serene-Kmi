
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("DIS.OrderNumberLookup")]
    public class OrderNumberLookup : RowLookupScript<OrdersRow>
    {
        public OrderNumberLookup()
        {
            IdField = OrdersRow.Fields.OrderNumber.PropertyName;
            TextField = OrdersRow.Fields.OrderNumber.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = OrdersRow.Fields;
            query.Distinct(true)
            .Select(fld.OrderNumber)
            .Select(fld.OrderId)
            .Where(
                new Criteria(fld.OrderNumber) != "" &
                new Criteria(fld.OrderId).IsNotNull());
        }
    }
}