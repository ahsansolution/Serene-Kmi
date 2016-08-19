/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace KBT.DIS {
    @Serenity.Decorators.registerClass()
    export class ServiceUnitDetailEditDialog extends Common.GridEditorDialog<ServiceUnitDetailRow> {
        protected getFormKey() { return ServiceUnitDetailForm.formKey; }
        //protected getNameProperty() { return OrderDetailRow.na; }
        protected getLocalTextPrefix() { return ServiceUnitDetailRow.localTextPrefix; }

        protected form: ServiceUnitDetailForm;
        public productTypeID: any;

        constructor() {
            super();
            this.form = new ServiceUnitDetailForm(this.idPrefix);
        }

        //protected beforeLoadEntity(entity) {
        //    super.beforeLoadEntity(entity);
        //    Q.alert(this.productTypeID);
        //    this.form.ProductID.cascadeField = "ProductTypeId";
        //    this.form.ProductID.cascadeValue = this.productTypeID;

        //}

        protected afterLoadEntity() {
            super.afterLoadEntity();
        }

        protected updateInterface()
        {
            super.updateInterface(); 
        }
    }
}