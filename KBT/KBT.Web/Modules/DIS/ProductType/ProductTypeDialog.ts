
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductTypeDialog extends Serenity.EntityDialog<ProductTypeRow, any> {
        protected getFormKey() { return ProductTypeForm.formKey; }
        protected getIdProperty() { return ProductTypeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductTypeRow.localTextPrefix; }
        protected getNameProperty() { return ProductTypeRow.nameProperty; }
        protected getService() { return ProductTypeService.baseUrl; }

        protected form = new ProductTypeForm(this.idPrefix);
    }
}