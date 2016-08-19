
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ViewProductUnitDialog extends Serenity.EntityDialog<ViewProductUnitRow, any> {
        protected getFormKey() { return ViewProductUnitForm.formKey; }
        protected getLocalTextPrefix() { return ViewProductUnitRow.localTextPrefix; }
        protected getNameProperty() { return ViewProductUnitRow.nameProperty; }
        protected getService() { return ViewProductUnitService.baseUrl; }

        protected form = new ViewProductUnitForm(this.idPrefix);
    }
}