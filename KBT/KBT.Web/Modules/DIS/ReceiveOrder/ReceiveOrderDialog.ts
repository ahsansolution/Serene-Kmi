
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ReceiveOrderDialog extends Serenity.EntityDialog<ReceiveOrderRow, any> {
        protected getFormKey() { return ReceiveOrderForm.formKey; }
        protected getIdProperty() { return ReceiveOrderRow.idProperty; }
        protected getLocalTextPrefix() { return ReceiveOrderRow.localTextPrefix; }
        protected getNameProperty() { return ReceiveOrderRow.nameProperty; }
        protected getService() { return ReceiveOrderService.baseUrl; }

        protected form = new ReceiveOrderForm(this.idPrefix);

        constructor() {
            super();
        }

        //loadEntity(entity)
        //{
        //    super.loadEntity(entity);
        //    this.form.PurchaseOrderId.changeSelect2(e => {
        //        //Q.alert(this.form.PurchaseOrderId.value);
        //        var dt = ReceiveOrderDetailRow.getLookup().items.filter(x => x.ReceiveOrderId == 1);
        //        var poDtl = PurchaseOrderDetailRow.getLookup().items.filter(x => x.PurchaseOrderId == +this.form.PurchaseOrderId.value);
        //        let list: ReceiveOrderDetailRow[] = [poDtl.length];
        //        //for (var x = 0; x < poDtl.length; x++) {
        //        //    //list[x] = { ProductName = poDtl[x].ProductProductName, Price = poDtl[x].Price }
        //        //    let ord: ReceiveOrderDetailRow;
        //        //    //Q.alert(poDtl[x].ProductProductName);
        //        //    //list[x].Price = poDtl[x].Price
        //        //    //list[x].ProductName = poDtl[x].ProductProductName
        //        //    //let ord: ReceiveOrderDetailRow;
        //        //    Q.alert("cc");
        //        //    //Q.alert("test1");
        //        //    //ord.ProductName = "sss";//poDtl[x].ProductProductName;
        //        //    //Q.alert("test2");
        //        //    //list[x] = ord;
                   
        //        //}
        //        Q.alert(poDtl[0].ProductProductName);

        //        Q.alert(dt[0].ProductName);
        //         list.push(dt[0]);
        //        this.form.DetailList.value = list;
        //        //Q.alert(list[0].ProductName);
        //        //this.form.DetailList.slickGrid.setData(list, true);
        //        //this.form.DetailList.setItems(list);
        //        //this.form.DetailList.view.setItems(listrue);
        //    });

        //}

        //protected updateInterface()
        //{
        //    super.updateInterface();
      
        //}

   
    }
}