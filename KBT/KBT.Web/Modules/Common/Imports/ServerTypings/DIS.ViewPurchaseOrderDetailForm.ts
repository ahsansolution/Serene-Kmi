namespace KBT.DIS {
    export class ViewPurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ViewPurchaseOrderDetail';

    }

    export interface ViewPurchaseOrderDetailForm {
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

    [['PurchaseOrderDetailId', () => Serenity.IntegerEditor], ['PurchaseOrderId', () => Serenity.IntegerEditor], ['ProductId', () => Serenity.IntegerEditor], ['Quantity', () => Serenity.IntegerEditor], ['Price', () => Serenity.DecimalEditor], ['Ppn', () => Serenity.DecimalEditor], ['Total', () => Serenity.DecimalEditor], ['ProductPriceId', () => Serenity.IntegerEditor], ['ProductName', () => Serenity.StringEditor], ['ProductNumber', () => Serenity.StringEditor], ['PartNumber', () => Serenity.StringEditor], ['ProductCategoryId', () => Serenity.IntegerEditor], ['ProductTypeId', () => Serenity.IntegerEditor], ['Discontinued', () => Serenity.BooleanEditor], ['ProductImage', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['BinLocation', () => Serenity.StringEditor], ['Merek', () => Serenity.StringEditor], ['PoliceNumber', () => Serenity.StringEditor], ['MachineNo', () => Serenity.StringEditor], ['SerialNumber', () => Serenity.StringEditor], ['Color', () => Serenity.StringEditor], ['ManufactureYear', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ViewPurchaseOrderDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

