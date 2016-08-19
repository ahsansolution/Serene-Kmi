
namespace KBT.DIS {

    @Serenity.Decorators.registerClass()
    export class UploadProductsGrid extends KBT.DIS.ProductsGrid {
       
        constructor(container: JQuery) {
            super(container);
        }

        getButtons(): Serenity.ToolButton[] {
            // call base method to get list of buttons
            var buttons = super.getButtons();

            // add our import button
            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                     //open import dialog, let it handle rest
                    var dialog = new ProductsExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons;
        }       
    }
}