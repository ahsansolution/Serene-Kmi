namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class ProductLookupEditor extends Serenity.LookupEditorBase<ProductsRow, any> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return 'DIS.ProductLookup';
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.ProductNumber + ']';
        }
    }
}