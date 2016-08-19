
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductBasePriceDialog extends Serenity.EntityDialog<ProductBasePriceRow, any> {
        protected getFormKey() { return ProductBasePriceForm.formKey; }
        protected getIdProperty() { return ProductBasePriceRow.idProperty; }
        protected getLocalTextPrefix() { return ProductBasePriceRow.localTextPrefix; }
        protected getService() { return ProductBasePriceService.baseUrl; }

        protected form = new ProductBasePriceForm(this.idPrefix);
    }
}