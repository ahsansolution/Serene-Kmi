/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class PurchaseOrderDetailEditor extends Common.GridEditorBase<PurchaseOrderDetailRow> {
        protected getColumnsKey() { return "DIS.PurchaseOrderDetail"; }
        protected getDialogType() { return PurchaseOrderDetailEditDialog; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }

        public orderCategoryId: any;
        public productTypeId: any;

        constructor(container: JQuery) {
            super(container);
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);
            // passing category ID from grid editor to detail dialog
            (dialog as PurchaseOrderDetailEditDialog).orderCategoryId = this.orderCategoryId;
            (dialog as PurchaseOrderDetailEditDialog).productTypeId = this.productTypeId;
        }

        protected validateEntity(row, id) {
            
            row.ProductId = Q.toId(row.ProductId);
            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('Barang ini sudah ada dalam list pemesanan!');
                return false;
            }

            row.ProductProductName = ProductsRow.getLookup().itemById[row.ProductId].ProductName;
            row.LineTotal = row.Quantity * row.Price;
            row.CostTotal = row.LineTotal * (10 / 100);
            return true;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Quantity'),
                    new Slick.Aggregators.Sum('Price'),
                    new Slick.Aggregators.Sum('LineTotal'),
                    new Slick.Aggregators.Sum('CostTotal')
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }
    }
}