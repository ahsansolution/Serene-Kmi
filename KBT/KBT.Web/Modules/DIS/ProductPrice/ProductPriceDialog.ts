
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductPriceDialog extends Serenity.EntityDialog<ProductPriceRow, any> {
        protected getFormKey() { return ProductPriceForm.formKey; }
        protected getIdProperty() { return ProductPriceRow.idProperty; }
        protected getLocalTextPrefix() { return ProductPriceRow.localTextPrefix; }
        protected getService() { return ProductPriceService.baseUrl; }

        protected form = new ProductPriceForm(this.idPrefix);
    }
}