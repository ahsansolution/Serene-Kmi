
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ProductAlternativeGrid extends Serenity.EntityGrid<ProductAlternativeRow, any> {
        protected getColumnsKey() { return 'DIS.ProductAlternative'; }
        protected getDialogType() { return ProductAlternativeDialog; }
        protected getIdProperty() { return ProductAlternativeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductAlternativeRow.localTextPrefix; }
        protected getService() { return ProductAlternativeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}