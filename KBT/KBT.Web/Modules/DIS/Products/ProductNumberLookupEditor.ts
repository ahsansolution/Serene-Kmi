namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class ProductNumberLookupEditor extends Serenity.LookupEditorBase<ProductsRow, any> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return 'DIS.ProductsRow';
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.ProductName + ']';
        }
    }
}