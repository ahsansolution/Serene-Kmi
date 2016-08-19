
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchaseOrderDetailDialog extends Serenity.EntityDialog<PurchaseOrderDetailRow, any> {
        protected getFormKey() { return PurchaseOrderDetailForm.formKey; }
        protected getIdProperty() { return PurchaseOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }
        protected getService() { return PurchaseOrderDetailService.baseUrl; }

        protected form = new PurchaseOrderDetailForm(this.idPrefix);

        public orderCategoryId: any;



        protected beforeLoadEntity(entity) {
            super.beforeLoadEntity(entity);

      
            this.form.ProductId.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductId.value);
                var price = 0;
                Q.alert('yyyy');
                if (productID != null) {
                    var productPrice = Q.tryFirst(KBT.DIS.ProductPriceRow.getLookup().items, x => x.ProductId == productID &&
                        x.OrderCategoryId == this.orderCategoryId);
                    this.form.Price.value = productPrice.Price;
                    var product = Q.tryFirst(KBT.DIS.ProductsRow.getLookup().items, x => x.ProductID == productID);
                    this.form.ProductSerialNumber.value = product.SerialNumber;

                }
            });
        }
    }
}