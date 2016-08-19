/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class ServiceUnitDetailEditor extends Common.GridEditorBase<ServiceUnitDetailRow> {
        protected getColumnsKey() { return "DIS.ServiceUnitDetail"; }
        protected getDialogType() { return ServiceUnitDetailEditDialog; }
        protected getLocalTextPrefix() { return ServiceUnitDetailRow.localTextPrefix; }

        public productTypeID: any;

        constructor(container: JQuery) {
            super(container);
        }

        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);
            // passing category ID from grid editor to detail dialog
            (dialog as ServiceUnitDetailEditDialog).productTypeID = this.productTypeID;
        }
      

        protected validateEntity(row, id) {
           
            return true;
        }

      

       
    }
}