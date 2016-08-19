
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey() { return ProductsForm.formKey; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected getService() { return ProductsService.baseUrl; }

        protected form = new ProductsForm(this.idPrefix);

        constructor() {
            super();
            this.form.ProductTypeId.changeSelect2(e => {
                if (this.form.ProductTypeId.value == "2")
                {
                    //this.form.Merek.value = "";
                    //this.form.PoliceNumber.value = "";
                    //this.form.MachineNo.value = "";
                    //this.form.SerialNumber.value = "";
                    //this.form.Color.value = "";
                    //this.form.ManufactureYear.value = 0;
                    //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, false);
                    Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, false);
                    Serenity.EditorUtils.setReadOnly(this.form.Color, false);
                    Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, false);
                    Serenity.EditorUtils.setReadOnly(this.form.PartNumber, false);
                }
                if (this.form.ProductTypeId.value == "1") {
                    Serenity.EditorUtils.setReadOnly(this.form.PartNumber, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.Merek, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, true);
                    Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, true);
                    Serenity.EditorUtils.setReadOnly(this.form.Color, true);
                    Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, true);
                }
            });
        }

        updateInterface() {
            super.updateInterface();
            Serenity.EditorUtils.setReadOnly(this.form.PartNumber, true);
            //Serenity.EditorUtils.setReadOnly(this.form.Merek, true);
            //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, true);
            //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, true);
            Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, true);
            Serenity.EditorUtils.setReadOnly(this.form.Color, true);
            Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, true);
        }

       

        afterLoadEntity() {
            super.afterLoadEntity();
            if (this.entity.ProductTypeId == 1) {
                Serenity.EditorUtils.setReadOnly(this.form.PartNumber, false);
                //Serenity.EditorUtils.setReadOnly(this.form.Merek, true);
                //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, true);
                //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, true);
                Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, true);
                Serenity.EditorUtils.setReadOnly(this.form.Color, true);
                Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, true);
            }

            if (this.entity.ProductTypeId == 2) {
                //Serenity.EditorUtils.setReadOnly(this.form.Merek, false);
                //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, false);
                //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, false);
                Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, false);
                Serenity.EditorUtils.setReadOnly(this.form.Color, false);
                Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, false);
                Serenity.EditorUtils.setReadOnly(this.form.PartNumber, false);
            }
        }
    }
}