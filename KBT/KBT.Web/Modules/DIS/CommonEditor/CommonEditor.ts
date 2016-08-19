namespace KBT.DIS {

    @Serenity.Decorators.registerEditor()
    export class OrderStatusEditor extends Serenity.Select2Editor<Object, Object> {

        constructor(hidden: JQuery) {
            super(hidden, null);
            super.addItem({ id: "In Progress", source: "In Progress", text: "In Progress", disabled: false });
            super.addItem({ id: "Complete", source: "Complete", text: "Complete", disabled: false });
            super.addItem({ id: "Cancelled", source: "Cancelled", text: "Cancelled", disabled: false });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class OrderCategoryEditor extends Serenity.Select2Editor<Object, Object> {

        constructor(hidden: JQuery) {
            super(hidden, null);
            super.addItem({ id: "EO", source: "EO", text: "EO", disabled: false });
            super.addItem({ id: "MO", source: "MO", text: "MO", disabled: false });
            super.addItem({ id: "PO", source: "PO", text: "PO", disabled: false });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class UnitStockEditor extends Serenity.Select2Editor<Object, Object> {

        constructor(hidden: JQuery) {
            super(hidden, null);
            super.addItem({ id: "DRUM", source: "DRUM", text: "DRUM", disabled: false });
            super.addItem({ id: "LOT", source: "LOT", text: "LOT", disabled: false });
            super.addItem({ id: "PCS", source: "PCS", text: "PCS", disabled: false });
            super.addItem({ id: "UNIT", source: "UNIT", text: "UNIT", disabled: false });
        }

    }

    @Serenity.Decorators.registerEditor()
    export class ReceiveOrderStatusEditor extends Serenity.Select2Editor<Object, Object> {

        constructor(hidden: JQuery) {
            super(hidden, null);
            super.addItem({ id: "In Progress", source: "In Progress", text: "In Progress", disabled: false });
            super.addItem({ id: "Complete", source: "Complete", text: "Complete", disabled: false });
            super.addItem({ id: "Partial Complete", source: "Partial Complete", text: "Partial Complete", disabled: false });
            super.addItem({ id: "Cancelled", source: "Cancelled", text: "Cancelled", disabled: false });
        }
    }
}