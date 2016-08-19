namespace KBT.DIS.Upload {

    @Serenity.Decorators.registerClass()
    export class UploadFilePanel extends Serenity.PropertyDialog<UploadFileRequest, any> {

        protected getFormKey() { return UploadFileForm.formKey; }

        private form: UploadFileForm;

        constructor(container: JQuery) {
            super(container);

            this.byId('SubmitButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();
                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/ChangePassword'),
                    request: request,
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.ChangePassword.Success'), () => {
                            window.location.href = Q.resolveUrl('~/');
                        });
                    }
                });
            });
        }
    }
}