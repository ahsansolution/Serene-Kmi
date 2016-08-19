declare namespace KBT.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace KBT.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace KBT.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace KBT.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace KBT.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace KBT.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace KBT.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
        protected getLanguages(): string[][];
    }
}
declare namespace KBT.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter(ctx);
        private stringInputFormatter(ctx);
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter(ctx, idField, lookup);
        private getEffectiveValue(item, field);
        protected getColumns(): Slick.Column[];
        private inputsChange(e);
        private setSaveButtonState();
        private saveClick();
    }
}
declare namespace KBT.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace KBT.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace KBT.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        private nextId;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace KBT.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace KBT.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace KBT.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace KBT.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace KBT.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        set_shippingState(value: number): void;
    }
}
declare namespace KBT.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace KBT.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace KBT.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace KBT.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace KBT.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<CustomerRow, any> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace KBT.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace KBT.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace KBT.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace KBT.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace KBT.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace KBT.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ViewPurchaseOrderDetailDialog extends Serenity.EntityDialog<ViewPurchaseOrderDetailRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ViewPurchaseOrderDetailForm;
    }
}
declare namespace KBT.DIS {
    class ViewPurchaseOrderDetailGrid extends Serenity.EntityGrid<ViewPurchaseOrderDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewPurchaseOrderDetailDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ViewPurchaseOrderDialog extends Serenity.EntityDialog<ViewPurchaseOrderRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ViewPurchaseOrderForm;
    }
}
declare namespace KBT.DIS {
    class ViewPurchaseOrderGrid extends Serenity.EntityGrid<ViewPurchaseOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewPurchaseOrderDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ViewProductUnitOrderDialog extends Serenity.EntityDialog<ViewProductUnitOrderRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ViewProductUnitOrderForm;
    }
}
declare namespace KBT.DIS {
    class ViewProductUnitOrderGrid extends Serenity.EntityGrid<ViewProductUnitOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ViewProductUnitOrderDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ViewProductUnitDialog extends Serenity.EntityDialog<ViewProductUnitRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ViewProductUnitForm;
    }
}
declare namespace KBT.DIS {
    class ViewProductUnitGrid extends Serenity.EntityGrid<ViewProductUnitRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getDialogType(): typeof ViewProductUnitDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
        * This method is called to preprocess data returned from the list service
        */
        protected onViewProcessData(response: Serenity.ListResponse<DIS.ViewProductUnitRow>): Serenity.ListResponse<ViewProductUnitRow>;
    }
}
declare namespace KBT.DIS {
    class ViewProductStockDialog extends Serenity.EntityDialog<ViewProductStockRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ViewProductStockForm;
    }
}
declare namespace KBT.DIS {
    class ViewProductStockGrid extends Serenity.EntityGrid<ViewProductStockRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getDialogType(): typeof ViewProductStockDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
        * This method is called to preprocess data returned from the list service
        */
        protected onViewProcessData(response: Serenity.ListResponse<DIS.ViewProductStockRow>): Serenity.ListResponse<ViewProductStockRow>;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class ViewOrdersDialog extends Serenity.EntityDialog<ViewOrdersRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ViewOrdersForm;
    }
}
declare namespace KBT.DIS {
    class ViewOrdersGrid extends Serenity.EntityGrid<ViewOrdersRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getDialogType(): typeof ViewOrdersDialog;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<DIS.ViewOrdersRow>): Serenity.ListResponse<ViewOrdersRow>;
        protected getButtons(): any[];
    }
}
declare namespace KBT.DIS {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
    }
}
declare namespace KBT.DIS {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ServiceUnitDetailDialog extends Serenity.EntityDialog<ServiceUnitDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ServiceUnitDetailForm;
    }
}
declare namespace KBT.DIS {
    class ServiceUnitDetailEditDialog extends Common.GridEditorDialog<ServiceUnitDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ServiceUnitDetailForm;
        productTypeID: any;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace KBT.DIS {
    class ServiceUnitDetailEditor extends Common.GridEditorBase<ServiceUnitDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceUnitDetailEditDialog;
        protected getLocalTextPrefix(): string;
        productTypeID: any;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected validateEntity(row: any, id: any): boolean;
    }
}
declare namespace KBT.DIS {
    class ServiceUnitDetailGrid extends Serenity.EntityGrid<ServiceUnitDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceUnitDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ServiceUnitDialog extends Serenity.EntityDialog<ServiceUnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        custId: any;
        protected form: ServiceUnitForm;
        constructor(container: JQuery);
        protected beforeLoadEntity(entity: any): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace KBT.DIS {
    class ServiceUnitGrid extends Serenity.EntityGrid<ServiceUnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ServiceUnitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        custId: any;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace KBT.DIS {
    class RevenueDialog extends Serenity.EntityDialog<RevenueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RevenueForm;
    }
}
declare namespace KBT.DIS {
    class RevenueGrid extends Serenity.EntityGrid<RevenueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RevenueDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ReceiveOrderDetailDialog extends Serenity.EntityDialog<ReceiveOrderDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ReceiveOrderDetailForm;
    }
}
declare namespace KBT.DIS {
    class ReceiveOrderDetailEditor extends Common.GridEditorBase<ReceiveOrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceiveOrderDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        private inputsChange(e);
        private setSaveButtonState();
        protected onViewProcessData(response: any): Serenity.ListResponse<ReceiveOrderDetailRow>;
        private getEffectiveValue(item, field);
        private saveClick();
        protected createSlickGrid(): Slick.Grid;
        private numericInputFormatter(ctx);
        private stringInputFormatter(ctx);
        private sourceLanguage;
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace KBT.DIS {
    class ReceiveOrderDetailGrid extends Serenity.EntityGrid<ReceiveOrderDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceiveOrderDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        private inputsChange(e);
        private setSaveButtonState();
        protected onViewProcessData(response: any): Serenity.ListResponse<ReceiveOrderDetailRow>;
        private getEffectiveValue(item, field);
        private saveClick();
        protected createSlickGrid(): Slick.Grid;
        private numericInputFormatter(ctx);
        private stringInputFormatter(ctx);
        private sourceLanguage;
        protected createToolbarExtensions(): void;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace KBT.DIS {
    class ReceiveOrderDialog extends Serenity.EntityDialog<ReceiveOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ReceiveOrderForm;
        constructor();
    }
}
declare namespace KBT.DIS {
    class ReceiveOrderGrid extends Serenity.EntityGrid<ReceiveOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceiveOrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderDetailDialog extends Serenity.EntityDialog<PurchaseOrderDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PurchaseOrderDetailForm;
        orderCategoryId: any;
        protected beforeLoadEntity(entity: any): void;
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderDetailEditor extends Common.GridEditorBase<PurchaseOrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDetailEditDialog;
        protected getLocalTextPrefix(): string;
        orderCategoryId: any;
        productTypeId: any;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected validateEntity(row: any, id: any): boolean;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderDetailGrid extends Serenity.EntityGrid<PurchaseOrderDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderDetailEditDialog extends Common.GridEditorDialog<PurchaseOrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchaseOrderDetailForm;
        orderCategoryId: any;
        productTypeId: any;
        constructor();
        afterLoadEntity(): void;
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchaseOrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderGrid extends Serenity.EntityGrid<PurchaseOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class ProductTypeDialog extends Serenity.EntityDialog<ProductTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductTypeForm;
    }
}
declare namespace KBT.DIS {
    class ProductTypeGrid extends Serenity.EntityGrid<ProductTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ProductAlternativeEditor extends Common.GridEditorBase<ProductAlternativeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductAlternativeEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: any, id: any): boolean;
    }
}
declare namespace KBT.DIS {
    class ProductExcelImportBulkAction extends Common.ImportExcelServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace KBT.DIS {
    class ProductLookupEditor extends Serenity.LookupEditorBase<ProductsRow, any> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace KBT.DIS {
    class ProductNumberLookupEditor extends Serenity.LookupEditorBase<ProductsRow, any> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace KBT.DIS {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductsForm;
        constructor();
        updateInterface(): void;
        afterLoadEntity(): void;
    }
}
declare namespace KBT.DIS {
    class ProductsExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace KBT.DIS {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class ProductPriceDialog extends Serenity.EntityDialog<ProductPriceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProductPriceForm;
    }
}
declare namespace KBT.DIS {
    class ProductPriceGrid extends Serenity.EntityGrid<ProductPriceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductPriceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class ProductCategoryDialog extends Serenity.EntityDialog<ProductCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductCategoryForm;
    }
}
declare namespace KBT.DIS {
    class ProductCategoryGrid extends Serenity.EntityGrid<ProductCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class ProductBasePriceDialog extends Serenity.EntityDialog<ProductBasePriceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProductBasePriceForm;
    }
}
declare namespace KBT.DIS {
    class ProductBasePriceGrid extends Serenity.EntityGrid<ProductBasePriceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductBasePriceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class ProductAlternativeDialog extends Serenity.EntityDialog<ProductAlternativeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProductAlternativeForm;
    }
}
declare namespace KBT.DIS {
    class ProductAlternativeEditDialog extends Common.GridEditorDialog<ProductAlternativeRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProductAlternativeForm;
        orderCategoryId: any;
        constructor();
    }
}
declare namespace KBT.DIS {
    class ProductAlternativeGrid extends Serenity.EntityGrid<ProductAlternativeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductAlternativeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class OrderDetailEditDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        productTypeID: any;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace KBT.DIS {
    class OrderDetailEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailEditDialog;
        protected getLocalTextPrefix(): string;
        productTypeID: any;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected validateEntity(row: any, id: any): boolean;
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace KBT.DIS {
    class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: OrdersForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrdersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class OrderDetailDialog extends Serenity.EntityDialog<OrderDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: OrderDetailForm;
    }
}
declare namespace KBT.DIS {
    class OrderDetailGrid extends Serenity.EntityGrid<OrderDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class OrderCategoryDialog extends Serenity.EntityDialog<OrderCategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderCategoryForm;
    }
}
declare namespace KBT.DIS {
    class OrderCategoryGrid extends Serenity.EntityGrid<OrderCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderCategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class InventoryDialog extends Serenity.EntityDialog<InventoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: InventoryForm;
    }
}
declare namespace KBT.DIS {
    class InventoryGrid extends Serenity.EntityGrid<InventoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InventoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class CustomerDealerDialog extends Serenity.EntityDialog<CustomerDealerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerDealerForm;
    }
}
declare namespace KBT.DIS {
    class CustomerDealerGrid extends Serenity.EntityGrid<CustomerDealerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDealerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.DIS {
    class CostDialog extends Serenity.EntityDialog<CostRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CostForm;
    }
}
declare namespace KBT.DIS {
    class CostGrid extends Serenity.EntityGrid<CostRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CostDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class CompanyDialog extends Serenity.EntityDialog<CompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CompanyForm;
    }
}
declare namespace KBT.DIS {
    class CompanyGrid extends Serenity.EntityGrid<CompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompanyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace KBT.DIS {
    class OrderStatusEditor extends Serenity.Select2Editor<Object, Object> {
        constructor(hidden: JQuery);
    }
    class OrderCategoryEditor extends Serenity.Select2Editor<Object, Object> {
        constructor(hidden: JQuery);
    }
    class UnitStockEditor extends Serenity.Select2Editor<Object, Object> {
        constructor(hidden: JQuery);
    }
    class ReceiveOrderStatusEditor extends Serenity.Select2Editor<Object, Object> {
        constructor(hidden: JQuery);
    }
}
declare namespace KBT.DIS {
    class StatusFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace KBT.ScriptInitialization {
}
declare namespace KBT.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace KBT.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare namespace KBT.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace KBT.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace KBT.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace KBT.Administration {
}
declare namespace KBT.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace KBT.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace KBT.Administration {
    namespace LanguageService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Administration {
}
declare namespace KBT.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace KBT.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace KBT.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace KBT.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace KBT.Administration {
    namespace RolePermissionService {
        const baseUrl: string;
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace KBT.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace KBT.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace KBT.Administration {
    namespace RoleService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace KBT.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace KBT.Administration {
    namespace TranslationService {
        const baseUrl: string;
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace KBT.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace KBT.Administration {
}
declare namespace KBT.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace KBT.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace KBT.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace KBT.Administration {
    namespace UserPermissionService {
        const baseUrl: string;
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace KBT.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace KBT.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace KBT.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace KBT.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace KBT.Administration {
    namespace UserRoleService {
        const baseUrl: string;
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace KBT.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace KBT.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty: string;
        const isActiveProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace KBT.Administration {
    namespace UserService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl: string;
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const OrdersByShipper: string;
            const OrderBulkAction: string;
        }
    }
}
declare namespace KBT.BasicSamples {
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
}
declare namespace KBT.BasicSamples {
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
}
declare namespace KBT.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace KBT.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace KBT.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace KBT.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace KBT.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace KBT.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace KBT.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace KBT.Common {
    namespace UserPreferenceService {
        const baseUrl: string;
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace KBT.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class CompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.DecimalEditor;
    }
}
declare namespace KBT.DIS {
    interface CompanyRow {
        CompanyId?: number;
        CompanyName?: string;
        Address?: string;
        Fax?: string;
        Logo?: string;
        Phone?: number;
    }
    namespace CompanyRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CompanyRow>;
        namespace Fields {
            const CompanyId: string;
            const CompanyName: string;
            const Address: string;
            const Fax: string;
            const Logo: string;
            const Phone: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace CompanyService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class CostForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CostForm {
        CostName: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        Percentage: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface CostRow {
        CostId?: number;
        CostName?: string;
        Amount?: number;
        Percentage?: number;
    }
    namespace CostRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CostRow>;
        namespace Fields {
            const CostId: string;
            const CostName: string;
            const Amount: string;
            const Percentage: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace CostService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CostRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CostRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CostRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CostRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class CustomerDealerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerDealerForm {
        CustomerDealerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface CustomerDealerRow {
        CustomerDealerId?: number;
        CustomerDealerName?: string;
        Address?: string;
    }
    namespace CustomerDealerRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CustomerDealerRow>;
        namespace Fields {
            const CustomerDealerId: string;
            const CustomerDealerName: string;
            const Address: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace CustomerDealerService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerDealerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerDealerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerDealerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerDealerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class InventoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface InventoryForm {
        ProductId: ProductLookupEditor;
        OrderCategoryId: Serenity.LookupEditor;
        Qty: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface InventoryRow {
        InventoryId?: number;
        ProductId?: number;
        OrderCategoryId?: number;
        OrderCategoryOrderCategoryName?: string;
        Qty?: number;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        InventoryStatus?: string;
        DocumentNo?: string;
        EntryDate?: string;
    }
    namespace InventoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<InventoryRow>;
        namespace Fields {
            const InventoryId: string;
            const ProductId: string;
            const OrderCategoryId: string;
            const OrderCategoryOrderCategoryName: string;
            const Qty: string;
            const ProductProductName: string;
            const ProductProductNumber: string;
            const ProductProductCategoryId: string;
            const ProductProductTypeId: string;
            const ProductDiscontinued: string;
            const ProductProductImage: string;
            const ProductDescription: string;
            const ProductBinLocation: string;
            const InventoryStatus: string;
            const DocumentNo: string;
            const EntryDate: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace InventoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<InventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InventoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InventoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class OrderCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderCategoryForm {
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface OrderCategoryRow {
        OrderCategoryId?: number;
        OrderCategoryName?: string;
        Description?: string;
    }
    namespace OrderCategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<OrderCategoryRow>;
        namespace Fields {
            const OrderCategoryId: string;
            const OrderCategoryName: string;
            const Description: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace OrderCategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<OrderCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderDetailForm {
        ProductID: ProductLookupEditor;
        OrderQty: Serenity.IntegerEditor;
        BasePrice: Serenity.DecimalEditor;
        Stock: Serenity.IntegerEditor;
        OrderDetailProductSerialNumber: Serenity.StringEditor;
        OrderDetailProductColor: Serenity.StringEditor;
        OrderDetailProductManufactureYear: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface OrderDetailRow {
        OrderDetailId?: number;
        OrderId?: number;
        ProductID?: number;
        OrderQty?: number;
        ProductPriceId?: number;
        CostId?: number;
        OrderOrderDate?: string;
        OrderCustomerDealerId?: number;
        OrderUserId?: number;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        ProductPriceProductId?: number;
        ProductPriceOrderCategoryId?: number;
        ProductPricePrice?: number;
        ProductPriceIsActive?: boolean;
        ProductPriceEntryDate?: string;
        CostCostName?: string;
        CostAmount?: number;
        CostTotal?: number;
        BasePrice?: number;
        LineTotal?: number;
        CostPercentage?: number;
        KmInUse?: number;
        ServiceQuantity?: number;
        OrderCategoryId?: number;
        OrderCategoryName?: string;
        Stock?: number;
        OrderDetailProductMachineNo?: string;
        OrderDetailProductSerialNumber?: string;
        OrderDetailProductColor?: string;
        OrderDetailProductManufactureYear?: number;
        ServiceUnitDetailId?: number;
    }
    namespace OrderDetailRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const OrderDetailId: string;
            const OrderId: string;
            const ProductID: string;
            const OrderQty: string;
            const ProductPriceId: string;
            const CostId: string;
            const OrderOrderDate: string;
            const OrderCustomerDealerId: string;
            const OrderUserId: string;
            const ProductProductName: string;
            const ProductProductNumber: string;
            const ProductProductCategoryId: string;
            const ProductProductTypeId: string;
            const ProductDiscontinued: string;
            const ProductProductImage: string;
            const ProductDescription: string;
            const ProductBinLocation: string;
            const ProductPriceProductId: string;
            const ProductPriceOrderCategoryId: string;
            const ProductPricePrice: string;
            const ProductPriceIsActive: string;
            const ProductPriceEntryDate: string;
            const CostCostName: string;
            const CostAmount: string;
            const CostTotal: string;
            const BasePrice: string;
            const LineTotal: string;
            const CostPercentage: string;
            const KmInUse: string;
            const ServiceQuantity: string;
            const OrderCategoryId: string;
            const OrderCategoryName: string;
            const Stock: string;
            const OrderDetailProductMachineNo: string;
            const OrderDetailProductSerialNumber: string;
            const OrderDetailProductColor: string;
            const OrderDetailProductManufactureYear: string;
            const ServiceUnitDetailId: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace OrderDetailService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<OrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class OrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrdersForm {
        CustomerDealerId: Serenity.LookupEditor;
        ProductTypeID: Serenity.LookupEditor;
        DetailList: OrderDetailEditor;
    }
}
declare namespace KBT.DIS {
    interface OrdersRow {
        OrderId?: number;
        OrderDate?: string;
        CustomerDealerId?: number;
        UserId?: number;
        ProductTypeID?: number;
        OrderNumber?: string;
        CustomerDealerCustomerDealerName?: string;
        CustomerDealerAddress?: string;
        OrderStatus?: string;
        DetailList?: OrderDetailRow[];
        PaymentService?: number;
        KmInUse?: number;
    }
    namespace OrdersRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<OrdersRow>;
        namespace Fields {
            const OrderId: string;
            const OrderDate: string;
            const CustomerDealerId: string;
            const UserId: string;
            const ProductTypeID: string;
            const OrderNumber: string;
            const CustomerDealerCustomerDealerName: string;
            const CustomerDealerAddress: string;
            const OrderStatus: string;
            const DetailList: string;
            const PaymentService: string;
            const KmInUse: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace OrdersService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ProductAlternativeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductAlternativeForm {
        ProductIdAlt: ProductLookupEditor;
        SeqNo: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface ProductAlternativeRow {
        ProductAlternativeId?: number;
        ProductIdMain?: number;
        ProductIdAlt?: number;
        SeqNo?: number;
        ProductIdAltProductName?: string;
        ProductIdAltProductNumber?: string;
        ProductIdAltPartNumber?: string;
        ProductIdAltProductCategoryId?: number;
        ProductIdAltProductTypeId?: number;
        ProductIdAltDiscontinued?: boolean;
        ProductIdAltProductImage?: string;
        ProductIdAltDescription?: string;
        ProductIdAltBinLocation?: string;
        ProductIdAltMerek?: string;
        ProductIdAltPoliceNumber?: string;
        ProductIdAltMachineNo?: string;
        ProductIdAltSerialNumber?: string;
        ProductIdAltColor?: string;
        ProductIdAltManufactureYear?: number;
    }
    namespace ProductAlternativeRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ProductAlternativeId: string;
            const ProductIdMain: string;
            const ProductIdAlt: string;
            const SeqNo: string;
            const ProductIdAltProductName: string;
            const ProductIdAltProductNumber: string;
            const ProductIdAltPartNumber: string;
            const ProductIdAltProductCategoryId: string;
            const ProductIdAltProductTypeId: string;
            const ProductIdAltDiscontinued: string;
            const ProductIdAltProductImage: string;
            const ProductIdAltDescription: string;
            const ProductIdAltBinLocation: string;
            const ProductIdAltMerek: string;
            const ProductIdAltPoliceNumber: string;
            const ProductIdAltMachineNo: string;
            const ProductIdAltSerialNumber: string;
            const ProductIdAltColor: string;
            const ProductIdAltManufactureYear: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ProductAlternativeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductAlternativeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductAlternativeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductAlternativeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductAlternativeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ProductBasePriceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductBasePriceForm {
        ProductID: ProductLookupEditor;
        Price: Serenity.DecimalEditor;
        EntryDate: Serenity.DateEditor;
        IsActive: Serenity.BooleanEditor;
    }
}
declare namespace KBT.DIS {
    interface ProductBasePriceRow {
        ProductBasePriceId?: number;
        ProductID?: number;
        Price?: number;
        EntryDate?: string;
        IsActive?: boolean;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
    }
    namespace ProductBasePriceRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductBasePriceRow>;
        namespace Fields {
            const ProductBasePriceId: string;
            const ProductID: string;
            const Price: string;
            const EntryDate: string;
            const IsActive: string;
            const ProductProductName: string;
            const ProductProductNumber: string;
            const ProductProductCategoryId: string;
            const ProductProductTypeId: string;
            const ProductDiscontinued: string;
            const ProductProductImage: string;
            const ProductDescription: string;
            const ProductBinLocation: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ProductBasePriceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductBasePriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductBasePriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductBasePriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductBasePriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
    interface ProductBulkActionRequest extends Serenity.ServiceRequest {
        ProductIDs?: number[];
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ProductCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductCategoryForm {
        ProductCategoryName: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface ProductCategoryRow {
        ProductCategoryId?: number;
        ProductCategoryName?: string;
    }
    namespace ProductCategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductCategoryRow>;
        namespace Fields {
            const ProductCategoryId: string;
            const ProductCategoryName: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ProductCategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ProductPriceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductPriceForm {
        ProductId: ProductLookupEditor;
        OrderCategoryId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        IsActive: Serenity.BooleanEditor;
        EntryDate: Serenity.DateEditor;
    }
}
declare namespace KBT.DIS {
    interface ProductPriceRow {
        ProductPriceId?: number;
        ProductId?: number;
        OrderCategoryId?: number;
        Price?: number;
        IsActive?: boolean;
        EntryDate?: string;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        OrderCategoryOrderCategoryName?: string;
        OrderCategoryDescription?: string;
    }
    namespace ProductPriceRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductPriceRow>;
        namespace Fields {
            const ProductPriceId: string;
            const ProductId: string;
            const OrderCategoryId: string;
            const Price: string;
            const IsActive: string;
            const EntryDate: string;
            const ProductProductName: string;
            const ProductProductNumber: string;
            const ProductProductCategoryId: string;
            const ProductProductTypeId: string;
            const ProductDiscontinued: string;
            const ProductProductImage: string;
            const ProductDescription: string;
            const ProductBinLocation: string;
            const OrderCategoryOrderCategoryName: string;
            const OrderCategoryDescription: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ProductPriceService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductPriceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductPriceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ProductsExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductsExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
}
declare namespace KBT.DIS {
    class ProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductsForm {
        ProductTypeId: Serenity.LookupEditor;
        Discontinued: Serenity.BooleanEditor;
        UnitStock: UnitStockEditor;
        PartNumber: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
        ProductAltList: ProductAlternativeEditor;
    }
}
declare namespace KBT.DIS {
    interface ProductsRow {
        ProductID?: number;
        ProductName?: string;
        ProductNumber?: string;
        ProductCategoryId?: number;
        ProductTypeId?: number;
        Discontinued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        ProductCategoryProductCategoryName?: string;
        ProductTypeProductTypeName?: string;
        Merek?: string;
        PoliceNumber?: string;
        MachineNo?: string;
        SerialNumber?: string;
        PartNumber?: string;
        Color?: string;
        UnitStock?: string;
        ManufactureYear?: number;
        ProductAltList?: ProductAlternativeRow[];
    }
    namespace ProductsRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductsRow>;
        namespace Fields {
            const ProductID: string;
            const ProductName: string;
            const ProductNumber: string;
            const ProductCategoryId: string;
            const ProductTypeId: string;
            const Discontinued: string;
            const ProductImage: string;
            const Description: string;
            const BinLocation: string;
            const ProductCategoryProductCategoryName: string;
            const ProductTypeProductTypeName: string;
            const Merek: string;
            const PoliceNumber: string;
            const MachineNo: string;
            const SerialNumber: string;
            const PartNumber: string;
            const Color: string;
            const UnitStock: string;
            const ManufactureYear: string;
            const ProductAltList: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ProductsService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ProductBulkAction(request: ProductBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
            const ProductBulkAction: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ProductTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductTypeForm {
        ProductTypeName: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface ProductTypeRow {
        ProductTypeId?: number;
        ProductTypeName?: string;
    }
    namespace ProductTypeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductTypeRow>;
        namespace Fields {
            const ProductTypeId: string;
            const ProductTypeName: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ProductTypeService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class PurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PurchaseOrderDetailForm {
        ProductId: ProductLookupEditor;
        Quantity: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        ProductPriceId: Serenity.IntegerEditor;
        ProductSerialNumber: Serenity.StringEditor;
        ProductColor: Serenity.StringEditor;
        ProductManufactureYear: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface PurchaseOrderDetailRow {
        PurchaseOrderDetailId?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        ProductPriceId?: number;
        Price?: number;
        LineTotal?: number;
        CostTotal?: number;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderCostId?: number;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderPurchaseOrderStatus?: string;
        ProductProductName?: string;
        ProductSerialNumber?: string;
        ProductColor?: string;
        ProductManufactureYear?: string;
        ProductProductNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
    }
    namespace PurchaseOrderDetailRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PurchaseOrderDetailRow>;
        namespace Fields {
            const PurchaseOrderDetailId: string;
            const PurchaseOrderId: string;
            const ProductId: string;
            const Quantity: string;
            const ProductPriceId: string;
            const Price: string;
            const LineTotal: string;
            const CostTotal: string;
            const PurchaseOrderPurchaseOrderNumber: string;
            const PurchaseOrderCompanyId: string;
            const PurchaseOrderPurchaseOrderDate: string;
            const PurchaseOrderCostId: string;
            const PurchaseOrderOrderCategoryId: string;
            const PurchaseOrderPurchaseOrderStatus: string;
            const ProductProductName: string;
            const ProductSerialNumber: string;
            const ProductColor: string;
            const ProductManufactureYear: string;
            const ProductProductNumber: string;
            const ProductProductCategoryId: string;
            const ProductProductTypeId: string;
            const ProductDiscontinued: string;
            const ProductProductImage: string;
            const ProductDescription: string;
            const ProductBinLocation: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace PurchaseOrderDetailService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
    class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PurchaseOrderForm {
        PurchaseOrderNumber: Serenity.StringEditor;
        PurchaseOrderDate: Serenity.DateEditor;
        OrderCategoryId: Serenity.LookupEditor;
        ProductTypeId: Serenity.LookupEditor;
        DetailList: PurchaseOrderDetailEditor;
    }
}
declare namespace KBT.DIS {
    interface PurchaseOrderRow {
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        CompanyId?: number;
        PurchaseOrderDate?: string;
        CostId?: number;
        OrderCategoryId?: number;
        PurchaseOrderOrderCategoryName?: string;
        PurchaseOrderStatus?: string;
        CostCostName?: string;
        CostAmount?: number;
        CostPercentage?: number;
        ProductTypeId?: number;
        ProductTypeName?: string;
        DetailList?: PurchaseOrderDetailRow[];
    }
    namespace PurchaseOrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<PurchaseOrderRow>;
        namespace Fields {
            const PurchaseOrderId: string;
            const PurchaseOrderNumber: string;
            const CompanyId: string;
            const PurchaseOrderDate: string;
            const CostId: string;
            const OrderCategoryId: string;
            const PurchaseOrderOrderCategoryName: string;
            const PurchaseOrderStatus: string;
            const CostCostName: string;
            const CostAmount: string;
            const CostPercentage: string;
            const ProductTypeId: string;
            const ProductTypeName: string;
            const DetailList: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace PurchaseOrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ReceiveOrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReceiveOrderDetailForm {
        ReceiveOrderId: Serenity.IntegerEditor;
        ProductId: ProductLookupEditor;
        POQty: Serenity.IntegerEditor;
        BackOrderQty: Serenity.IntegerEditor;
        Price: Serenity.StringEditor;
        BinLocation: Serenity.StringEditor;
        ReceiveComplete: Serenity.BooleanEditor;
    }
}
declare namespace KBT.DIS {
    interface ReceiveOrderDetailRow {
        ReceiveOrderDetailId?: number;
        ReceiveOrderId?: number;
        ProductId?: number;
        ReceiveQty?: number;
        BackOrderQty?: number;
        POQty?: number;
        Price?: number;
        ProductName?: string;
        BinLocation?: string;
        ReceiveComplete?: boolean;
        ReceiveOrderNumber?: string;
        ReceiveOrderPurchaseOrderId?: number;
        ReceiveOrderReceiveDate?: string;
        ReceiveOrderReceiveBy?: string;
        ReceiveOrderAcknowledgeBy?: string;
        ReceiveOrderReceiveOrderStatus?: string;
    }
    namespace ReceiveOrderDetailRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReceiveOrderDetailRow>;
        namespace Fields {
            const ReceiveOrderDetailId: string;
            const ReceiveOrderId: string;
            const ProductId: string;
            const ReceiveQty: string;
            const BackOrderQty: string;
            const POQty: string;
            const Price: string;
            const ProductName: string;
            const BinLocation: string;
            const ReceiveComplete: string;
            const ReceiveOrderNumber: string;
            const ReceiveOrderPurchaseOrderId: string;
            const ReceiveOrderReceiveDate: string;
            const ReceiveOrderReceiveBy: string;
            const ReceiveOrderAcknowledgeBy: string;
            const ReceiveOrderReceiveOrderStatus: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ReceiveOrderDetailService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReceiveOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReceiveOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiveOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiveOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
    class ReceiveOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ReceiveOrderForm {
        ReceiveOrderNumber: Serenity.StringEditor;
        ReceiveDate: Serenity.DateEditor;
        ReceiveBy: Serenity.StringEditor;
        AcknowledgeBy: Serenity.StringEditor;
        DetailList: ReceiveOrderDetailEditor;
    }
}
declare namespace KBT.DIS {
    interface ReceiveOrderRow {
        ReceiveOrderId?: number;
        ReceiveOrderNumber?: string;
        PurchaseOrderId?: number;
        ReceiveDate?: string;
        ReceiveBy?: string;
        AcknowledgeBy?: string;
        ReceiveOrderStatus?: string;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderCostId?: number;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderPurchaseOrderStatus?: string;
        DetailList?: ReceiveOrderDetailRow[];
    }
    namespace ReceiveOrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ReceiveOrderRow>;
        namespace Fields {
            const ReceiveOrderId: string;
            const ReceiveOrderNumber: string;
            const PurchaseOrderId: string;
            const ReceiveDate: string;
            const ReceiveBy: string;
            const AcknowledgeBy: string;
            const ReceiveOrderStatus: string;
            const PurchaseOrderPurchaseOrderNumber: string;
            const PurchaseOrderCompanyId: string;
            const PurchaseOrderPurchaseOrderDate: string;
            const PurchaseOrderCostId: string;
            const PurchaseOrderOrderCategoryId: string;
            const PurchaseOrderPurchaseOrderStatus: string;
            const DetailList: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ReceiveOrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ReceiveOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReceiveOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiveOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiveOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class RevenueForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RevenueForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        OrderId: Serenity.IntegerEditor;
        Credit: Serenity.DecimalEditor;
        Debit: Serenity.DecimalEditor;
        EntryDate: Serenity.DateEditor;
        DocumentNo: Serenity.StringEditor;
        CancelationStatus: Serenity.BooleanEditor;
    }
}
declare namespace KBT.DIS {
    interface RevenueRow {
        RevenueId?: number;
        PurchaseOrderId?: number;
        OrderId?: number;
        Credit?: number;
        Debit?: number;
        EntryDate?: string;
        DocumentNo?: string;
        CancelationStatus?: boolean;
        PurchaseOrderPurchaseOrderNumber?: string;
        PurchaseOrderCompanyId?: number;
        PurchaseOrderPurchaseOrderDate?: string;
        PurchaseOrderCostId?: number;
        PurchaseOrderOrderCategoryId?: number;
        PurchaseOrderPurchaseOrderStatus?: string;
        OrderOrderNumber?: string;
        OrderOrderDate?: string;
        OrderCustomerDealerId?: number;
        OrderUserId?: number;
        OrderProductTypeId?: number;
        OrderPaymentService?: number;
    }
    namespace RevenueRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RevenueId: string;
            const PurchaseOrderId: string;
            const OrderId: string;
            const Credit: string;
            const Debit: string;
            const EntryDate: string;
            const DocumentNo: string;
            const CancelationStatus: string;
            const PurchaseOrderPurchaseOrderNumber: string;
            const PurchaseOrderCompanyId: string;
            const PurchaseOrderPurchaseOrderDate: string;
            const PurchaseOrderCostId: string;
            const PurchaseOrderOrderCategoryId: string;
            const PurchaseOrderPurchaseOrderStatus: string;
            const OrderOrderNumber: string;
            const OrderOrderDate: string;
            const OrderCustomerDealerId: string;
            const OrderUserId: string;
            const OrderProductTypeId: string;
            const OrderPaymentService: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace RevenueService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RevenueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RevenueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RevenueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RevenueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ServiceUnitDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ServiceUnitDetailForm {
        ServiceCharge: Serenity.DecimalEditor;
        KmInUse: Serenity.IntegerEditor;
        ServiceDate: Serenity.DateEditor;
        DetailList: OrderDetailEditor;
    }
}
declare namespace KBT.DIS {
    interface ServiceUnitDetailRow {
        ServiceUnitDetailId?: number;
        ServiceUnitId?: number;
        ServiceCharge?: number;
        KmInUse?: number;
        ServiceDate?: string;
        ServiceUnitProductId?: number;
        ServiceUnitCustomerDealerId?: number;
        ServiceUnitOrderUnitId?: number;
        OrderIDService?: number;
        DetailList?: OrderDetailRow[];
    }
    namespace ServiceUnitDetailRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ServiceUnitDetailId: string;
            const ServiceUnitId: string;
            const ServiceCharge: string;
            const KmInUse: string;
            const ServiceDate: string;
            const ServiceUnitProductId: string;
            const ServiceUnitCustomerDealerId: string;
            const ServiceUnitOrderUnitId: string;
            const OrderIDService: string;
            const DetailList: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ServiceUnitDetailService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ServiceUnitDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ServiceUnitDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceUnitDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceUnitDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
    class ServiceUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ServiceUnitForm {
        DetailList: ServiceUnitDetailEditor;
    }
}
declare namespace KBT.DIS {
    interface ServiceUnitRow {
        ServiceUnitId?: number;
        ProductId?: number;
        CustomerDealerId?: number;
        OrderUnitId?: number;
        ProductProductName?: string;
        ProductProductNumber?: string;
        ProductPartNumber?: string;
        ProductProductCategoryId?: number;
        ProductProductTypeId?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductDescription?: string;
        ProductBinLocation?: string;
        ProductMerek?: string;
        ProductPoliceNumber?: string;
        ProductMachineNo?: string;
        ProductSerialNumber?: string;
        ProductColor?: string;
        ProductManufactureYear?: number;
        CustomerDealerCustomerDealerName?: string;
        CustomerDealerAddress?: string;
        OrderUnitOrderNumber?: string;
        OrderUnitOrderDate?: string;
        OrderUnitCustomerDealerId?: number;
        OrderUnitUserId?: number;
        OrderUnitProductTypeId?: number;
        OrderUnitKmInUse?: number;
        OrderUnitPaymentService?: number;
        OrderUnitOrderStatus?: string;
        DetailList?: ServiceUnitDetailRow[];
    }
    namespace ServiceUnitRow {
        const idProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ServiceUnitRow>;
        namespace Fields {
            const ServiceUnitId: string;
            const ProductId: string;
            const CustomerDealerId: string;
            const OrderUnitId: string;
            const ProductProductName: string;
            const ProductProductNumber: string;
            const ProductPartNumber: string;
            const ProductProductCategoryId: string;
            const ProductProductTypeId: string;
            const ProductDiscontinued: string;
            const ProductProductImage: string;
            const ProductDescription: string;
            const ProductBinLocation: string;
            const ProductMerek: string;
            const ProductPoliceNumber: string;
            const ProductMachineNo: string;
            const ProductSerialNumber: string;
            const ProductColor: string;
            const ProductManufactureYear: string;
            const CustomerDealerCustomerDealerName: string;
            const CustomerDealerAddress: string;
            const OrderUnitOrderNumber: string;
            const OrderUnitOrderDate: string;
            const OrderUnitCustomerDealerId: string;
            const OrderUnitUserId: string;
            const OrderUnitProductTypeId: string;
            const OrderUnitKmInUse: string;
            const OrderUnitPaymentService: string;
            const OrderUnitOrderStatus: string;
            const DetailList: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ServiceUnitService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ServiceUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ServiceUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ServiceUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ServiceUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierForm {
        SupplierName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface SupplierRow {
        SupplierId?: number;
        SupplierName?: string;
        Address?: string;
        Phone?: string;
        ContactName?: string;
    }
    namespace SupplierRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const SupplierId: string;
            const SupplierName: string;
            const Address: string;
            const Phone: string;
            const ContactName: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace SupplierService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ViewOrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ViewOrdersForm {
        OrderId: Serenity.IntegerEditor;
        OrderNumber: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        CustomerDealerId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        ProductTypeId: Serenity.IntegerEditor;
        KmInUse: Serenity.IntegerEditor;
        PaymentService: Serenity.DecimalEditor;
        OrderStatus: Serenity.StringEditor;
        OrderDetailId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        OrderQty: Serenity.IntegerEditor;
        ProductPriceId: Serenity.IntegerEditor;
        CostId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        BasePrice: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Ppn: Serenity.DecimalEditor;
        ServiceQuantity: Serenity.IntegerEditor;
        ServiceUnitDetailId: Serenity.IntegerEditor;
        CustomerDealerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        ProductTypeName: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ProductNumber: Serenity.StringEditor;
        PartNumber: Serenity.StringEditor;
        ProductCategoryId: Serenity.IntegerEditor;
        Discontinued: Serenity.BooleanEditor;
        ProductImage: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        BinLocation: Serenity.StringEditor;
        Merek: Serenity.StringEditor;
        PoliceNumber: Serenity.StringEditor;
        MachineNo: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
        ServiceUnitId: Serenity.IntegerEditor;
        ServiceCharge: Serenity.DecimalEditor;
        ServiceDate: Serenity.DateEditor;
        OrderIdService: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface ViewOrdersRow {
        OrderId?: number;
        OrderNumber?: string;
        OrderDate?: string;
        CustomerDealerId?: number;
        UserId?: number;
        ProductTypeId?: number;
        KmInUse?: number;
        PaymentService?: number;
        OrderStatus?: string;
        OrderDetailId?: number;
        ProductId?: number;
        OrderQty?: number;
        ProductPriceId?: number;
        CostId?: number;
        OrderCategoryId?: number;
        BasePrice?: number;
        Total?: number;
        Ppn?: number;
        ServiceQuantity?: number;
        ServiceUnitDetailId?: number;
        CustomerDealerName?: string;
        Address?: string;
        ProductTypeName?: string;
        ProductName?: string;
        ProductNumber?: string;
        PartNumber?: string;
        ProductCategoryId?: number;
        Discontinued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        Merek?: string;
        PoliceNumber?: string;
        MachineNo?: string;
        SerialNumber?: string;
        Color?: string;
        ManufactureYear?: number;
        ServiceUnitId?: number;
        ServiceCharge?: number;
        ServiceDate?: string;
        OrderIdService?: number;
    }
    namespace ViewOrdersRow {
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const OrderId: string;
            const OrderNumber: string;
            const OrderDate: string;
            const CustomerDealerId: string;
            const UserId: string;
            const ProductTypeId: string;
            const KmInUse: string;
            const PaymentService: string;
            const OrderStatus: string;
            const OrderDetailId: string;
            const ProductId: string;
            const OrderQty: string;
            const ProductPriceId: string;
            const CostId: string;
            const OrderCategoryId: string;
            const BasePrice: string;
            const Total: string;
            const Ppn: string;
            const ServiceQuantity: string;
            const ServiceUnitDetailId: string;
            const CustomerDealerName: string;
            const Address: string;
            const ProductTypeName: string;
            const ProductName: string;
            const ProductNumber: string;
            const PartNumber: string;
            const ProductCategoryId: string;
            const Discontinued: string;
            const ProductImage: string;
            const Description: string;
            const BinLocation: string;
            const Merek: string;
            const PoliceNumber: string;
            const MachineNo: string;
            const SerialNumber: string;
            const Color: string;
            const ManufactureYear: string;
            const ServiceUnitId: string;
            const ServiceCharge: string;
            const ServiceDate: string;
            const OrderIdService: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ViewOrdersService {
        const baseUrl: string;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ViewProductStockForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ViewProductStockForm {
        ProductId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
        ProductNumber: Serenity.StringEditor;
        ProductTypeName: Serenity.StringEditor;
        TotalIn: Serenity.IntegerEditor;
        TotalOut: Serenity.IntegerEditor;
        Stock: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface ViewProductStockRow {
        ProductId?: number;
        ProductName?: string;
        ProductNumber?: string;
        ProductTypeName?: string;
        TotalIn?: number;
        TotalOut?: number;
        Stock?: number;
        ProductTypeId?: number;
        ProductTypeNameDesc?: string;
    }
    namespace ViewProductStockRow {
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ViewProductStockRow>;
        namespace Fields {
            const ProductId: string;
            const ProductName: string;
            const ProductNumber: string;
            const ProductTypeName: string;
            const TotalIn: string;
            const TotalOut: string;
            const Stock: string;
            const ProductTypeId: string;
            const ProductTypeNameDesc: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ViewProductStockService {
        const baseUrl: string;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewProductStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewProductStockRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ViewProductUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ViewProductUnitForm {
        OrderNumber: Serenity.StringEditor;
        CustomerDealerName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
        Color: Serenity.StringEditor;
        OrderId: Serenity.IntegerEditor;
        OrderDate: Serenity.DateEditor;
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ViewProductUnitOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ViewProductUnitOrderForm {
        OrderDetailId: Serenity.IntegerEditor;
        OrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        OrderQty: Serenity.IntegerEditor;
        ProductPriceId: Serenity.IntegerEditor;
        CostId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        BasePrice: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        Ppn: Serenity.DecimalEditor;
        KmInUse: Serenity.IntegerEditor;
        ServiceQuantity: Serenity.IntegerEditor;
        OrderNumber: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        CustomerDealerId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        ProductTypeId: Serenity.IntegerEditor;
        ProductUnitId: Serenity.IntegerEditor;
        OrderProductSerialNumber: Serenity.StringEditor;
        OrderProductColor: Serenity.StringEditor;
        OrderProductManufactureYear: Serenity.IntegerEditor;
        PaymentService: Serenity.DecimalEditor;
        OrderStatus: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ProductNumber: Serenity.StringEditor;
        PartNumber: Serenity.StringEditor;
        ProductCategoryId: Serenity.IntegerEditor;
        Discontinued: Serenity.BooleanEditor;
        ProductImage: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        BinLocation: Serenity.StringEditor;
        Merek: Serenity.StringEditor;
        PoliceNumber: Serenity.StringEditor;
        MachineNo: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
        ProductTypeName: Serenity.StringEditor;
    }
}
declare namespace KBT.DIS {
    interface ViewProductUnitOrderRow {
        OrderDetailId?: number;
        OrderId?: number;
        ProductId?: number;
        OrderQty?: number;
        ProductPriceId?: number;
        CostId?: number;
        OrderCategoryId?: number;
        BasePrice?: number;
        Total?: number;
        Ppn?: number;
        KmInUse?: number;
        ServiceQuantity?: number;
        OrderNumber?: string;
        OrderDate?: string;
        CustomerDealerId?: number;
        UserId?: number;
        ProductTypeId?: number;
        ProductUnitId?: number;
        OrderProductSerialNumber?: string;
        OrderProductColor?: string;
        OrderProductManufactureYear?: number;
        PaymentService?: number;
        OrderStatus?: string;
        ProductName?: string;
        ProductNumber?: string;
        ProductNumberName?: string;
        PartNumber?: string;
        ProductCategoryId?: number;
        Discontinued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        Merek?: string;
        PoliceNumber?: string;
        MachineNo?: string;
        SerialNumber?: string;
        Color?: string;
        ManufactureYear?: number;
        ProductTypeName?: string;
    }
    namespace ViewProductUnitOrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ViewProductUnitOrderRow>;
        namespace Fields {
            const OrderDetailId: string;
            const OrderId: string;
            const ProductId: string;
            const OrderQty: string;
            const ProductPriceId: string;
            const CostId: string;
            const OrderCategoryId: string;
            const BasePrice: string;
            const Total: string;
            const Ppn: string;
            const KmInUse: string;
            const ServiceQuantity: string;
            const OrderNumber: string;
            const OrderDate: string;
            const CustomerDealerId: string;
            const UserId: string;
            const ProductTypeId: string;
            const ProductUnitId: string;
            const OrderProductSerialNumber: string;
            const OrderProductColor: string;
            const OrderProductManufactureYear: string;
            const PaymentService: string;
            const OrderStatus: string;
            const ProductName: string;
            const ProductNumber: string;
            const ProductNumberName: string;
            const PartNumber: string;
            const ProductCategoryId: string;
            const Discontinued: string;
            const ProductImage: string;
            const Description: string;
            const BinLocation: string;
            const Merek: string;
            const PoliceNumber: string;
            const MachineNo: string;
            const SerialNumber: string;
            const Color: string;
            const ManufactureYear: string;
            const ProductTypeName: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ViewProductUnitOrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ViewProductUnitOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewProductUnitOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewProductUnitOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewProductUnitOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
    interface ViewProductUnitRow {
        OrderNumber?: string;
        CustomerDealerName?: string;
        Address?: string;
        ProductName?: string;
        SerialNumber?: string;
        ManufactureYear?: number;
        Color?: string;
        OrderId?: number;
        OrderDetailId?: number;
        OrderDate?: string;
    }
    namespace ViewProductUnitRow {
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const OrderNumber: string;
            const CustomerDealerName: string;
            const Address: string;
            const ProductName: string;
            const SerialNumber: string;
            const ManufactureYear: string;
            const Color: string;
            const OrderId: string;
            const OrderDetailId: string;
            const OrderDate: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ViewProductUnitService {
        const baseUrl: string;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewProductUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewProductUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
}
declare namespace KBT.DIS {
    class ViewPurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ViewPurchaseOrderDetailForm {
        PurchaseOrderDetailId: Serenity.IntegerEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Quantity: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Ppn: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        ProductPriceId: Serenity.IntegerEditor;
        ProductName: Serenity.StringEditor;
        ProductNumber: Serenity.StringEditor;
        PartNumber: Serenity.StringEditor;
        ProductCategoryId: Serenity.IntegerEditor;
        ProductTypeId: Serenity.IntegerEditor;
        Discontinued: Serenity.BooleanEditor;
        ProductImage: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        BinLocation: Serenity.StringEditor;
        Merek: Serenity.StringEditor;
        PoliceNumber: Serenity.StringEditor;
        MachineNo: Serenity.StringEditor;
        SerialNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        ManufactureYear: Serenity.IntegerEditor;
    }
}
declare namespace KBT.DIS {
    interface ViewPurchaseOrderDetailRow {
        PurchaseOrderDetailId?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Quantity?: number;
        Price?: number;
        Ppn?: number;
        Total?: number;
        ProductPriceId?: number;
        ProductName?: string;
        ProductNumber?: string;
        PartNumber?: string;
        ProductCategoryId?: number;
        ProductTypeId?: number;
        Discontinued?: boolean;
        ProductImage?: string;
        Description?: string;
        BinLocation?: string;
        Merek?: string;
        PoliceNumber?: string;
        MachineNo?: string;
        SerialNumber?: string;
        Color?: string;
        ManufactureYear?: number;
    }
    namespace ViewPurchaseOrderDetailRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const PurchaseOrderDetailId: string;
            const PurchaseOrderId: string;
            const ProductId: string;
            const Quantity: string;
            const Price: string;
            const Ppn: string;
            const Total: string;
            const ProductPriceId: string;
            const ProductName: string;
            const ProductNumber: string;
            const PartNumber: string;
            const ProductCategoryId: string;
            const ProductTypeId: string;
            const Discontinued: string;
            const ProductImage: string;
            const Description: string;
            const BinLocation: string;
            const Merek: string;
            const PoliceNumber: string;
            const MachineNo: string;
            const SerialNumber: string;
            const Color: string;
            const ManufactureYear: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ViewPurchaseOrderDetailService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ViewPurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewPurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewPurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewPurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.DIS {
    class ViewPurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ViewPurchaseOrderForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        PurchaseOrderNumber: Serenity.StringEditor;
        CompanyId: Serenity.IntegerEditor;
        PurchaseOrderDate: Serenity.DateEditor;
        CostId: Serenity.IntegerEditor;
        OrderCategoryId: Serenity.IntegerEditor;
        PurchaseOrderStatus: Serenity.StringEditor;
        OrderCategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.DecimalEditor;
    }
}
declare namespace KBT.DIS {
    interface ViewPurchaseOrderRow {
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        CompanyId?: number;
        PurchaseOrderDate?: string;
        CostId?: number;
        OrderCategoryId?: number;
        PurchaseOrderStatus?: string;
        OrderCategoryName?: string;
        Description?: string;
        CompanyName?: string;
        Address?: string;
        Fax?: string;
        Logo?: string;
        Phone?: number;
    }
    namespace ViewPurchaseOrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const PurchaseOrderId: string;
            const PurchaseOrderNumber: string;
            const CompanyId: string;
            const PurchaseOrderDate: string;
            const CostId: string;
            const OrderCategoryId: string;
            const PurchaseOrderStatus: string;
            const OrderCategoryName: string;
            const Description: string;
            const CompanyName: string;
            const Address: string;
            const Fax: string;
            const Logo: string;
            const Phone: string;
        }
    }
}
declare namespace KBT.DIS {
    namespace ViewPurchaseOrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ViewPurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewPurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewPurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewPurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace KBT.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace KBT.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace KBT.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace KBT.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace KBT.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace KBT.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace KBT.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace KBT.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace KBT.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
}
declare namespace KBT.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const CategoryId: string;
            const LanguageId: string;
            const CategoryName: string;
            const Description: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace CategoryLangService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CategoryRow>;
        namespace Fields {
            const CategoryID: string;
            const CategoryName: string;
            const Description: string;
            const Picture: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace CategoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const RetrieveLocalization: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CustomerTypeID: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerAddress: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerPostalCode: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const CustomerTypeCustomerDesc: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ID: string;
            const CustomerTypeID: string;
            const CustomerDesc: string;
        }
    }
}
declare namespace KBT.Northwind {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
    }
}
declare namespace KBT.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const RepresentativeId: string;
            const CustomerId: string;
            const EmployeeId: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
    }
    namespace CustomerRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<CustomerRow>;
        namespace Fields {
            const ID: string;
            const CustomerID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const NoteList: string;
            const Representatives: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace CustomerService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<EmployeeRow>;
        namespace Fields {
            const EmployeeID: string;
            const LastName: string;
            const FirstName: string;
            const FullName: string;
            const Title: string;
            const TitleOfCourtesy: string;
            const BirthDate: string;
            const HireDate: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const HomePhone: string;
            const Extension: string;
            const Photo: string;
            const Notes: string;
            const ReportsTo: string;
            const PhotoPath: string;
            const ReportsToFullName: string;
            const ReportsToLastName: string;
            const ReportsToFirstName: string;
            const ReportsToTitle: string;
            const ReportsToTitleOfCourtesy: string;
            const ReportsToBirthDate: string;
            const ReportsToHireDate: string;
            const ReportsToAddress: string;
            const ReportsToCity: string;
            const ReportsToRegion: string;
            const ReportsToPostalCode: string;
            const ReportsToCountry: string;
            const ReportsToHomePhone: string;
            const ReportsToExtension: string;
            const ReportsToPhoto: string;
            const ReportsToNotes: string;
            const ReportsToReportsTo: string;
            const ReportsToPhotoPath: string;
            const Gender: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const EmployeeID: string;
            const TerritoryID: string;
            const EmployeeLastName: string;
            const EmployeeFirstName: string;
            const EmployeeTitle: string;
            const EmployeeTitleOfCourtesy: string;
            const EmployeeBirthDate: string;
            const EmployeeHireDate: string;
            const EmployeeAddress: string;
            const EmployeeCity: string;
            const EmployeeRegion: string;
            const EmployeePostalCode: string;
            const EmployeeCountry: string;
            const EmployeeHomePhone: string;
            const EmployeeExtension: string;
            const EmployeePhoto: string;
            const EmployeeNotes: string;
            const EmployeeReportsTo: string;
            const EmployeePhotoPath: string;
            const TerritoryTerritoryDescription: string;
            const TerritoryRegionID: string;
        }
    }
}
declare namespace KBT.Northwind {
    enum Gender {
        Male = 1,
        Female = 2,
    }
}
declare namespace KBT.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const NoteId: string;
            const EntityType: string;
            const EntityId: string;
            const Text: string;
            const InsertUserId: string;
            const InsertDate: string;
            const InsertUserDisplayName: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
}
declare namespace KBT.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const DetailID: string;
            const OrderID: string;
            const ProductID: string;
            const UnitPrice: string;
            const Quantity: string;
            const Discount: string;
            const OrderCustomerID: string;
            const OrderEmployeeID: string;
            const OrderDate: string;
            const OrderShippedDate: string;
            const OrderShipVia: string;
            const OrderShipCity: string;
            const OrderShipCountry: string;
            const ProductName: string;
            const ProductDiscontinued: string;
            const ProductSupplierID: string;
            const ProductQuantityPerUnit: string;
            const ProductUnitPrice: string;
            const LineTotal: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace OrderDetailService {
        const baseUrl: string;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
}
declare namespace KBT.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<OrderRow>;
        namespace Fields {
            const OrderID: string;
            const CustomerID: string;
            const EmployeeID: string;
            const OrderDate: string;
            const RequiredDate: string;
            const ShippedDate: string;
            const ShipVia: string;
            const Freight: string;
            const ShipName: string;
            const ShipAddress: string;
            const ShipCity: string;
            const ShipRegion: string;
            const ShipPostalCode: string;
            const ShipCountry: string;
            const CustomerCompanyName: string;
            const CustomerContactName: string;
            const CustomerContactTitle: string;
            const CustomerCity: string;
            const CustomerRegion: string;
            const CustomerCountry: string;
            const CustomerPhone: string;
            const CustomerFax: string;
            const EmployeeFullName: string;
            const EmployeeGender: string;
            const ShipViaCompanyName: string;
            const ShipViaPhone: string;
            const ShippingState: string;
            const DetailList: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace OrderService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1,
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
}
declare namespace KBT.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const Id: string;
            const ProductId: string;
            const LanguageId: string;
            const ProductName: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace ProductLangService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const ProductLogID: string;
            const OperationType: string;
            const ChangingUserId: string;
            const ValidFrom: string;
            const ValidUntil: string;
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
        }
    }
}
declare namespace KBT.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ProductRow>;
        namespace Fields {
            const ProductID: string;
            const ProductName: string;
            const ProductImage: string;
            const Discontinued: string;
            const SupplierID: string;
            const CategoryID: string;
            const QuantityPerUnit: string;
            const UnitPrice: string;
            const UnitsInStock: string;
            const UnitsOnOrder: string;
            const ReorderLevel: string;
            const SupplierCompanyName: string;
            const SupplierContactName: string;
            const SupplierContactTitle: string;
            const SupplierAddress: string;
            const SupplierCity: string;
            const SupplierRegion: string;
            const SupplierPostalCode: string;
            const SupplierCountry: string;
            const SupplierPhone: string;
            const SupplierFax: string;
            const SupplierHomePage: string;
            const CategoryName: string;
            const CategoryDescription: string;
            const CategoryPicture: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace ProductService {
        const baseUrl: string;
        function Create(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const RetrieveLocalization: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
}
declare namespace KBT.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<RegionRow>;
        namespace Fields {
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace RegionService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty: string;
        const localTextPrefix: string;
        namespace Fields {
            const CategoryId: string;
            const CategoryName: string;
            const ProductName: string;
            const ProductSales: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace SalesByCategoryService {
        const baseUrl: string;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
}
declare namespace KBT.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<ShipperRow>;
        namespace Fields {
            const ShipperID: string;
            const CompanyName: string;
            const Phone: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace ShipperService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
}
declare namespace KBT.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<SupplierRow>;
        namespace Fields {
            const SupplierID: string;
            const CompanyName: string;
            const ContactName: string;
            const ContactTitle: string;
            const Address: string;
            const City: string;
            const Region: string;
            const PostalCode: string;
            const Country: string;
            const Phone: string;
            const Fax: string;
            const HomePage: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace SupplierService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT.Northwind {
}
declare namespace KBT.Northwind {
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
}
declare namespace KBT.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty: string;
        const nameProperty: string;
        const localTextPrefix: string;
        const lookupKey: string;
        function getLookup(): Q.Lookup<TerritoryRow>;
        namespace Fields {
            const ID: string;
            const TerritoryID: string;
            const TerritoryDescription: string;
            const RegionID: string;
            const RegionDescription: string;
        }
    }
}
declare namespace KBT.Northwind {
    namespace TerritoryService {
        const baseUrl: string;
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace KBT {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace KBT {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace KBT.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace KBT.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace KBT.Common {
    class ImportExcelServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace KBT.LanguageList {
    function getValue(): string[][];
}
declare namespace KBT.Common {
    interface ReportButtonOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
        download?: boolean;
        reportKey: string;
        extension?: string;
        getParams?: () => any;
        target?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
    }
}
declare namespace KBT.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace KBT.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace KBT.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace KBT.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId: any): void;
    }
}
declare namespace KBT.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace KBT.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace KBT.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace KBT.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Adding Responsive attribute makes this dialog use full screen in mobile devices.
     */
    class ResponsiveDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to ResponsiveDialog
     */
    class ResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof ResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Styling for columns is done with CSS in site.basicsamples.less file.
     * When comparing this to MultiColumnDialog sample, you may notice that
     * this version requires much less JS and CSS code.
     */
    class MultiColumnResponsiveDialog extends Northwind.OrderDialog {
        constructor();
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
     */
    class MultiColumnResponsiveGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof MultiColumnResponsiveDialog;
        constructor(container: JQuery);
    }
}
declare namespace KBT.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace KBT.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace KBT.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare var Morris: any;
declare namespace KBT.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace KBT.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace KBT.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace KBT.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        private rolePermissions;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        get_value(): UserPermissionRow[];
        set_value(value: UserPermissionRow[]): void;
        get_rolePermissions(): string[];
        set_rolePermissions(value: string[]): void;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace KBT.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace KBT.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace KBT.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace KBT.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace KBT.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): RSVP.Promise<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace KBT.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace KBT.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace KBT.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace KBT.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace KBT.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
