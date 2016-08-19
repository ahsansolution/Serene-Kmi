/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.registerEditor()
    export class ReceiveOrderDetailEditor extends Common.GridEditorBase<ReceiveOrderDetailRow> {
        protected getColumnsKey() { return 'DIS.ReceiveOrderDetail'; }
        protected getDialogType() { return ReceiveOrderDetailDialog; }
        protected getIdProperty() { return ReceiveOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiveOrderDetailRow.localTextPrefix; }
        protected getService() { return ReceiveOrderDetailService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};


        constructor(container: JQuery) {
            super(container);
            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field') || this.getColumns()[cell.cell].field;
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.ReceiveOrderDetailId];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
            else
                oldText = effective as string;

            var value;
            if (field === 'BackOrderQty' || field === "ReceiveQty") {
                value = Q.parseDecimal(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Decimal'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

           

            if (!pending) {
                this.pendingChanges[item.ReceiveOrderDetailId] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.ReceiveOrderDetailId];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }
                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.ReceiveOrderDetailId = key;
                //entity.ReceiveOrderStatus = "Complete";
                Q.serviceRequest('DIS/ReceiveOrderDetail/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
            this.refresh();
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('ReceiveQty'),
                    new Slick.Aggregators.Sum('Price'),
                    new Slick.Aggregators.Sum('BackOrderQty')
                ]
            });

            return grid;
        }

        private numericInputFormatter(ctx) {
            var klass = 'edit numeric';
            var item = ctx.item as ReceiveOrderDetailRow;
            var pending = this.pendingChanges[item.ReceiveOrderDetailId];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            return "<input type='text'  class='" + klass + "'" +
                " value='" + Q.formatNumber(value, '0.##') + "'/>";
        }

        private stringInputFormatter(ctx) {
            var klass = 'edit string';
            var item = ctx.item as ReceiveOrderDetailRow;
            var pending = this.pendingChanges[item.BinLocation];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' value='" + Q.htmlEncode(value) +
                "' maxlength='" + column.sourceItem.maxLength + "'/>";
        }

        private sourceLanguage: Serenity.LookupEditor;

        //protected createToolbarExtensions() {
        //    let opt: Serenity.LookupEditorOptions = {
        //        lookupKey: 'DIS.ReceiveOrder'
        //    };

        //    this.sourceLanguage = Serenity.Widget.create({
        //        type: Serenity.LookupEditor,
        //        element: el => el.appendTo(this.toolbar.element).attr('placeholder', '--- ' +
        //            Q.text('Pilih Order') + ' ---'),
        //        options: opt
        //    });

        //    this.sourceLanguage.changeSelect2(e => {
        //        this.refresh();
        //    });
        //    super.createToolbarExtensions();
        //}

        //protected onViewSubmit(): boolean {
        //    if (!super.onViewSubmit()) {
        //          return false;
        //    }
       
        //    var request = this.view.params as Serenity.ListRequest;
        //    request.Criteria = Serenity.Criteria.and(request.Criteria,
        //        [['ReceiveOrderId'], '=', this.sourceLanguage.value]);
        //    return true;
        //}


        protected getButtons() {
            //var buttons = super.getButtons();

            //buttons = super.getButtons().splice(0, 0);

            //buttons.push({
            //    title: 'Simpan Data',
            //    cssClass: 'apply-changes-button',
            //    onClick: e =>
            //        Q.confirm("Apakah data penerimaan barang akan disimpan?", () => {
            //            this.saveClick();
            //        }),
            //    separator: true
            //});

            //buttons.push({
            //    title: 'Group By No RO',
            //    cssClass: 'expand-all-button',
            //    onClick: () => this.view.setGrouping(
            //        [{
            //            getter: 'ReceiveOrderReceiveOrderNumber'
            //        }])
            //});

            return [];
        }

        protected getColumns() {
            var columns = super.getColumns();
            var fld = ReceiveOrderDetailRow.Fields;
            var num = ctx => this.numericInputFormatter(ctx);
            var str = ctx => this.stringInputFormatter(ctx);
            Q.first(columns, x => x.field === 'BinLocation').format = str;
            Q.first(columns, x => x.field === 'BackOrderQty').format = num;
            Q.first(columns, x => x.field === 'ReceiveQty').format = num;
            return columns;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = false;
            return opt;
        }

        protected usePager() {
            return false;
        }
                
    }
}