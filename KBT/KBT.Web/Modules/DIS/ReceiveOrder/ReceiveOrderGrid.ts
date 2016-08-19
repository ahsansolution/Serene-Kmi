
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ReceiveOrderGrid extends Serenity.EntityGrid<ReceiveOrderRow, any> {
        protected getColumnsKey() { return 'DIS.ReceiveOrder'; }
        protected getDialogType() { return ReceiveOrderDialog; }
        protected getIdProperty() { return ReceiveOrderRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiveOrderRow.localTextPrefix; }
        protected getService() { return ReceiveOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'DIS/ReceiveOrder/ListExcel',
                separator: true
            }));

            buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}