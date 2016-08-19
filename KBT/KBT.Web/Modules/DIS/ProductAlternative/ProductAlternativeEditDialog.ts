/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace KBT.DIS {
    @Serenity.Decorators.registerClass()
    export class ProductAlternativeEditDialog extends
        Common.GridEditorDialog<ProductAlternativeRow> {
        protected getFormKey() { return ProductAlternativeForm.formKey; }
        //protected getNameProperty() { return PurchaseOrderDetailRow.nameProperty; }
        protected getLocalTextPrefix() { return ProductAlternativeRow.localTextPrefix; }

        protected form: ProductAlternativeForm;
        public orderCategoryId: any;

        constructor() {
            super();
            this.form = new ProductAlternativeForm(this.idPrefix);
            //this.form.ProductId.changeSelect2(e => {
            //    var productID = Q.toId(this.form.ProductId.value);
            //    var price = 0;

            //    if (productID != null) {
            //        var productPrice = Q.first(KBT.DIS.ProductPriceRow.getLookup().items, x => x.ProductId == productID &&
            //            x.OrderCategoryId == this.orderCategoryId);
            //        this.form.Price.value = productPrice.Price;
            //        this.form.ProductPriceId.value = productPrice.ProductPriceId;
            //    }
            //});
        }
    }
}