﻿
namespace KBT.DIS {
    
    @Serenity.Decorators.registerClass()
    export class CompanyGrid extends Serenity.EntityGrid<CompanyRow, any> {
        protected getColumnsKey() { return 'DIS.Company'; }
        protected getDialogType() { return CompanyDialog; }
        protected getIdProperty() { return CompanyRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyRow.localTextPrefix; }
        protected getService() { return CompanyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}