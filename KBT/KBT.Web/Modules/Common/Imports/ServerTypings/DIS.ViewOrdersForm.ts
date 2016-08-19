namespace KBT.DIS {
    export class ViewOrdersForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ViewOrders';

    }

    export interface ViewOrdersForm {
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

    [['OrderId', () => Serenity.IntegerEditor], ['OrderNumber', () => Serenity.StringEditor], ['OrderDate', () => Serenity.DateEditor], ['CustomerDealerId', () => Serenity.IntegerEditor], ['UserId', () => Serenity.IntegerEditor], ['ProductTypeId', () => Serenity.IntegerEditor], ['KmInUse', () => Serenity.IntegerEditor], ['PaymentService', () => Serenity.DecimalEditor], ['OrderStatus', () => Serenity.StringEditor], ['OrderDetailId', () => Serenity.IntegerEditor], ['ProductId', () => Serenity.IntegerEditor], ['OrderQty', () => Serenity.IntegerEditor], ['ProductPriceId', () => Serenity.IntegerEditor], ['CostId', () => Serenity.IntegerEditor], ['OrderCategoryId', () => Serenity.IntegerEditor], ['BasePrice', () => Serenity.DecimalEditor], ['Total', () => Serenity.DecimalEditor], ['Ppn', () => Serenity.DecimalEditor], ['ServiceQuantity', () => Serenity.IntegerEditor], ['ServiceUnitDetailId', () => Serenity.IntegerEditor], ['CustomerDealerName', () => Serenity.StringEditor], ['Address', () => Serenity.StringEditor], ['ProductTypeName', () => Serenity.StringEditor], ['ProductName', () => Serenity.StringEditor], ['ProductNumber', () => Serenity.StringEditor], ['PartNumber', () => Serenity.StringEditor], ['ProductCategoryId', () => Serenity.IntegerEditor], ['Discontinued', () => Serenity.BooleanEditor], ['ProductImage', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['BinLocation', () => Serenity.StringEditor], ['Merek', () => Serenity.StringEditor], ['PoliceNumber', () => Serenity.StringEditor], ['MachineNo', () => Serenity.StringEditor], ['SerialNumber', () => Serenity.StringEditor], ['Color', () => Serenity.StringEditor], ['ManufactureYear', () => Serenity.IntegerEditor], ['ServiceUnitId', () => Serenity.IntegerEditor], ['ServiceCharge', () => Serenity.DecimalEditor], ['ServiceDate', () => Serenity.DateEditor], ['OrderIdService', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ViewOrdersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

