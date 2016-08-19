
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductAlternativeDialog extends Serenity.EntityDialog<ProductAlternativeRow, any> {
        protected getFormKey() { return ProductAlternativeForm.formKey; }
        protected getIdProperty() { return ProductAlternativeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductAlternativeRow.localTextPrefix; }
        protected getService() { return ProductAlternativeService.baseUrl; }

        protected form = new ProductAlternativeForm(this.idPrefix);
    }
}