
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ServiceUnitDialog extends Serenity.EntityDialog<ServiceUnitRow, any> {
        protected getFormKey() { return ServiceUnitForm.formKey; }
        protected getIdProperty() { return ServiceUnitRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitRow.localTextPrefix; }
        protected getService() { return ServiceUnitService.baseUrl; }

        public custId: any;

        protected form = new ServiceUnitForm(this.idPrefix);

        constructor(container: JQuery) {
            super(container);
           
        }



        protected beforeLoadEntity(entity) {
            super.beforeLoadEntity(entity);    
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
           
        }


    }
}