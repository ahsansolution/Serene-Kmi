namespace KBT.DIS {
    export class ViewProductUnitOrderForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ViewProductUnitOrder';

    }

    export interface ViewProductUnitOrderForm {
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

    [['OrderDetailId', () => Serenity.IntegerEditor], ['OrderId', () => Serenity.IntegerEditor], ['ProductId', () => Serenity.IntegerEditor], ['OrderQty', () => Serenity.IntegerEditor], ['ProductPriceId', () => Serenity.IntegerEditor], ['CostId', () => Serenity.IntegerEditor], ['OrderCategoryId', () => Serenity.IntegerEditor], ['BasePrice', () => Serenity.DecimalEditor], ['Total', () => Serenity.DecimalEditor], ['Ppn', () => Serenity.DecimalEditor], ['KmInUse', () => Serenity.IntegerEditor], ['ServiceQuantity', () => Serenity.IntegerEditor], ['OrderNumber', () => Serenity.StringEditor], ['OrderDate', () => Serenity.DateEditor], ['CustomerDealerId', () => Serenity.IntegerEditor], ['UserId', () => Serenity.IntegerEditor], ['ProductTypeId', () => Serenity.IntegerEditor], ['ProductUnitId', () => Serenity.IntegerEditor], ['OrderProductSerialNumber', () => Serenity.StringEditor], ['OrderProductColor', () => Serenity.StringEditor], ['OrderProductManufactureYear', () => Serenity.IntegerEditor], ['PaymentService', () => Serenity.DecimalEditor], ['OrderStatus', () => Serenity.StringEditor], ['ProductName', () => Serenity.StringEditor], ['ProductNumber', () => Serenity.StringEditor], ['PartNumber', () => Serenity.StringEditor], ['ProductCategoryId', () => Serenity.IntegerEditor], ['Discontinued', () => Serenity.BooleanEditor], ['ProductImage', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['BinLocation', () => Serenity.StringEditor], ['Merek', () => Serenity.StringEditor], ['PoliceNumber', () => Serenity.StringEditor], ['MachineNo', () => Serenity.StringEditor], ['SerialNumber', () => Serenity.StringEditor], ['Color', () => Serenity.StringEditor], ['ManufactureYear', () => Serenity.IntegerEditor], ['ProductTypeName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ViewProductUnitOrderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

