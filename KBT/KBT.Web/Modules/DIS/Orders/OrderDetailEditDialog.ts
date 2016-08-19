/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace KBT.DIS {
    @Serenity.Decorators.registerClass()
    export class OrderDetailEditDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey() { return OrderDetailForm.formKey; }
        //protected getNameProperty() { return OrderDetailRow.na; }
        protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }

        protected form: OrderDetailForm;
        public productTypeID: any;

        constructor() {
            super();
            this.form = new OrderDetailForm(this.idPrefix);
            //this.form.ProductID.filterField = "ProductTypeID";
            //this.form.ProductID.filterValue = 1;
            this.form.ProductID.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductID.value);
                var price = 0;
                
                if (productID != null) {
                    var productPrice = Q.first(KBT.DIS.ProductBasePriceRow.getLookup().items, x => x.ProductID == productID &&
                        x.IsActive == true);
                    this.form.BasePrice.value = productPrice.Price;
                    var stock = Q.first(KBT.DIS.ViewProductStockRow.getLookup().items, x => x.ProductId == productID).Stock;
                    this.form.Stock.value = stock;

                    var row = Q.tryFirst(ProductsRow.getLookup().items, x => x.ProductID == +this.form.ProductID.value);
                        //&& x.Discontinued == 1);
                    this.form.OrderDetailProductColor.value = row.Color;
                    this.form.OrderDetailProductSerialNumber.value = row.SerialNumber;
                    this.form.OrderDetailProductManufactureYear.value = row.ManufactureYear;
                    //this.form.OrderDetailProductMachineNo.value = row.MachineNo;
                }
            });
        }

        //protected beforeLoadEntity(entity) {
        //    super.beforeLoadEntity(entity);
        //    Q.alert(this.productTypeID);
        //    this.form.ProductID.cascadeField = "ProductTypeId";
        //    this.form.ProductID.cascadeValue = this.productTypeID;

        //}

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //Q.alert(this.productTypeID);
            //this.form.ProductID.cascadeField = "ProductTypeId";
            //this.form.ProductID.cascadeValue = 2;
           
        }

        protected updateInterface()
        {
            super.updateInterface();
            if (this.productTypeID == 1 || this.productTypeID == 3) {
                jQuery(".field.OrderDetailProductSerialNumber").hide();
                jQuery(".field.OrderDetailProductColor").hide();
                jQuery(".field.OrderDetailProductManufactureYear").hide();
            }
            else
            {
                //if (this.productTypeID != 1) {
                //    this.form.ProductID.changeSelect2(e => {
                //        var row = Q.tryFirst(ProductsRow.getLookup().items, x => x.ProductID == +this.form.ProductID.value
                //            && x.Discontinued == true);
                //        Q.alert(row.Color);
                //        this.form.OrderDetailProductColor.value = row.Color;
                //        this.form.OrderDetailProductSerialNumber.value = row.SerialNumber;
                //        this.form.OrderDetailProductManufactureYear.value = row.ManufactureYear;
                //        this.form.OrderDetailProductMachineNo.value = row.MachineNo;
                //    });
                //}
                //Serenity.EditorUtils.setReadOnly(this.form.OrderDetailProductColor, true);
                //Serenity.EditorUtils.setReadOnly(this.form.OrderDetailProductSerialNumber, true);
                //Serenity.EditorUtils.setReadOnly(this.form.OrderDetailProductMachineNo, true);
                //Serenity.EditorUtils.setReadOnly(this.form.OrderDetailProductManufactureYear, true);
            }

           
        }
    }
}