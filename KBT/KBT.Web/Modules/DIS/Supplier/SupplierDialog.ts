﻿
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey() { return SupplierForm.formKey; }
        protected getIdProperty() { return SupplierRow.idProperty; }
        protected getLocalTextPrefix() { return SupplierRow.localTextPrefix; }
        protected getNameProperty() { return SupplierRow.nameProperty; }
        protected getService() { return SupplierService.baseUrl; }

        protected form = new SupplierForm(this.idPrefix);
    }
}