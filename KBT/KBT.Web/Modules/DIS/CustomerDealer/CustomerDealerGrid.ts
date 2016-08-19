
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class CustomerDealerGrid extends Serenity.EntityGrid<CustomerDealerRow, any> {
        protected getColumnsKey() { return 'DIS.CustomerDealer'; }
        protected getDialogType() { return CustomerDealerDialog; }
        protected getIdProperty() { return CustomerDealerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerDealerRow.localTextPrefix; }
        protected getService() { return CustomerDealerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            //buttons = super.getButtons().splice(0, 0);

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: CustomerDealerService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
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