namespace KBT.DIS {
    export class ServiceUnitForm extends Serenity.PrefixedContext {
        static formKey = 'DIS.ServiceUnit';

    }

    export interface ServiceUnitForm {
        DetailList: ServiceUnitDetailEditor;
    }

    [['DetailList', () => ServiceUnitDetailEditor]].forEach(x => Object.defineProperty(ServiceUnitForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

