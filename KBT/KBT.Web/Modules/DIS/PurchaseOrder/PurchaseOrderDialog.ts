
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey() { return PurchaseOrderForm.formKey; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseOrderRow.nameProperty; }
        protected getService() { return PurchaseOrderService.baseUrl; }

        protected form = new PurchaseOrderForm(this.idPrefix);

        constructor() {
            super();
            this.form.OrderCategoryId.changeSelect2(e => {
                this.form.DetailList.orderCategoryId = this.form.OrderCategoryId.value;
            });

            this.form.ProductTypeId.changeSelect2(e => {
                this.form.DetailList.productTypeId = this.form.ProductTypeId.value;
            });
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            var poButton = {
                title: "Cetak PO",
                cssClass: 'export-pdf-button',
                onClick: () => {
                    Q.postToUrl({
                        url: '~/Services/DIS/PurchaseOrder/PrintPO/', //+ (options.download ? 'Download' : 'Render'),
                        params: { entityId: this.get_entityId() },
                        target: '_blank'
                    });
                }
            };

            buttons.push(poButton);
            return buttons;
        }



        //protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
        //    //super.initDialog(itemType, dialog);
        //    // passing category ID from grid editor to detail dialog
        //    (dialog as PurchaseOrderDetailDialog).orderCategoryId = this.form.OrderCategoryId.value;
        //}
    }
}