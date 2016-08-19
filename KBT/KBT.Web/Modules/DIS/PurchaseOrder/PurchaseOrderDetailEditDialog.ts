/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace KBT.DIS {
    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailEditDialog extends
        Common.GridEditorDialog<PurchaseOrderDetailRow> {
        protected getFormKey() { return PurchaseOrderDetailForm.formKey; }
        //protected getNameProperty() { return PurchaseOrderDetailRow.nameProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }

        protected form: PurchaseOrderDetailForm;
        public orderCategoryId: any;
        public productTypeId: any;

        constructor() {
            super();
            this.form = new PurchaseOrderDetailForm(this.idPrefix);
            Serenity.EditorUtils.setReadOnly(this.form.ProductSerialNumber, true);
            Serenity.EditorUtils.setReadOnly(this.form.ProductColor, true);
            Serenity.EditorUtils.setReadOnly(this.form.ProductManufactureYear, true);
           
        }

        afterLoadEntity()
        {
            super.afterLoadEntity();
            this.form.ProductId.cascadeField = "ProductTypeId";
            this.form.ProductId.cascadeValue = this.productTypeId;
         
            this.form.ProductId.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductId.value);
                var price = 0;
                if (productID != null) {
                    var productPrice = Q.tryFirst(KBT.DIS.ProductPriceRow.getLookup().items, x => x.ProductId == productID &&
                        x.OrderCategoryId == this.orderCategoryId);
                    if (productPrice != null) {
                        this.form.Price.value = productPrice.Price;
                        this.form.ProductPriceId.value = productPrice.ProductPriceId;
                    }
                    
                    var product = Q.tryFirst(KBT.DIS.ProductsRow.getLookup().items, x => x.ProductID == productID);
                    if (product != null) {
                        this.form.ProductSerialNumber.value = product.SerialNumber;
                        this.form.ProductColor.value = product.Color;
                        this.form.ProductManufactureYear.value = product.ManufactureYear.toString();
                    }

                }
            });
        }
    }
}