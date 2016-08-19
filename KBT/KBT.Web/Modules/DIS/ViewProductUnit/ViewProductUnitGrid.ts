
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class ViewProductUnitGrid extends Serenity.EntityGrid<ViewProductUnitRow, any> {
        protected getColumnsKey() { return 'DIS.ViewProductUnit'; }
        protected getIdProperty() { return "__id"; }
        protected getDialogType() { return ViewProductUnitDialog; }
        protected getLocalTextPrefix() { return ViewProductUnitRow.localTextPrefix; }
        protected getService() { return ViewProductUnitService.baseUrl; }

        // this is our autoincrementing counter
        private nextId = 1;

        constructor(container: JQuery) {
            super(container);
        }

        /**
        * This method is called to preprocess data returned from the list service
        */
        protected onViewProcessData(response: Serenity.ListResponse<DIS.ViewProductUnitRow>) {
            response = super.onViewProcessData(response);

            // there is no __id property in SalesByCategoryRow but 
            // this is javascript and we can set any property of an object
            for (var x of response.Entities) {
                (x as any).__id = this.nextId++;
            }
            return response;
        }
    }
}