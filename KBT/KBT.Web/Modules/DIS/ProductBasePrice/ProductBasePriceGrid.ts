
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ProductBasePriceGrid extends Serenity.EntityGrid<ProductBasePriceRow, any> {
        protected getColumnsKey() { return 'DIS.ProductBasePrice'; }
        protected getDialogType() { return ProductBasePriceDialog; }
        protected getIdProperty() { return ProductBasePriceRow.idProperty; }
        protected getLocalTextPrefix() { return ProductBasePriceRow.localTextPrefix; }
        protected getService() { return ProductBasePriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            //buttons = super.getButtons().splice(0, 0);

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ProductBasePriceService.baseUrl + '/ListExcel',
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