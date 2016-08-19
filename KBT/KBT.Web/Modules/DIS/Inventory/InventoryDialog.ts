
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class InventoryDialog extends Serenity.EntityDialog<InventoryRow, any> {
        protected getFormKey() { return InventoryForm.formKey; }
        protected getIdProperty() { return InventoryRow.idProperty; }
        protected getLocalTextPrefix() { return InventoryRow.localTextPrefix; }
        protected getNameProperty() { return InventoryRow.nameProperty; }
        protected getService() { return InventoryService.baseUrl; }

        protected form = new InventoryForm(this.idPrefix);
    }
}