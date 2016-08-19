
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ProductPriceGrid extends Serenity.EntityGrid<ProductPriceRow, any> {
        protected getColumnsKey() { return 'DIS.ProductPrice'; }
        protected getDialogType() { return ProductPriceDialog; }
        protected getIdProperty() { return ProductPriceRow.idProperty; }
        protected getLocalTextPrefix() { return ProductPriceRow.localTextPrefix; }
        protected getService() { return ProductPriceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'DIS/ProductPrice/ListExcel',
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