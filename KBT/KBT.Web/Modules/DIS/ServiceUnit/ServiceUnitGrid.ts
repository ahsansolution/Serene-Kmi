
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ServiceUnitGrid extends Serenity.EntityGrid<ServiceUnitRow, any> {
        protected getColumnsKey() { return 'DIS.ServiceUnit'; }
        protected getDialogType() { return ServiceUnitDialog; }
        protected getIdProperty() { return ServiceUnitRow.idProperty; }
        protected getLocalTextPrefix() { return ServiceUnitRow.localTextPrefix; }
        protected getService() { return ServiceUnitService.baseUrl; }

        public custId: any;


        constructor(container: JQuery) {
            super(container);
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);
            // passing category ID from grid editor to detail dialog
            (dialog as ServiceUnitDialog).custId = this.custId;
        }
    }
}