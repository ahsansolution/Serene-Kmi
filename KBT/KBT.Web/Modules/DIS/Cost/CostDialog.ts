
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CostDialog extends Serenity.EntityDialog<CostRow, any> {
        protected getFormKey() { return CostForm.formKey; }
        protected getIdProperty() { return CostRow.idProperty; }
        protected getLocalTextPrefix() { return CostRow.localTextPrefix; }
        protected getNameProperty() { return CostRow.nameProperty; }
        protected getService() { return CostService.baseUrl; }

        protected form = new CostForm(this.idPrefix);
    }
}