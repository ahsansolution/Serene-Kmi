
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OrderCategoryDialog extends Serenity.EntityDialog<OrderCategoryRow, any> {
        protected getFormKey() { return OrderCategoryForm.formKey; }
        protected getIdProperty() { return OrderCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return OrderCategoryRow.localTextPrefix; }
        protected getNameProperty() { return OrderCategoryRow.nameProperty; }
        protected getService() { return OrderCategoryService.baseUrl; }

        protected form = new OrderCategoryForm(this.idPrefix);
    }
}