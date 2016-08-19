
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class CostGrid extends Serenity.EntityGrid<CostRow, any> {
        protected getColumnsKey() { return 'DIS.Cost'; }
        protected getDialogType() { return CostDialog; }
        protected getIdProperty() { return CostRow.idProperty; }
        protected getLocalTextPrefix() { return CostRow.localTextPrefix; }
        protected getService() { return CostService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}