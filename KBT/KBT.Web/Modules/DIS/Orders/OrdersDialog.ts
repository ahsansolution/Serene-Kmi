
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey() { return OrdersForm.formKey; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getService() { return OrdersService.baseUrl; }

        protected form = new OrdersForm(this.idPrefix);

        constructor() {
            super();
            //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, true);
            //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
            //Serenity.EditorUtils.setReadOnly(this.form.OrderProductColor, true);
            //Serenity.EditorUtils.setReadOnly(this.form.OrderProductSerialNumber, true);
            //Serenity.EditorUtils.setReadOnly(this.form.OrderProductManufactureYear, true);
            //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);

            this.form.ProductTypeID.changeSelect2(e => {

                //this.form.OrderProductColor.value = "";
                //this.form.OrderProductSerialNumber.value = "";
                //this.form.OrderProductManufactureYear.value = null;
                //this.form.PaymentService.value = 0;
                //this.form.KmInUse.value = 0;
                //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);

                if (this.form.ProductTypeID.value == "3") {
                    if (this.form.CustomerDealerId.value != "") {
                        var ord = Q.tryFirst(OrdersRow.getLookup().items, x => x.ProductTypeID == 2 &&
                            x.CustomerDealerId == +this.form.CustomerDealerId.value && x.OrderStatus == "Complete");
                        if (ord == null) {
                            //Q.alert("Cannot select this product type, system cannot found unit order for this customer");
                            //this.form.ProductTypeID.value = "";
                            //this.form.ProductUnitId.value = "";
                            //this.form.PaymentService.value = 0;
                            //this.form.KmInUse.value = 0;
                            //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, true);
                            //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                            //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                        }
                        else {
                            //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, false);
                            //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, false);
                            //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, false);
                            //this.form.PaymentService.value = 0;
                            //this.form.KmInUse.value = 0;
                            //this.form.ProductUnitId.value = "";

                            //this.form.ProductUnitId.cascadeField = "CustomerDealerId";
                            //this.form.ProductUnitId.cascadeValue = this.form.CustomerDealerId.value;
                            //this.form.ProductUnitId.clearItems();
                            //this.form.ProductUnitId.addItem({ id: "ProductNumber", source: "Tracktor", text: "Tracktor", disabled: false });
                        }
                    }
                }
                else
                {
                    //this.form.PaymentService.value = 0;
                    //this.form.ProductUnitId.value = "";
                    //this.form.KmInUse.value = 0;
                    //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                }

                this.form.DetailList.productTypeID = this.form.ProductTypeID.value;
            });

            this.form.CustomerDealerId.changeSelect2(e => {
                //this.form.OrderProductColor.value = "";
                //this.form.OrderProductSerialNumber.value = "";
                //this.form.OrderProductManufactureYear.value = null;
                //this.form.PaymentService.value = 0;
                //this.form.KmInUse.value = 0;
                //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);

                if (this.form.ProductTypeID.value == "3") {
                    if (this.form.CustomerDealerId.value != "") {
                        var ord = Q.tryFirst(OrdersRow.getLookup().items, x => x.ProductTypeID == 2 &&
                            x.CustomerDealerId == +this.form.CustomerDealerId.value && x.OrderStatus == "Complete");
                        if (ord == null) {
                            //Q.alert("Cannot select this product type, system cannot found unit order for this customer");
                            //this.form.ProductTypeID.value = "";
                            //this.form.ProductUnitId.value = "";
                            //this.form.PaymentService.value = 0;
                            //this.form.KmInUse.value = 0;
                            //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, true);
                            //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                            //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                        }
                        else {
                            //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, false);
                            //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, false);
                            //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, false);
                            //this.form.ProductUnitId.value = "";
                            //this.form.PaymentService.value = 0;
                            //this.form.KmInUse.value = 0;
                        }
                    }
                }
                else
                {
                    //this.form.PaymentService.value = 0;
                    //this.form.ProductUnitId.value = "";
                    //this.form.KmInUse.value = 0;
                    //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                    ////Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                }

                this.form.DetailList.productTypeID = this.form.ProductTypeID.value;
            });

            //this.form.ProductUnitId.changeSelect2(e => {
            //    if (this.form.ProductTypeID.value = "3") {
            //        //Q.alert(this.form.ProductUnitId.value);
            //        //var row = Q.tryFirst(ProductsRow.getLookup().items, x => x.ProductID == +this.form.ProductUnitId.value);//&& x.Discontinued == 1);
            //        //this.form.OrderProductColor.value = row.Color;
            //        //this.form.OrderProductSerialNumber.value = row.SerialNumber;
            //        //this.form.OrderProductManufactureYear.value = row.ManufactureYear;
            //    }
            //    else
            //    {
            //        //this.form.OrderProductColor.value = "";
            //        //this.form.OrderProductSerialNumber.value = "";
            //        //this.form.OrderProductManufactureYear.value = null;
            //        //this.form.PaymentService.value = 0;
            //        //this.form.KmInUse.value = 0;
            //        //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
            //        //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
            //    }
            //});
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            var poButton = {
                title: "Print Invoice",
                cssClass: 'export-pdf-button',
                onClick: () => {
                    Q.postToUrl({
                        url: '~/Services/DIS/Orders/PrintInvoice/', //+ (options.download ? 'Download' : 'Render'),
                        params: { entityId: this.get_entityId() },
                        target: '_blank'
                    });
                }
            };

            buttons.push(poButton);
            return buttons;
        }
    }
}