
namespace KBT.DIS {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CustomerDealerDialog extends Serenity.EntityDialog<CustomerDealerRow, any> {
        protected getFormKey() { return CustomerDealerForm.formKey; }
        protected getIdProperty() { return CustomerDealerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerDealerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerDealerRow.nameProperty; }
        protected getService() { return CustomerDealerService.baseUrl; }

        protected form = new CustomerDealerForm(this.idPrefix);
    }
}
