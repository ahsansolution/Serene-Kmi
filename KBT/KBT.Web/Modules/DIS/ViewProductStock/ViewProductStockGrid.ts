
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ViewProductStockGrid extends Serenity.EntityGrid<ViewProductStockRow, any> {
        protected getColumnsKey() { return 'DIS.ViewProductStock'; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return DIS.ViewProductStockRow.nameProperty; }
        protected getDialogType() { return ViewProductStockDialog; }
        protected getLocalTextPrefix() { return ViewProductStockRow.localTextPrefix; }
        protected getService() { return ViewProductStockService.baseUrl; }

        // this is our autoincrementing counter
        private nextId = 1; 

        constructor(container: JQuery) {
            super(container);
        }

        /**
        * This method is called to preprocess data returned from the list service
        */
        protected onViewProcessData(response: Serenity.ListResponse<DIS.ViewProductStockRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            for (var x of response.Entities) {
                (x as any).__id = this.nextId++;
            }
            return response;
        }


        protected getButtons() {
            var buttons = super.getButtons();

            buttons = super.getButtons().splice(0, 0);


            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ViewProductStockService.baseUrl + '/ListExcel',
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