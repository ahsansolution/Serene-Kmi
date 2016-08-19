/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class OrderDetailEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey() { return "DIS.OrderDetail"; }
        protected getDialogType() { return OrderDetailEditDialog; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }

        public productTypeID: any;

        constructor(container: JQuery) {
            super(container);
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);
            // passing category ID from grid editor to detail dialog
            (dialog as OrderDetailEditDialog).productTypeID = this.productTypeID;
        }
      

        protected validateEntity(row, id) {
            row.ProductID = Q.toId(row.ProductID);
            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('Barang ini sudah ada dalam list!');
                return false;
            }
            row.ProductProductName = ProductsRow.getLookup().itemById[row.ProductID].ProductName;
            row.BasePrice = row.BasePrice;
            row.LineTotal = row.OrderQty * row.BasePrice;
            //var CostPercent = CostRow.getLookup().itemById[row.CostId].Percentage;
            row.CostTotal = row.LineTotal * (10 / 100);
            return true;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('OrderQty'),
                    new Slick.Aggregators.Sum('BasePrice'),
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