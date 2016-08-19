
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class InventoryGrid extends Serenity.EntityGrid<InventoryRow, any> {
        protected getColumnsKey() { return 'DIS.Inventory'; }
        protected getDialogType() { return InventoryDialog; }
        protected getIdProperty() { return InventoryRow.idProperty; }
        protected getLocalTextPrefix() { return InventoryRow.localTextPrefix; }
        protected getService() { return InventoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

       

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            return grid;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons = super.getButtons().splice(0, 0);

            buttons.push({
                title: 'Group By Nama Produk',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        getter: 'ProductProductName'
                    }])
            });

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: InventoryService.baseUrl + '/ListExcel',
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