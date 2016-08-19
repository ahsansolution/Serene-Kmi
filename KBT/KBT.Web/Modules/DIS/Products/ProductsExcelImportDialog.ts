namespace KBT.DIS {

    @Serenity.Decorators.registerClass()
    export class ProductsExcelImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: ProductsExcelImportForm;
    

        constructor() {
            super();
            this.form = new ProductsExcelImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel Import";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        //var action = new ProductExcelImportBulkAction();
                        //action.done = () => this.dialogClose();
                        //var str = [];
                        //str.push('aa', 'bb', 'cc');
                        //action.execute(str);
                    }
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ]
        }
    }
}
