/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class ProductAlternativeEditor extends Common.GridEditorBase<ProductAlternativeRow> {
        protected getColumnsKey() { return "DIS.ProductAlternative"; }
        protected getDialogType() { return ProductAlternativeEditDialog; }
        protected getLocalTextPrefix() { return ProductAlternativeRow.localTextPrefix; }

        //public orderCategoryId: any;

        constructor(container: JQuery) {
            super(container);
        }

        //protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
        //    super.initEntityDialog(itemType, dialog);
        //    // passing category ID from grid editor to detail dialog
        //    (dialog as PurchaseOrderDetailDialog).orderCategoryId = this.orderCategoryId;
        //}

        protected validateEntity(row, id) {
            row.SeqNo = row.SeqNo;
            row.ProductIdAltProductNumber = ProductsRow.getLookup().itemById[row.ProductIdAlt].ProductNumber;
            row.ProductIdAltProductName = ProductsRow.getLookup().itemById[row.ProductIdAlt].ProductName;
            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('Barang ini sudah ada dalam list pemesanan!');
            //    return false;
            //}

            //row.ProductProductName = ProductsRow.getLookup().itemById[row.ProductId].ProductName;
            //row.LineTotal = row.Quantity * row.Price;
            //row.CostTotal = row.LineTotal * (10 / 100);
            return true;
        }

        //protected createSlickGrid() {
        //    var grid = super.createSlickGrid();

        //    // need to register this plugin for grouping or you'll have errors
        //    grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

        //    this.view.setSummaryOptions({
        //        aggregators: [
        //            new Slick.Aggregators.Sum('Quantity'),
        //            new Slick.Aggregators.Sum('Price'),
        //            new Slick.Aggregators.Sum('LineTotal'),
        //            new Slick.Aggregators.Sum('CostTotal')
        //        ]
        //    });

        //    return grid;
        //}

        //protected getSlickOptions() {
        //    var opt = super.getSlickOptions();
        //    opt.showFooterRow = true;
        //    return opt;
        //}

        //protected usePager() {
        //    return false;
        //}
    }
}