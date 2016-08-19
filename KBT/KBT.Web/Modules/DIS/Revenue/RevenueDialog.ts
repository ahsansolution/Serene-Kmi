
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RevenueDialog extends Serenity.EntityDialog<RevenueRow, any> {
        protected getFormKey() { return RevenueForm.formKey; }
        protected getIdProperty() { return RevenueRow.idProperty; }
        protected getLocalTextPrefix() { return RevenueRow.localTextPrefix; }
        protected getNameProperty() { return RevenueRow.nameProperty; }
        protected getService() { return RevenueService.baseUrl; }

        protected form = new RevenueForm(this.idPrefix);
    }
}