
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ServiceUnitDetailGrid extends Serenity.EntityGrid<ServiceUnitDetailRow, any> {
        protected getColumnsKey() { return 'DIS.ServiceUnitDetail'; }
        protected getDialogType() { return ServiceUnitDetailDialog; }
        protected getIdProperty() { return ServiceUnitDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitDetailRow.localTextPrefix; }
        protected getService() { return ServiceUnitDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}