
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ServiceUnitDetailDialog extends Serenity.EntityDialog<ServiceUnitDetailRow, any> {
        protected getFormKey() { return ServiceUnitDetailForm.formKey; }
        protected getIdProperty() { return ServiceUnitDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitDetailRow.localTextPrefix; }
        protected getService() { return ServiceUnitDetailService.baseUrl; }

        protected form = new ServiceUnitDetailForm(this.idPrefix);
    }
}