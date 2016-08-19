
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ViewProductStockDialog extends Serenity.EntityDialog<ViewProductStockRow, any> {
        protected getFormKey() { return ViewProductStockForm.formKey; }
        protected getLocalTextPrefix() { return ViewProductStockRow.localTextPrefix; }
        protected getNameProperty() { return ViewProductStockRow.nameProperty; }
        protected getService() { return ViewProductStockService.baseUrl; }

        protected form = new ViewProductStockForm(this.idPrefix);
    }
}