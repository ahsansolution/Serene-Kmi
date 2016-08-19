
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class RevenueGrid extends Serenity.EntityGrid<RevenueRow, any> {
        protected getColumnsKey() { return 'DIS.Revenue'; }
        protected getDialogType() { return RevenueDialog; }
        protected getIdProperty() { return RevenueRow.idProperty; }
        protected getLocalTextPrefix() { return RevenueRow.localTextPrefix; }
        protected getService() { return RevenueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}