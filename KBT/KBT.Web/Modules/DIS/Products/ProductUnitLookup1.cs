
namespace KBT.DIS.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("DIS.ProductUnitLookup1")]
    public class ProductUnitLookup1 : RowLookupScript<ViewProductUnitOrderRow>
    {
        public ProductUnitLookup1()
        {
            IdField = ViewProductUnitOrderRow.Fields.ProductId.PropertyName;
            TextField = ViewProductUnitOrderRow.Fields.ProductNumberName.PropertyName;
            //Expiration = 
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fldProduct = ProductsRow.Fields.As("fldProduct");
            var fldViewPO = ViewProductUnitOrderRow.Fields;//.As("fldViewPO");
            query
                 //.Distinct(true)
                 .Select(fldProduct.ProductID)
                 .Select(fldViewPO.OrderDetailId)
                 .Select(fldViewPO.ProductNumberName)
                 .Select(fldViewPO.CustomerDealerId)
                 .InnerJoin(fldProduct, fldProduct.ProductID == fldViewPO.ProductId)
                 .Where(fldProduct.ProductID.In(
                    query.SubQuery()
                    .Select(fldViewPO.ProductId)
                    .From(fldViewPO)
                    .Where(new Criteria(fldViewPO.ProductTypeId) == 2 &
                    new Criteria(fldViewPO.OrderDetailId).IsNotNull())));
         }
    }
}