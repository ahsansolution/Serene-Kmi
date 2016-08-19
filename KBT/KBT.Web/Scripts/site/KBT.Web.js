var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.TerritoryForm(this.idPrefix);
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return KBT.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                _super.call(this, container);
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.SupplierForm(this.idPrefix);
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return KBT.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                _super.call(this, container);
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.ShipperForm(this.idPrefix);
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return KBT.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                _super.call(this, container);
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = this;
                _super.call(this, input);
                this.addValidationRule(this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
            }
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor.formatMulti(value, PhoneEditor.formatPhone);
                }
                return PhoneEditor.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor.isValidMulti(phone, PhoneEditor.isValidPhone) : PhoneEditor.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.RegionForm(this.idPrefix);
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return KBT.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                _super.call(this, container);
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.ProductForm(this.idPrefix);
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog.prototype.getLanguages = function () {
                return KBT.LanguageList.getValue();
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.pendingChanges = {};
                this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass + "'" +
                    " value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var fld = Northwind.ProductRow.Fields;
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + id + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var fld = Northwind.ProductRow.Fields;
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === fld.CategoryName; });
                category.referencedFields = [fld.CategoryID];
                category.format = function (ctx) { return _this.selectFormatter(ctx, fld.CategoryID, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === fld.SupplierCompanyName; });
                supplier.referencedFields = [fld.SupplierID];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, fld.SupplierID, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === fld.UnitPrice; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsInStock; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsOnOrder; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.ReorderLevel; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field') || this.getColumns()[cell.cell].field;
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
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
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
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
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                _super.apply(this, arguments);
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Northwind.OrderDetailForm(this.idPrefix);
                this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(KBT.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                _super.call(this, container);
                this.nextId = 1;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity.__id;
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = row.__id;
                if (id == null) {
                    row.__id = this.nextId++;
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        delete y['__id'];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        y.__id = _this.nextId++;
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                _super.call(this, container);
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(KBT.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new KBT.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                _super.apply(this, arguments);
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(KBT.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                _super.call(this);
                this.form = new Northwind.OrderForm(this.idPrefix);
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(KBT.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({ OrderID: _this.get_entityId() }); }
                }));
                return buttons;
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                _super.call(this, container);
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                var fld = Northwind.OrderRow.Fields;
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                _super.call(this);
                this.textEditor = new Serenity.HtmlNoteContentEditor(this.byId('Text'));
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = this;
                _super.call(this, div);
                new Serenity.Toolbar(this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var lookup = new Serenity.LookupEditor($('#SomeElement'), {
                            lookupKey: 'Northwind.Category'
                        });
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: KBT.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Northwind.CustomerForm(this.idPrefix);
                this.ordersGrid = new Northwind.CustomerOrdersGrid(this.byId('OrdersGrid'));
                this.ordersGrid.element.flexHeightOnly(1);
                this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
                KBT.DialogUtils.pendingChangesConfirmation(this.element, function () { return _this.getSaveState() != _this.loadedState; });
                this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                _super.call(this, hidden);
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Northwind.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                _super.call(this, container);
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
/// <reference path="../Order/OrderDialog.ts" />
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                _super.call(this);
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
/// <reference path="../Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                _super.call(this, container);
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                var fld = Northwind.OrderRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                _super.apply(this, arguments);
                this.form = new Northwind.CategoryForm(this.idPrefix);
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog.prototype.getLanguages = function () {
                return KBT.LanguageList.getValue();
            };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                _super.call(this, container);
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.LoginForm(this.idPrefix);
                this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderDetailDialog = (function (_super) {
            __extends(ViewPurchaseOrderDetailDialog, _super);
            function ViewPurchaseOrderDetailDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ViewPurchaseOrderDetailForm(this.idPrefix);
            }
            ViewPurchaseOrderDetailDialog.prototype.getFormKey = function () { return DIS.ViewPurchaseOrderDetailForm.formKey; };
            ViewPurchaseOrderDetailDialog.prototype.getLocalTextPrefix = function () { return DIS.ViewPurchaseOrderDetailRow.localTextPrefix; };
            ViewPurchaseOrderDetailDialog.prototype.getNameProperty = function () { return DIS.ViewPurchaseOrderDetailRow.nameProperty; };
            ViewPurchaseOrderDetailDialog.prototype.getService = function () { return DIS.ViewPurchaseOrderDetailService.baseUrl; };
            ViewPurchaseOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ViewPurchaseOrderDetailDialog);
            return ViewPurchaseOrderDetailDialog;
        }(Serenity.EntityDialog));
        DIS.ViewPurchaseOrderDetailDialog = ViewPurchaseOrderDetailDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderDetailGrid = (function (_super) {
            __extends(ViewPurchaseOrderDetailGrid, _super);
            function ViewPurchaseOrderDetailGrid(container) {
                _super.call(this, container);
            }
            ViewPurchaseOrderDetailGrid.prototype.getColumnsKey = function () { return 'DIS.ViewPurchaseOrderDetail'; };
            ViewPurchaseOrderDetailGrid.prototype.getDialogType = function () { return DIS.ViewPurchaseOrderDetailDialog; };
            ViewPurchaseOrderDetailGrid.prototype.getLocalTextPrefix = function () { return DIS.ViewPurchaseOrderDetailRow.localTextPrefix; };
            ViewPurchaseOrderDetailGrid.prototype.getService = function () { return DIS.ViewPurchaseOrderDetailService.baseUrl; };
            ViewPurchaseOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewPurchaseOrderDetailGrid);
            return ViewPurchaseOrderDetailGrid;
        }(Serenity.EntityGrid));
        DIS.ViewPurchaseOrderDetailGrid = ViewPurchaseOrderDetailGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderDialog = (function (_super) {
            __extends(ViewPurchaseOrderDialog, _super);
            function ViewPurchaseOrderDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ViewPurchaseOrderForm(this.idPrefix);
            }
            ViewPurchaseOrderDialog.prototype.getFormKey = function () { return DIS.ViewPurchaseOrderForm.formKey; };
            ViewPurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return DIS.ViewPurchaseOrderRow.localTextPrefix; };
            ViewPurchaseOrderDialog.prototype.getNameProperty = function () { return DIS.ViewPurchaseOrderRow.nameProperty; };
            ViewPurchaseOrderDialog.prototype.getService = function () { return DIS.ViewPurchaseOrderService.baseUrl; };
            ViewPurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ViewPurchaseOrderDialog);
            return ViewPurchaseOrderDialog;
        }(Serenity.EntityDialog));
        DIS.ViewPurchaseOrderDialog = ViewPurchaseOrderDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderGrid = (function (_super) {
            __extends(ViewPurchaseOrderGrid, _super);
            function ViewPurchaseOrderGrid(container) {
                _super.call(this, container);
            }
            ViewPurchaseOrderGrid.prototype.getColumnsKey = function () { return 'DIS.ViewPurchaseOrder'; };
            ViewPurchaseOrderGrid.prototype.getDialogType = function () { return DIS.ViewPurchaseOrderDialog; };
            ViewPurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return DIS.ViewPurchaseOrderRow.localTextPrefix; };
            ViewPurchaseOrderGrid.prototype.getService = function () { return DIS.ViewPurchaseOrderService.baseUrl; };
            ViewPurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewPurchaseOrderGrid);
            return ViewPurchaseOrderGrid;
        }(Serenity.EntityGrid));
        DIS.ViewPurchaseOrderGrid = ViewPurchaseOrderGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitOrderDialog = (function (_super) {
            __extends(ViewProductUnitOrderDialog, _super);
            function ViewProductUnitOrderDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ViewProductUnitOrderForm(this.idPrefix);
            }
            ViewProductUnitOrderDialog.prototype.getFormKey = function () { return DIS.ViewProductUnitOrderForm.formKey; };
            ViewProductUnitOrderDialog.prototype.getLocalTextPrefix = function () { return DIS.ViewProductUnitOrderRow.localTextPrefix; };
            ViewProductUnitOrderDialog.prototype.getNameProperty = function () { return DIS.ViewProductUnitOrderRow.nameProperty; };
            ViewProductUnitOrderDialog.prototype.getService = function () { return DIS.ViewProductUnitOrderService.baseUrl; };
            ViewProductUnitOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ViewProductUnitOrderDialog);
            return ViewProductUnitOrderDialog;
        }(Serenity.EntityDialog));
        DIS.ViewProductUnitOrderDialog = ViewProductUnitOrderDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitOrderGrid = (function (_super) {
            __extends(ViewProductUnitOrderGrid, _super);
            function ViewProductUnitOrderGrid(container) {
                _super.call(this, container);
            }
            ViewProductUnitOrderGrid.prototype.getColumnsKey = function () { return 'DIS.ViewProductUnitOrder'; };
            ViewProductUnitOrderGrid.prototype.getDialogType = function () { return DIS.ViewProductUnitOrderDialog; };
            ViewProductUnitOrderGrid.prototype.getLocalTextPrefix = function () { return DIS.ViewProductUnitOrderRow.localTextPrefix; };
            ViewProductUnitOrderGrid.prototype.getService = function () { return DIS.ViewProductUnitOrderService.baseUrl; };
            ViewProductUnitOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewProductUnitOrderGrid);
            return ViewProductUnitOrderGrid;
        }(Serenity.EntityGrid));
        DIS.ViewProductUnitOrderGrid = ViewProductUnitOrderGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitDialog = (function (_super) {
            __extends(ViewProductUnitDialog, _super);
            function ViewProductUnitDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ViewProductUnitForm(this.idPrefix);
            }
            ViewProductUnitDialog.prototype.getFormKey = function () { return DIS.ViewProductUnitForm.formKey; };
            ViewProductUnitDialog.prototype.getLocalTextPrefix = function () { return DIS.ViewProductUnitRow.localTextPrefix; };
            ViewProductUnitDialog.prototype.getNameProperty = function () { return DIS.ViewProductUnitRow.nameProperty; };
            ViewProductUnitDialog.prototype.getService = function () { return DIS.ViewProductUnitService.baseUrl; };
            ViewProductUnitDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ViewProductUnitDialog);
            return ViewProductUnitDialog;
        }(Serenity.EntityDialog));
        DIS.ViewProductUnitDialog = ViewProductUnitDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitGrid = (function (_super) {
            __extends(ViewProductUnitGrid, _super);
            function ViewProductUnitGrid(container) {
                _super.call(this, container);
                // this is our autoincrementing counter
                this.nextId = 1;
            }
            ViewProductUnitGrid.prototype.getColumnsKey = function () { return 'DIS.ViewProductUnit'; };
            ViewProductUnitGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewProductUnitGrid.prototype.getDialogType = function () { return DIS.ViewProductUnitDialog; };
            ViewProductUnitGrid.prototype.getLocalTextPrefix = function () { return DIS.ViewProductUnitRow.localTextPrefix; };
            ViewProductUnitGrid.prototype.getService = function () { return DIS.ViewProductUnitService.baseUrl; };
            /**
            * This method is called to preprocess data returned from the list service
            */
            ViewProductUnitGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewProductUnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewProductUnitGrid);
            return ViewProductUnitGrid;
        }(Serenity.EntityGrid));
        DIS.ViewProductUnitGrid = ViewProductUnitGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductStockDialog = (function (_super) {
            __extends(ViewProductStockDialog, _super);
            function ViewProductStockDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ViewProductStockForm(this.idPrefix);
            }
            ViewProductStockDialog.prototype.getFormKey = function () { return DIS.ViewProductStockForm.formKey; };
            ViewProductStockDialog.prototype.getLocalTextPrefix = function () { return DIS.ViewProductStockRow.localTextPrefix; };
            ViewProductStockDialog.prototype.getNameProperty = function () { return DIS.ViewProductStockRow.nameProperty; };
            ViewProductStockDialog.prototype.getService = function () { return DIS.ViewProductStockService.baseUrl; };
            ViewProductStockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ViewProductStockDialog);
            return ViewProductStockDialog;
        }(Serenity.EntityDialog));
        DIS.ViewProductStockDialog = ViewProductStockDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductStockGrid = (function (_super) {
            __extends(ViewProductStockGrid, _super);
            function ViewProductStockGrid(container) {
                _super.call(this, container);
                // this is our autoincrementing counter
                this.nextId = 1;
            }
            ViewProductStockGrid.prototype.getColumnsKey = function () { return 'DIS.ViewProductStock'; };
            ViewProductStockGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewProductStockGrid.prototype.getNameProperty = function () { return DIS.ViewProductStockRow.nameProperty; };
            ViewProductStockGrid.prototype.getDialogType = function () { return DIS.ViewProductStockDialog; };
            ViewProductStockGrid.prototype.getLocalTextPrefix = function () { return DIS.ViewProductStockRow.localTextPrefix; };
            ViewProductStockGrid.prototype.getService = function () { return DIS.ViewProductStockService.baseUrl; };
            /**
            * This method is called to preprocess data returned from the list service
            */
            ViewProductStockGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewProductStockGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons = _super.prototype.getButtons.call(this).splice(0, 0);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DIS.ViewProductStockService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ViewProductStockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewProductStockGrid);
            return ViewProductStockGrid;
        }(Serenity.EntityGrid));
        DIS.ViewProductStockGrid = ViewProductStockGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewOrdersDialog = (function (_super) {
            __extends(ViewOrdersDialog, _super);
            function ViewOrdersDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ViewOrdersForm(this.idPrefix);
            }
            ViewOrdersDialog.prototype.getFormKey = function () { return DIS.ViewOrdersForm.formKey; };
            ViewOrdersDialog.prototype.getLocalTextPrefix = function () { return DIS.ViewOrdersRow.localTextPrefix; };
            ViewOrdersDialog.prototype.getNameProperty = function () { return DIS.ViewOrdersRow.nameProperty; };
            ViewOrdersDialog.prototype.getService = function () { return DIS.ViewOrdersService.baseUrl; };
            ViewOrdersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ViewOrdersDialog);
            return ViewOrdersDialog;
        }(Serenity.EntityDialog));
        DIS.ViewOrdersDialog = ViewOrdersDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewOrdersGrid = (function (_super) {
            __extends(ViewOrdersGrid, _super);
            function ViewOrdersGrid(container) {
                _super.call(this, container);
                // this is our autoincrementing counter
                this.nextId = 1;
            }
            ViewOrdersGrid.prototype.getColumnsKey = function () { return 'DIS.ViewOrders'; };
            ViewOrdersGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewOrdersGrid.prototype.getDialogType = function () { return DIS.ViewOrdersDialog; };
            ViewOrdersGrid.prototype.getLocalTextPrefix = function () { return DIS.ViewOrdersRow.localTextPrefix; };
            ViewOrdersGrid.prototype.getService = function () { return DIS.ViewOrdersService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewOrdersGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewOrdersGrid.prototype.getButtons = function () {
                return [];
            };
            ViewOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewOrdersGrid);
            return ViewOrdersGrid;
        }(Serenity.EntityGrid));
        DIS.ViewOrdersGrid = ViewOrdersGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.SupplierForm(this.idPrefix);
            }
            SupplierDialog.prototype.getFormKey = function () { return DIS.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return DIS.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return DIS.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return DIS.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return DIS.SupplierService.baseUrl; };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        DIS.SupplierDialog = SupplierDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                _super.call(this, container);
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'DIS.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return DIS.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return DIS.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return DIS.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return DIS.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        DIS.SupplierGrid = SupplierGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailDialog = (function (_super) {
            __extends(ServiceUnitDetailDialog, _super);
            function ServiceUnitDetailDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ServiceUnitDetailForm(this.idPrefix);
            }
            ServiceUnitDetailDialog.prototype.getFormKey = function () { return DIS.ServiceUnitDetailForm.formKey; };
            ServiceUnitDetailDialog.prototype.getIdProperty = function () { return DIS.ServiceUnitDetailRow.idProperty; };
            ServiceUnitDetailDialog.prototype.getLocalTextPrefix = function () { return DIS.ServiceUnitDetailRow.localTextPrefix; };
            ServiceUnitDetailDialog.prototype.getService = function () { return DIS.ServiceUnitDetailService.baseUrl; };
            ServiceUnitDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ServiceUnitDetailDialog);
            return ServiceUnitDetailDialog;
        }(Serenity.EntityDialog));
        DIS.ServiceUnitDetailDialog = ServiceUnitDetailDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailEditDialog = (function (_super) {
            __extends(ServiceUnitDetailEditDialog, _super);
            function ServiceUnitDetailEditDialog() {
                _super.call(this);
                this.form = new DIS.ServiceUnitDetailForm(this.idPrefix);
            }
            ServiceUnitDetailEditDialog.prototype.getFormKey = function () { return DIS.ServiceUnitDetailForm.formKey; };
            //protected getNameProperty() { return OrderDetailRow.na; }
            ServiceUnitDetailEditDialog.prototype.getLocalTextPrefix = function () { return DIS.ServiceUnitDetailRow.localTextPrefix; };
            //protected beforeLoadEntity(entity) {
            //    super.beforeLoadEntity(entity);
            //    Q.alert(this.productTypeID);
            //    this.form.ProductID.cascadeField = "ProductTypeId";
            //    this.form.ProductID.cascadeValue = this.productTypeID;
            //}
            ServiceUnitDetailEditDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            ServiceUnitDetailEditDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
            };
            ServiceUnitDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitDetailEditDialog);
            return ServiceUnitDetailEditDialog;
        }(KBT.Common.GridEditorDialog));
        DIS.ServiceUnitDetailEditDialog = ServiceUnitDetailEditDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailEditor = (function (_super) {
            __extends(ServiceUnitDetailEditor, _super);
            function ServiceUnitDetailEditor(container) {
                _super.call(this, container);
            }
            ServiceUnitDetailEditor.prototype.getColumnsKey = function () { return "DIS.ServiceUnitDetail"; };
            ServiceUnitDetailEditor.prototype.getDialogType = function () { return DIS.ServiceUnitDetailEditDialog; };
            ServiceUnitDetailEditor.prototype.getLocalTextPrefix = function () { return DIS.ServiceUnitDetailRow.localTextPrefix; };
            ServiceUnitDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.productTypeID = this.productTypeID;
            };
            ServiceUnitDetailEditor.prototype.validateEntity = function (row, id) {
                return true;
            };
            ServiceUnitDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ServiceUnitDetailEditor);
            return ServiceUnitDetailEditor;
        }(KBT.Common.GridEditorBase));
        DIS.ServiceUnitDetailEditor = ServiceUnitDetailEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailGrid = (function (_super) {
            __extends(ServiceUnitDetailGrid, _super);
            function ServiceUnitDetailGrid(container) {
                _super.call(this, container);
            }
            ServiceUnitDetailGrid.prototype.getColumnsKey = function () { return 'DIS.ServiceUnitDetail'; };
            ServiceUnitDetailGrid.prototype.getDialogType = function () { return DIS.ServiceUnitDetailDialog; };
            ServiceUnitDetailGrid.prototype.getIdProperty = function () { return DIS.ServiceUnitDetailRow.idProperty; };
            ServiceUnitDetailGrid.prototype.getLocalTextPrefix = function () { return DIS.ServiceUnitDetailRow.localTextPrefix; };
            ServiceUnitDetailGrid.prototype.getService = function () { return DIS.ServiceUnitDetailService.baseUrl; };
            ServiceUnitDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitDetailGrid);
            return ServiceUnitDetailGrid;
        }(Serenity.EntityGrid));
        DIS.ServiceUnitDetailGrid = ServiceUnitDetailGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDialog = (function (_super) {
            __extends(ServiceUnitDialog, _super);
            function ServiceUnitDialog(container) {
                _super.call(this, container);
                this.form = new DIS.ServiceUnitForm(this.idPrefix);
            }
            ServiceUnitDialog.prototype.getFormKey = function () { return DIS.ServiceUnitForm.formKey; };
            ServiceUnitDialog.prototype.getIdProperty = function () { return DIS.ServiceUnitRow.idProperty; };
            ServiceUnitDialog.prototype.getLocalTextPrefix = function () { return DIS.ServiceUnitRow.localTextPrefix; };
            ServiceUnitDialog.prototype.getService = function () { return DIS.ServiceUnitService.baseUrl; };
            ServiceUnitDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
            };
            ServiceUnitDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            ServiceUnitDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ServiceUnitDialog);
            return ServiceUnitDialog;
        }(Serenity.EntityDialog));
        DIS.ServiceUnitDialog = ServiceUnitDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitGrid = (function (_super) {
            __extends(ServiceUnitGrid, _super);
            function ServiceUnitGrid(container) {
                _super.call(this, container);
            }
            ServiceUnitGrid.prototype.getColumnsKey = function () { return 'DIS.ServiceUnit'; };
            ServiceUnitGrid.prototype.getDialogType = function () { return DIS.ServiceUnitDialog; };
            ServiceUnitGrid.prototype.getIdProperty = function () { return DIS.ServiceUnitRow.idProperty; };
            ServiceUnitGrid.prototype.getLocalTextPrefix = function () { return DIS.ServiceUnitRow.localTextPrefix; };
            ServiceUnitGrid.prototype.getService = function () { return DIS.ServiceUnitService.baseUrl; };
            ServiceUnitGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.custId = this.custId;
            };
            ServiceUnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitGrid);
            return ServiceUnitGrid;
        }(Serenity.EntityGrid));
        DIS.ServiceUnitGrid = ServiceUnitGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var RevenueDialog = (function (_super) {
            __extends(RevenueDialog, _super);
            function RevenueDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.RevenueForm(this.idPrefix);
            }
            RevenueDialog.prototype.getFormKey = function () { return DIS.RevenueForm.formKey; };
            RevenueDialog.prototype.getIdProperty = function () { return DIS.RevenueRow.idProperty; };
            RevenueDialog.prototype.getLocalTextPrefix = function () { return DIS.RevenueRow.localTextPrefix; };
            RevenueDialog.prototype.getNameProperty = function () { return DIS.RevenueRow.nameProperty; };
            RevenueDialog.prototype.getService = function () { return DIS.RevenueService.baseUrl; };
            RevenueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RevenueDialog);
            return RevenueDialog;
        }(Serenity.EntityDialog));
        DIS.RevenueDialog = RevenueDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var RevenueGrid = (function (_super) {
            __extends(RevenueGrid, _super);
            function RevenueGrid(container) {
                _super.call(this, container);
            }
            RevenueGrid.prototype.getColumnsKey = function () { return 'DIS.Revenue'; };
            RevenueGrid.prototype.getDialogType = function () { return DIS.RevenueDialog; };
            RevenueGrid.prototype.getIdProperty = function () { return DIS.RevenueRow.idProperty; };
            RevenueGrid.prototype.getLocalTextPrefix = function () { return DIS.RevenueRow.localTextPrefix; };
            RevenueGrid.prototype.getService = function () { return DIS.RevenueService.baseUrl; };
            RevenueGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RevenueGrid);
            return RevenueGrid;
        }(Serenity.EntityGrid));
        DIS.RevenueGrid = RevenueGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDetailDialog = (function (_super) {
            __extends(ReceiveOrderDetailDialog, _super);
            function ReceiveOrderDetailDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ReceiveOrderDetailForm(this.idPrefix);
            }
            ReceiveOrderDetailDialog.prototype.getFormKey = function () { return DIS.ReceiveOrderDetailForm.formKey; };
            ReceiveOrderDetailDialog.prototype.getIdProperty = function () { return DIS.ReceiveOrderDetailRow.idProperty; };
            ReceiveOrderDetailDialog.prototype.getLocalTextPrefix = function () { return DIS.ReceiveOrderDetailRow.localTextPrefix; };
            ReceiveOrderDetailDialog.prototype.getNameProperty = function () { return DIS.ReceiveOrderDetailRow.nameProperty; };
            ReceiveOrderDetailDialog.prototype.getService = function () { return DIS.ReceiveOrderDetailService.baseUrl; };
            ReceiveOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReceiveOrderDetailDialog);
            return ReceiveOrderDetailDialog;
        }(Serenity.EntityDialog));
        DIS.ReceiveOrderDetailDialog = ReceiveOrderDetailDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDetailEditor = (function (_super) {
            __extends(ReceiveOrderDetailEditor, _super);
            function ReceiveOrderDetailEditor(container) {
                var _this = this;
                _super.call(this, container);
                this.pendingChanges = {};
                this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
            }
            ReceiveOrderDetailEditor.prototype.getColumnsKey = function () { return 'DIS.ReceiveOrderDetail'; };
            ReceiveOrderDetailEditor.prototype.getDialogType = function () { return DIS.ReceiveOrderDetailDialog; };
            ReceiveOrderDetailEditor.prototype.getIdProperty = function () { return DIS.ReceiveOrderDetailRow.idProperty; };
            ReceiveOrderDetailEditor.prototype.getLocalTextPrefix = function () { return DIS.ReceiveOrderDetailRow.localTextPrefix; };
            ReceiveOrderDetailEditor.prototype.getService = function () { return DIS.ReceiveOrderDetailService.baseUrl; };
            ReceiveOrderDetailEditor.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field') || this.getColumns()[cell.cell].field;
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ReceiveOrderDetailId];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
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
            };
            ReceiveOrderDetailEditor.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ReceiveOrderDetailEditor.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            ReceiveOrderDetailEditor.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ReceiveOrderDetailId];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ReceiveOrderDetailEditor.prototype.saveClick = function () {
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
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
                this.refresh();
            };
            ReceiveOrderDetailEditor.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
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
            };
            ReceiveOrderDetailEditor.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ReceiveOrderDetailId];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text'  class='" + klass + "'" +
                    " value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ReceiveOrderDetailEditor.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.BinLocation];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
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
            ReceiveOrderDetailEditor.prototype.getButtons = function () {
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
            };
            ReceiveOrderDetailEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var fld = DIS.ReceiveOrderDetailRow.Fields;
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'BinLocation'; }).format = str;
                Q.first(columns, function (x) { return x.field === 'BackOrderQty'; }).format = num;
                Q.first(columns, function (x) { return x.field === 'ReceiveQty'; }).format = num;
                return columns;
            };
            ReceiveOrderDetailEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = false;
                return opt;
            };
            ReceiveOrderDetailEditor.prototype.usePager = function () {
                return false;
            };
            ReceiveOrderDetailEditor = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.registerEditor()
            ], ReceiveOrderDetailEditor);
            return ReceiveOrderDetailEditor;
        }(KBT.Common.GridEditorBase));
        DIS.ReceiveOrderDetailEditor = ReceiveOrderDetailEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDetailGrid = (function (_super) {
            __extends(ReceiveOrderDetailGrid, _super);
            function ReceiveOrderDetailGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.pendingChanges = {};
                this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
            }
            ReceiveOrderDetailGrid.prototype.getColumnsKey = function () { return 'DIS.ReceiveOrderDetail'; };
            ReceiveOrderDetailGrid.prototype.getDialogType = function () { return DIS.ReceiveOrderDetailDialog; };
            ReceiveOrderDetailGrid.prototype.getIdProperty = function () { return DIS.ReceiveOrderDetailRow.idProperty; };
            ReceiveOrderDetailGrid.prototype.getLocalTextPrefix = function () { return DIS.ReceiveOrderDetailRow.localTextPrefix; };
            ReceiveOrderDetailGrid.prototype.getService = function () { return DIS.ReceiveOrderDetailService.baseUrl; };
            ReceiveOrderDetailGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field') || this.getColumns()[cell.cell].field;
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ReceiveOrderDetailId];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
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
            };
            ReceiveOrderDetailGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ReceiveOrderDetailGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            ReceiveOrderDetailGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ReceiveOrderDetailId];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ReceiveOrderDetailGrid.prototype.saveClick = function () {
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
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
                this.refresh();
            };
            ReceiveOrderDetailGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
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
            };
            ReceiveOrderDetailGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ReceiveOrderDetailId];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text'  class='" + klass + "'" +
                    " value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ReceiveOrderDetailGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.BinLocation];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            ReceiveOrderDetailGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                var opt = {
                    lookupKey: 'DIS.ReceiveOrder'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Pilih Order') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    _this.refresh();
                });
                _super.prototype.createToolbarExtensions.call(this);
            };
            ReceiveOrderDetailGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['ReceiveOrderId'], '=', this.sourceLanguage.value]);
                return true;
            };
            ReceiveOrderDetailGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons = _super.prototype.getButtons.call(this).splice(0, 0);
                buttons.push({
                    title: 'Simpan Data',
                    cssClass: 'apply-changes-button',
                    onClick: function (e) {
                        return Q.confirm("Apakah data penerimaan barang akan disimpan?", function () {
                            _this.saveClick();
                        });
                    },
                    separator: true
                });
                //buttons.push({
                //    title: 'Group By No RO',
                //    cssClass: 'expand-all-button',
                //    onClick: () => this.view.setGrouping(
                //        [{
                //            getter: 'ReceiveOrderReceiveOrderNumber'
                //        }])
                //});
                return buttons;
            };
            ReceiveOrderDetailGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var fld = DIS.ReceiveOrderDetailRow.Fields;
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'BinLocation'; }).format = str;
                Q.first(columns, function (x) { return x.field === 'BackOrderQty'; }).format = num;
                Q.first(columns, function (x) { return x.field === 'ReceiveQty'; }).format = num;
                return columns;
            };
            ReceiveOrderDetailGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            ReceiveOrderDetailGrid.prototype.usePager = function () {
                return false;
            };
            ReceiveOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiveOrderDetailGrid);
            return ReceiveOrderDetailGrid;
        }(Serenity.EntityGrid));
        DIS.ReceiveOrderDetailGrid = ReceiveOrderDetailGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDialog = (function (_super) {
            __extends(ReceiveOrderDialog, _super);
            function ReceiveOrderDialog() {
                _super.call(this);
                this.form = new DIS.ReceiveOrderForm(this.idPrefix);
            }
            ReceiveOrderDialog.prototype.getFormKey = function () { return DIS.ReceiveOrderForm.formKey; };
            ReceiveOrderDialog.prototype.getIdProperty = function () { return DIS.ReceiveOrderRow.idProperty; };
            ReceiveOrderDialog.prototype.getLocalTextPrefix = function () { return DIS.ReceiveOrderRow.localTextPrefix; };
            ReceiveOrderDialog.prototype.getNameProperty = function () { return DIS.ReceiveOrderRow.nameProperty; };
            ReceiveOrderDialog.prototype.getService = function () { return DIS.ReceiveOrderService.baseUrl; };
            ReceiveOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ReceiveOrderDialog);
            return ReceiveOrderDialog;
        }(Serenity.EntityDialog));
        DIS.ReceiveOrderDialog = ReceiveOrderDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderGrid = (function (_super) {
            __extends(ReceiveOrderGrid, _super);
            function ReceiveOrderGrid(container) {
                _super.call(this, container);
            }
            ReceiveOrderGrid.prototype.getColumnsKey = function () { return 'DIS.ReceiveOrder'; };
            ReceiveOrderGrid.prototype.getDialogType = function () { return DIS.ReceiveOrderDialog; };
            ReceiveOrderGrid.prototype.getIdProperty = function () { return DIS.ReceiveOrderRow.idProperty; };
            ReceiveOrderGrid.prototype.getLocalTextPrefix = function () { return DIS.ReceiveOrderRow.localTextPrefix; };
            ReceiveOrderGrid.prototype.getService = function () { return DIS.ReceiveOrderService.baseUrl; };
            ReceiveOrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'DIS/ReceiveOrder/ListExcel',
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ReceiveOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiveOrderGrid);
            return ReceiveOrderGrid;
        }(Serenity.EntityGrid));
        DIS.ReceiveOrderGrid = ReceiveOrderGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailDialog = (function (_super) {
            __extends(PurchaseOrderDetailDialog, _super);
            function PurchaseOrderDetailDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.PurchaseOrderDetailForm(this.idPrefix);
            }
            PurchaseOrderDetailDialog.prototype.getFormKey = function () { return DIS.PurchaseOrderDetailForm.formKey; };
            PurchaseOrderDetailDialog.prototype.getIdProperty = function () { return DIS.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailDialog.prototype.getLocalTextPrefix = function () { return DIS.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailDialog.prototype.getService = function () { return DIS.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                var _this = this;
                _super.prototype.beforeLoadEntity.call(this, entity);
                this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    var price = 0;
                    Q.alert('yyyy');
                    if (productID != null) {
                        var productPrice = Q.tryFirst(KBT.DIS.ProductPriceRow.getLookup().items, function (x) { return x.ProductId == productID &&
                            x.OrderCategoryId == _this.orderCategoryId; });
                        _this.form.Price.value = productPrice.Price;
                        var product = Q.tryFirst(KBT.DIS.ProductsRow.getLookup().items, function (x) { return x.ProductID == productID; });
                        _this.form.ProductSerialNumber.value = product.SerialNumber;
                    }
                });
            };
            PurchaseOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseOrderDetailDialog);
            return PurchaseOrderDetailDialog;
        }(Serenity.EntityDialog));
        DIS.PurchaseOrderDetailDialog = PurchaseOrderDetailDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailEditor = (function (_super) {
            __extends(PurchaseOrderDetailEditor, _super);
            function PurchaseOrderDetailEditor(container) {
                _super.call(this, container);
            }
            PurchaseOrderDetailEditor.prototype.getColumnsKey = function () { return "DIS.PurchaseOrderDetail"; };
            PurchaseOrderDetailEditor.prototype.getDialogType = function () { return DIS.PurchaseOrderDetailEditDialog; };
            PurchaseOrderDetailEditor.prototype.getLocalTextPrefix = function () { return DIS.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.orderCategoryId = this.orderCategoryId;
                dialog.productTypeId = this.productTypeId;
            };
            PurchaseOrderDetailEditor.prototype.validateEntity = function (row, id) {
                row.ProductId = Q.toId(row.ProductId);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductId === row.ProductId; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('Barang ini sudah ada dalam list pemesanan!');
                    return false;
                }
                row.ProductProductName = DIS.ProductsRow.getLookup().itemById[row.ProductId].ProductName;
                row.LineTotal = row.Quantity * row.Price;
                row.CostTotal = row.LineTotal * (10 / 100);
                return true;
            };
            PurchaseOrderDetailEditor.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Quantity'),
                        new Slick.Aggregators.Sum('Price'),
                        new Slick.Aggregators.Sum('LineTotal'),
                        new Slick.Aggregators.Sum('CostTotal')
                    ]
                });
                return grid;
            };
            PurchaseOrderDetailEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            PurchaseOrderDetailEditor.prototype.usePager = function () {
                return false;
            };
            PurchaseOrderDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PurchaseOrderDetailEditor);
            return PurchaseOrderDetailEditor;
        }(KBT.Common.GridEditorBase));
        DIS.PurchaseOrderDetailEditor = PurchaseOrderDetailEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailGrid = (function (_super) {
            __extends(PurchaseOrderDetailGrid, _super);
            function PurchaseOrderDetailGrid(container) {
                _super.call(this, container);
            }
            PurchaseOrderDetailGrid.prototype.getColumnsKey = function () { return 'DIS.PurchaseOrderDetail'; };
            PurchaseOrderDetailGrid.prototype.getDialogType = function () { return DIS.PurchaseOrderDetailDialog; };
            PurchaseOrderDetailGrid.prototype.getIdProperty = function () { return DIS.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailGrid.prototype.getLocalTextPrefix = function () { return DIS.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailGrid.prototype.getService = function () { return DIS.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailGrid);
            return PurchaseOrderDetailGrid;
        }(Serenity.EntityGrid));
        DIS.PurchaseOrderDetailGrid = PurchaseOrderDetailGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailEditDialog = (function (_super) {
            __extends(PurchaseOrderDetailEditDialog, _super);
            function PurchaseOrderDetailEditDialog() {
                _super.call(this);
                this.form = new DIS.PurchaseOrderDetailForm(this.idPrefix);
                Serenity.EditorUtils.setReadOnly(this.form.ProductSerialNumber, true);
                Serenity.EditorUtils.setReadOnly(this.form.ProductColor, true);
                Serenity.EditorUtils.setReadOnly(this.form.ProductManufactureYear, true);
            }
            PurchaseOrderDetailEditDialog.prototype.getFormKey = function () { return DIS.PurchaseOrderDetailForm.formKey; };
            //protected getNameProperty() { return PurchaseOrderDetailRow.nameProperty; }
            PurchaseOrderDetailEditDialog.prototype.getLocalTextPrefix = function () { return DIS.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailEditDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.ProductId.cascadeField = "ProductTypeId";
                this.form.ProductId.cascadeValue = this.productTypeId;
                this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    var price = 0;
                    if (productID != null) {
                        var productPrice = Q.tryFirst(KBT.DIS.ProductPriceRow.getLookup().items, function (x) { return x.ProductId == productID &&
                            x.OrderCategoryId == _this.orderCategoryId; });
                        if (productPrice != null) {
                            _this.form.Price.value = productPrice.Price;
                            _this.form.ProductPriceId.value = productPrice.ProductPriceId;
                        }
                        var product = Q.tryFirst(KBT.DIS.ProductsRow.getLookup().items, function (x) { return x.ProductID == productID; });
                        if (product != null) {
                            _this.form.ProductSerialNumber.value = product.SerialNumber;
                            _this.form.ProductColor.value = product.Color;
                            _this.form.ProductManufactureYear.value = product.ManufactureYear.toString();
                        }
                    }
                });
            };
            PurchaseOrderDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailEditDialog);
            return PurchaseOrderDetailEditDialog;
        }(KBT.Common.GridEditorDialog));
        DIS.PurchaseOrderDetailEditDialog = PurchaseOrderDetailEditDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDialog = (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                var _this = this;
                _super.call(this);
                this.form = new DIS.PurchaseOrderForm(this.idPrefix);
                this.form.OrderCategoryId.changeSelect2(function (e) {
                    _this.form.DetailList.orderCategoryId = _this.form.OrderCategoryId.value;
                });
                this.form.ProductTypeId.changeSelect2(function (e) {
                    _this.form.DetailList.productTypeId = _this.form.ProductTypeId.value;
                });
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return DIS.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return DIS.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return DIS.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return DIS.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return DIS.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var poButton = {
                    title: "Cetak PO",
                    cssClass: 'export-pdf-button',
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Services/DIS/PurchaseOrder/PrintPO/',
                            params: { entityId: _this.get_entityId() },
                            target: '_blank'
                        });
                    }
                };
                buttons.push(poButton);
                return buttons;
            };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        DIS.PurchaseOrderDialog = PurchaseOrderDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderGrid = (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                _super.call(this, container);
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return 'DIS.PurchaseOrder'; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return DIS.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return DIS.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return DIS.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return DIS.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'DIS/PurchaseOrder/ListExcel',
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        DIS.PurchaseOrderGrid = PurchaseOrderGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductTypeDialog = (function (_super) {
            __extends(ProductTypeDialog, _super);
            function ProductTypeDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ProductTypeForm(this.idPrefix);
            }
            ProductTypeDialog.prototype.getFormKey = function () { return DIS.ProductTypeForm.formKey; };
            ProductTypeDialog.prototype.getIdProperty = function () { return DIS.ProductTypeRow.idProperty; };
            ProductTypeDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductTypeRow.localTextPrefix; };
            ProductTypeDialog.prototype.getNameProperty = function () { return DIS.ProductTypeRow.nameProperty; };
            ProductTypeDialog.prototype.getService = function () { return DIS.ProductTypeService.baseUrl; };
            ProductTypeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductTypeDialog);
            return ProductTypeDialog;
        }(Serenity.EntityDialog));
        DIS.ProductTypeDialog = ProductTypeDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductTypeGrid = (function (_super) {
            __extends(ProductTypeGrid, _super);
            function ProductTypeGrid(container) {
                _super.call(this, container);
            }
            ProductTypeGrid.prototype.getColumnsKey = function () { return 'DIS.ProductType'; };
            ProductTypeGrid.prototype.getDialogType = function () { return DIS.ProductTypeDialog; };
            ProductTypeGrid.prototype.getIdProperty = function () { return DIS.ProductTypeRow.idProperty; };
            ProductTypeGrid.prototype.getLocalTextPrefix = function () { return DIS.ProductTypeRow.localTextPrefix; };
            ProductTypeGrid.prototype.getService = function () { return DIS.ProductTypeService.baseUrl; };
            ProductTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductTypeGrid);
            return ProductTypeGrid;
        }(Serenity.EntityGrid));
        DIS.ProductTypeGrid = ProductTypeGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeEditor = (function (_super) {
            __extends(ProductAlternativeEditor, _super);
            //public orderCategoryId: any;
            function ProductAlternativeEditor(container) {
                _super.call(this, container);
            }
            ProductAlternativeEditor.prototype.getColumnsKey = function () { return "DIS.ProductAlternative"; };
            ProductAlternativeEditor.prototype.getDialogType = function () { return DIS.ProductAlternativeEditDialog; };
            ProductAlternativeEditor.prototype.getLocalTextPrefix = function () { return DIS.ProductAlternativeRow.localTextPrefix; };
            //protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            //    super.initEntityDialog(itemType, dialog);
            //    // passing category ID from grid editor to detail dialog
            //    (dialog as PurchaseOrderDetailDialog).orderCategoryId = this.orderCategoryId;
            //}
            ProductAlternativeEditor.prototype.validateEntity = function (row, id) {
                row.SeqNo = row.SeqNo;
                row.ProductIdAltProductNumber = DIS.ProductsRow.getLookup().itemById[row.ProductIdAlt].ProductNumber;
                row.ProductIdAltProductName = DIS.ProductsRow.getLookup().itemById[row.ProductIdAlt].ProductName;
                //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
                //if (sameProduct && this.id(sameProduct) !== id) {
                //    Q.alert('Barang ini sudah ada dalam list pemesanan!');
                //    return false;
                //}
                //row.ProductProductName = ProductsRow.getLookup().itemById[row.ProductId].ProductName;
                //row.LineTotal = row.Quantity * row.Price;
                //row.CostTotal = row.LineTotal * (10 / 100);
                return true;
            };
            ProductAlternativeEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductAlternativeEditor);
            return ProductAlternativeEditor;
        }(KBT.Common.GridEditorBase));
        DIS.ProductAlternativeEditor = ProductAlternativeEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductExcelImportBulkAction = (function (_super) {
            __extends(ProductExcelImportBulkAction, _super);
            function ProductExcelImportBulkAction() {
                _super.apply(this, arguments);
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            ProductExcelImportBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            ProductExcelImportBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            ProductExcelImportBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                DIS.ProductsService.ProductBulkAction({
                    ProductIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
                //BasicSamplesService.OrderBulkAction(
                //    {
                //        OrderIDs: batch.map(x => Q.parseInteger(x))
                //    },
                //    response => this.set_successCount(this.get_successCount() + batch.length),
                //    {
                //        blockUI: false,
                //        onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                //        onCleanup: () => this.serviceCallCleanup()
                //    });
            };
            return ProductExcelImportBulkAction;
        }(KBT.Common.ImportExcelServiceAction));
        DIS.ProductExcelImportBulkAction = ProductExcelImportBulkAction;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductLookupEditor = (function (_super) {
            __extends(ProductLookupEditor, _super);
            function ProductLookupEditor(hidden) {
                _super.call(this, hidden);
            }
            ProductLookupEditor.prototype.getLookupKey = function () {
                return 'DIS.ProductLookup';
            };
            ProductLookupEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.ProductNumber + ']';
            };
            ProductLookupEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductLookupEditor);
            return ProductLookupEditor;
        }(Serenity.LookupEditorBase));
        DIS.ProductLookupEditor = ProductLookupEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductNumberLookupEditor = (function (_super) {
            __extends(ProductNumberLookupEditor, _super);
            function ProductNumberLookupEditor(hidden) {
                _super.call(this, hidden);
            }
            ProductNumberLookupEditor.prototype.getLookupKey = function () {
                return 'DIS.ProductsRow';
            };
            ProductNumberLookupEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.ProductName + ']';
            };
            ProductNumberLookupEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductNumberLookupEditor);
            return ProductNumberLookupEditor;
        }(Serenity.LookupEditorBase));
        DIS.ProductNumberLookupEditor = ProductNumberLookupEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsDialog = (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = this;
                _super.call(this);
                this.form = new DIS.ProductsForm(this.idPrefix);
                this.form.ProductTypeId.changeSelect2(function (e) {
                    if (_this.form.ProductTypeId.value == "2") {
                        //this.form.Merek.value = "";
                        //this.form.PoliceNumber.value = "";
                        //this.form.MachineNo.value = "";
                        //this.form.SerialNumber.value = "";
                        //this.form.Color.value = "";
                        //this.form.ManufactureYear.value = 0;
                        //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, false);
                        //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, false);
                        Serenity.EditorUtils.setReadOnly(_this.form.SerialNumber, false);
                        Serenity.EditorUtils.setReadOnly(_this.form.Color, false);
                        Serenity.EditorUtils.setReadOnly(_this.form.ManufactureYear, false);
                        Serenity.EditorUtils.setReadOnly(_this.form.PartNumber, false);
                    }
                    if (_this.form.ProductTypeId.value == "1") {
                        Serenity.EditorUtils.setReadOnly(_this.form.PartNumber, false);
                        //Serenity.EditorUtils.setReadOnly(this.form.Merek, true);
                        //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, true);
                        //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, true);
                        Serenity.EditorUtils.setReadOnly(_this.form.SerialNumber, true);
                        Serenity.EditorUtils.setReadOnly(_this.form.Color, true);
                        Serenity.EditorUtils.setReadOnly(_this.form.ManufactureYear, true);
                    }
                });
            }
            ProductsDialog.prototype.getFormKey = function () { return DIS.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return DIS.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return DIS.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return DIS.ProductsService.baseUrl; };
            ProductsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.PartNumber, true);
                //Serenity.EditorUtils.setReadOnly(this.form.Merek, true);
                //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, true);
                //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, true);
                Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, true);
                Serenity.EditorUtils.setReadOnly(this.form.Color, true);
                Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, true);
            };
            ProductsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.entity.ProductTypeId == 1) {
                    Serenity.EditorUtils.setReadOnly(this.form.PartNumber, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.Merek, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, true);
                    Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, true);
                    Serenity.EditorUtils.setReadOnly(this.form.Color, true);
                    Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, true);
                }
                if (this.entity.ProductTypeId == 2) {
                    //Serenity.EditorUtils.setReadOnly(this.form.Merek, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.PoliceNumber, false);
                    //Serenity.EditorUtils.setReadOnly(this.form.MachineNo, false);
                    Serenity.EditorUtils.setReadOnly(this.form.SerialNumber, false);
                    Serenity.EditorUtils.setReadOnly(this.form.Color, false);
                    Serenity.EditorUtils.setReadOnly(this.form.ManufactureYear, false);
                    Serenity.EditorUtils.setReadOnly(this.form.PartNumber, false);
                }
            };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        DIS.ProductsDialog = ProductsDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsExcelImportDialog = (function (_super) {
            __extends(ProductsExcelImportDialog, _super);
            function ProductsExcelImportDialog() {
                _super.call(this);
                this.form = new DIS.ProductsExcelImportForm(this.idPrefix);
            }
            ProductsExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductsExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            //var action = new ProductExcelImportBulkAction();
                            //action.done = () => this.dialogClose();
                            //var str = [];
                            //str.push('aa', 'bb', 'cc');
                            //action.execute(str);
                        }
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            ProductsExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsExcelImportDialog);
            return ProductsExcelImportDialog;
        }(Serenity.PropertyDialog));
        DIS.ProductsExcelImportDialog = ProductsExcelImportDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsGrid = (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                _super.call(this, container);
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'DIS.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return DIS.ProductsDialog; };
            ProductsGrid.prototype.getIdProperty = function () { return DIS.ProductsRow.idProperty; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return DIS.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return DIS.ProductsService.baseUrl; };
            ProductsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'DIS/Products/ListExcel',
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        DIS.ProductsGrid = ProductsGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductPriceDialog = (function (_super) {
            __extends(ProductPriceDialog, _super);
            function ProductPriceDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ProductPriceForm(this.idPrefix);
            }
            ProductPriceDialog.prototype.getFormKey = function () { return DIS.ProductPriceForm.formKey; };
            ProductPriceDialog.prototype.getIdProperty = function () { return DIS.ProductPriceRow.idProperty; };
            ProductPriceDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductPriceRow.localTextPrefix; };
            ProductPriceDialog.prototype.getService = function () { return DIS.ProductPriceService.baseUrl; };
            ProductPriceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductPriceDialog);
            return ProductPriceDialog;
        }(Serenity.EntityDialog));
        DIS.ProductPriceDialog = ProductPriceDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductPriceGrid = (function (_super) {
            __extends(ProductPriceGrid, _super);
            function ProductPriceGrid(container) {
                _super.call(this, container);
            }
            ProductPriceGrid.prototype.getColumnsKey = function () { return 'DIS.ProductPrice'; };
            ProductPriceGrid.prototype.getDialogType = function () { return DIS.ProductPriceDialog; };
            ProductPriceGrid.prototype.getIdProperty = function () { return DIS.ProductPriceRow.idProperty; };
            ProductPriceGrid.prototype.getLocalTextPrefix = function () { return DIS.ProductPriceRow.localTextPrefix; };
            ProductPriceGrid.prototype.getService = function () { return DIS.ProductPriceService.baseUrl; };
            ProductPriceGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'DIS/ProductPrice/ListExcel',
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductPriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductPriceGrid);
            return ProductPriceGrid;
        }(Serenity.EntityGrid));
        DIS.ProductPriceGrid = ProductPriceGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductCategoryDialog = (function (_super) {
            __extends(ProductCategoryDialog, _super);
            function ProductCategoryDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ProductCategoryForm(this.idPrefix);
            }
            ProductCategoryDialog.prototype.getFormKey = function () { return DIS.ProductCategoryForm.formKey; };
            ProductCategoryDialog.prototype.getIdProperty = function () { return DIS.ProductCategoryRow.idProperty; };
            ProductCategoryDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductCategoryRow.localTextPrefix; };
            ProductCategoryDialog.prototype.getNameProperty = function () { return DIS.ProductCategoryRow.nameProperty; };
            ProductCategoryDialog.prototype.getService = function () { return DIS.ProductCategoryService.baseUrl; };
            ProductCategoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductCategoryDialog);
            return ProductCategoryDialog;
        }(Serenity.EntityDialog));
        DIS.ProductCategoryDialog = ProductCategoryDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductCategoryGrid = (function (_super) {
            __extends(ProductCategoryGrid, _super);
            function ProductCategoryGrid(container) {
                _super.call(this, container);
            }
            ProductCategoryGrid.prototype.getColumnsKey = function () { return 'DIS.ProductCategory'; };
            ProductCategoryGrid.prototype.getDialogType = function () { return DIS.ProductCategoryDialog; };
            ProductCategoryGrid.prototype.getIdProperty = function () { return DIS.ProductCategoryRow.idProperty; };
            ProductCategoryGrid.prototype.getLocalTextPrefix = function () { return DIS.ProductCategoryRow.localTextPrefix; };
            ProductCategoryGrid.prototype.getService = function () { return DIS.ProductCategoryService.baseUrl; };
            ProductCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductCategoryGrid);
            return ProductCategoryGrid;
        }(Serenity.EntityGrid));
        DIS.ProductCategoryGrid = ProductCategoryGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductBasePriceDialog = (function (_super) {
            __extends(ProductBasePriceDialog, _super);
            function ProductBasePriceDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ProductBasePriceForm(this.idPrefix);
            }
            ProductBasePriceDialog.prototype.getFormKey = function () { return DIS.ProductBasePriceForm.formKey; };
            ProductBasePriceDialog.prototype.getIdProperty = function () { return DIS.ProductBasePriceRow.idProperty; };
            ProductBasePriceDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductBasePriceRow.localTextPrefix; };
            ProductBasePriceDialog.prototype.getService = function () { return DIS.ProductBasePriceService.baseUrl; };
            ProductBasePriceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductBasePriceDialog);
            return ProductBasePriceDialog;
        }(Serenity.EntityDialog));
        DIS.ProductBasePriceDialog = ProductBasePriceDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductBasePriceGrid = (function (_super) {
            __extends(ProductBasePriceGrid, _super);
            function ProductBasePriceGrid(container) {
                _super.call(this, container);
            }
            ProductBasePriceGrid.prototype.getColumnsKey = function () { return 'DIS.ProductBasePrice'; };
            ProductBasePriceGrid.prototype.getDialogType = function () { return DIS.ProductBasePriceDialog; };
            ProductBasePriceGrid.prototype.getIdProperty = function () { return DIS.ProductBasePriceRow.idProperty; };
            ProductBasePriceGrid.prototype.getLocalTextPrefix = function () { return DIS.ProductBasePriceRow.localTextPrefix; };
            ProductBasePriceGrid.prototype.getService = function () { return DIS.ProductBasePriceService.baseUrl; };
            ProductBasePriceGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                //buttons = super.getButtons().splice(0, 0);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DIS.ProductBasePriceService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductBasePriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductBasePriceGrid);
            return ProductBasePriceGrid;
        }(Serenity.EntityGrid));
        DIS.ProductBasePriceGrid = ProductBasePriceGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeDialog = (function (_super) {
            __extends(ProductAlternativeDialog, _super);
            function ProductAlternativeDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.ProductAlternativeForm(this.idPrefix);
            }
            ProductAlternativeDialog.prototype.getFormKey = function () { return DIS.ProductAlternativeForm.formKey; };
            ProductAlternativeDialog.prototype.getIdProperty = function () { return DIS.ProductAlternativeRow.idProperty; };
            ProductAlternativeDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductAlternativeRow.localTextPrefix; };
            ProductAlternativeDialog.prototype.getService = function () { return DIS.ProductAlternativeService.baseUrl; };
            ProductAlternativeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductAlternativeDialog);
            return ProductAlternativeDialog;
        }(Serenity.EntityDialog));
        DIS.ProductAlternativeDialog = ProductAlternativeDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeEditDialog = (function (_super) {
            __extends(ProductAlternativeEditDialog, _super);
            function ProductAlternativeEditDialog() {
                _super.call(this);
                this.form = new DIS.ProductAlternativeForm(this.idPrefix);
                //this.form.ProductId.changeSelect2(e => {
                //    var productID = Q.toId(this.form.ProductId.value);
                //    var price = 0;
                //    if (productID != null) {
                //        var productPrice = Q.first(KBT.DIS.ProductPriceRow.getLookup().items, x => x.ProductId == productID &&
                //            x.OrderCategoryId == this.orderCategoryId);
                //        this.form.Price.value = productPrice.Price;
                //        this.form.ProductPriceId.value = productPrice.ProductPriceId;
                //    }
                //});
            }
            ProductAlternativeEditDialog.prototype.getFormKey = function () { return DIS.ProductAlternativeForm.formKey; };
            //protected getNameProperty() { return PurchaseOrderDetailRow.nameProperty; }
            ProductAlternativeEditDialog.prototype.getLocalTextPrefix = function () { return DIS.ProductAlternativeRow.localTextPrefix; };
            ProductAlternativeEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductAlternativeEditDialog);
            return ProductAlternativeEditDialog;
        }(KBT.Common.GridEditorDialog));
        DIS.ProductAlternativeEditDialog = ProductAlternativeEditDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeGrid = (function (_super) {
            __extends(ProductAlternativeGrid, _super);
            function ProductAlternativeGrid(container) {
                _super.call(this, container);
            }
            ProductAlternativeGrid.prototype.getColumnsKey = function () { return 'DIS.ProductAlternative'; };
            ProductAlternativeGrid.prototype.getDialogType = function () { return DIS.ProductAlternativeDialog; };
            ProductAlternativeGrid.prototype.getIdProperty = function () { return DIS.ProductAlternativeRow.idProperty; };
            ProductAlternativeGrid.prototype.getLocalTextPrefix = function () { return DIS.ProductAlternativeRow.localTextPrefix; };
            ProductAlternativeGrid.prototype.getService = function () { return DIS.ProductAlternativeService.baseUrl; };
            ProductAlternativeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductAlternativeGrid);
            return ProductAlternativeGrid;
        }(Serenity.EntityGrid));
        DIS.ProductAlternativeGrid = ProductAlternativeGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailEditDialog = (function (_super) {
            __extends(OrderDetailEditDialog, _super);
            function OrderDetailEditDialog() {
                var _this = this;
                _super.call(this);
                this.form = new DIS.OrderDetailForm(this.idPrefix);
                //this.form.ProductID.filterField = "ProductTypeID";
                //this.form.ProductID.filterValue = 1;
                this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    var price = 0;
                    if (productID != null) {
                        var productPrice = Q.first(KBT.DIS.ProductBasePriceRow.getLookup().items, function (x) { return x.ProductID == productID &&
                            x.IsActive == true; });
                        _this.form.BasePrice.value = productPrice.Price;
                        var stock = Q.first(KBT.DIS.ViewProductStockRow.getLookup().items, function (x) { return x.ProductId == productID; }).Stock;
                        _this.form.Stock.value = stock;
                        var row = Q.tryFirst(DIS.ProductsRow.getLookup().items, function (x) { return x.ProductID == +_this.form.ProductID.value; });
                        //&& x.Discontinued == 1);
                        _this.form.OrderDetailProductColor.value = row.Color;
                        _this.form.OrderDetailProductSerialNumber.value = row.SerialNumber;
                        _this.form.OrderDetailProductManufactureYear.value = row.ManufactureYear;
                    }
                });
            }
            OrderDetailEditDialog.prototype.getFormKey = function () { return DIS.OrderDetailForm.formKey; };
            //protected getNameProperty() { return OrderDetailRow.na; }
            OrderDetailEditDialog.prototype.getLocalTextPrefix = function () { return DIS.OrderDetailRow.localTextPrefix; };
            //protected beforeLoadEntity(entity) {
            //    super.beforeLoadEntity(entity);
            //    Q.alert(this.productTypeID);
            //    this.form.ProductID.cascadeField = "ProductTypeId";
            //    this.form.ProductID.cascadeValue = this.productTypeID;
            //}
            OrderDetailEditDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                //Q.alert(this.productTypeID);
                //this.form.ProductID.cascadeField = "ProductTypeId";
                //this.form.ProductID.cascadeValue = 2;
            };
            OrderDetailEditDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.productTypeID == 1 || this.productTypeID == 3) {
                    jQuery(".field.OrderDetailProductSerialNumber").hide();
                    jQuery(".field.OrderDetailProductColor").hide();
                    jQuery(".field.OrderDetailProductManufactureYear").hide();
                }
                else {
                }
            };
            OrderDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailEditDialog);
            return OrderDetailEditDialog;
        }(KBT.Common.GridEditorDialog));
        DIS.OrderDetailEditDialog = OrderDetailEditDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailEditor = (function (_super) {
            __extends(OrderDetailEditor, _super);
            function OrderDetailEditor(container) {
                _super.call(this, container);
            }
            OrderDetailEditor.prototype.getColumnsKey = function () { return "DIS.OrderDetail"; };
            OrderDetailEditor.prototype.getDialogType = function () { return DIS.OrderDetailEditDialog; };
            OrderDetailEditor.prototype.getLocalTextPrefix = function () { return DIS.OrderDetailRow.localTextPrefix; };
            OrderDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.productTypeID = this.productTypeID;
            };
            OrderDetailEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('Barang ini sudah ada dalam list!');
                    return false;
                }
                row.ProductProductName = DIS.ProductsRow.getLookup().itemById[row.ProductID].ProductName;
                row.BasePrice = row.BasePrice;
                row.LineTotal = row.OrderQty * row.BasePrice;
                //var CostPercent = CostRow.getLookup().itemById[row.CostId].Percentage;
                row.CostTotal = row.LineTotal * (10 / 100);
                return true;
            };
            OrderDetailEditor.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('OrderQty'),
                        new Slick.Aggregators.Sum('BasePrice'),
                        new Slick.Aggregators.Sum('LineTotal'),
                        new Slick.Aggregators.Sum('CostTotal')
                    ]
                });
                return grid;
            };
            OrderDetailEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            OrderDetailEditor.prototype.usePager = function () {
                return false;
            };
            OrderDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OrderDetailEditor);
            return OrderDetailEditor;
        }(KBT.Common.GridEditorBase));
        DIS.OrderDetailEditor = OrderDetailEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrdersDialog = (function (_super) {
            __extends(OrdersDialog, _super);
            function OrdersDialog() {
                var _this = this;
                _super.call(this);
                this.form = new DIS.OrdersForm(this.idPrefix);
                //Serenity.EditorUtils.setReadOnly(this.form.ProductUnitId, true);
                //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                //Serenity.EditorUtils.setReadOnly(this.form.OrderProductColor, true);
                //Serenity.EditorUtils.setReadOnly(this.form.OrderProductSerialNumber, true);
                //Serenity.EditorUtils.setReadOnly(this.form.OrderProductManufactureYear, true);
                //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                this.form.ProductTypeID.changeSelect2(function (e) {
                    //this.form.OrderProductColor.value = "";
                    //this.form.OrderProductSerialNumber.value = "";
                    //this.form.OrderProductManufactureYear.value = null;
                    //this.form.PaymentService.value = 0;
                    //this.form.KmInUse.value = 0;
                    //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                    if (_this.form.ProductTypeID.value == "3") {
                        if (_this.form.CustomerDealerId.value != "") {
                            var ord = Q.tryFirst(DIS.OrdersRow.getLookup().items, function (x) { return x.ProductTypeID == 2 &&
                                x.CustomerDealerId == +_this.form.CustomerDealerId.value && x.OrderStatus == "Complete"; });
                            if (ord == null) {
                            }
                            else {
                            }
                        }
                    }
                    else {
                    }
                    _this.form.DetailList.productTypeID = _this.form.ProductTypeID.value;
                });
                this.form.CustomerDealerId.changeSelect2(function (e) {
                    //this.form.OrderProductColor.value = "";
                    //this.form.OrderProductSerialNumber.value = "";
                    //this.form.OrderProductManufactureYear.value = null;
                    //this.form.PaymentService.value = 0;
                    //this.form.KmInUse.value = 0;
                    //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                    //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                    if (_this.form.ProductTypeID.value == "3") {
                        if (_this.form.CustomerDealerId.value != "") {
                            var ord = Q.tryFirst(DIS.OrdersRow.getLookup().items, function (x) { return x.ProductTypeID == 2 &&
                                x.CustomerDealerId == +_this.form.CustomerDealerId.value && x.OrderStatus == "Complete"; });
                            if (ord == null) {
                            }
                            else {
                            }
                        }
                    }
                    else {
                    }
                    _this.form.DetailList.productTypeID = _this.form.ProductTypeID.value;
                });
                //this.form.ProductUnitId.changeSelect2(e => {
                //    if (this.form.ProductTypeID.value = "3") {
                //        //Q.alert(this.form.ProductUnitId.value);
                //        //var row = Q.tryFirst(ProductsRow.getLookup().items, x => x.ProductID == +this.form.ProductUnitId.value);//&& x.Discontinued == 1);
                //        //this.form.OrderProductColor.value = row.Color;
                //        //this.form.OrderProductSerialNumber.value = row.SerialNumber;
                //        //this.form.OrderProductManufactureYear.value = row.ManufactureYear;
                //    }
                //    else
                //    {
                //        //this.form.OrderProductColor.value = "";
                //        //this.form.OrderProductSerialNumber.value = "";
                //        //this.form.OrderProductManufactureYear.value = null;
                //        //this.form.PaymentService.value = 0;
                //        //this.form.KmInUse.value = 0;
                //        //Serenity.EditorUtils.setReadOnly(this.form.PaymentService, true);
                //        //Serenity.EditorUtils.setReadOnly(this.form.KmInUse, true);
                //    }
                //});
            }
            OrdersDialog.prototype.getFormKey = function () { return DIS.OrdersForm.formKey; };
            OrdersDialog.prototype.getIdProperty = function () { return DIS.OrdersRow.idProperty; };
            OrdersDialog.prototype.getLocalTextPrefix = function () { return DIS.OrdersRow.localTextPrefix; };
            OrdersDialog.prototype.getService = function () { return DIS.OrdersService.baseUrl; };
            OrdersDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                var poButton = {
                    title: "Print Invoice",
                    cssClass: 'export-pdf-button',
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Services/DIS/Orders/PrintInvoice/',
                            params: { entityId: _this.get_entityId() },
                            target: '_blank'
                        });
                    }
                };
                buttons.push(poButton);
                return buttons;
            };
            OrdersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], OrdersDialog);
            return OrdersDialog;
        }(Serenity.EntityDialog));
        DIS.OrdersDialog = OrdersDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrdersGrid = (function (_super) {
            __extends(OrdersGrid, _super);
            function OrdersGrid(container) {
                _super.call(this, container);
            }
            OrdersGrid.prototype.getColumnsKey = function () { return 'DIS.Orders'; };
            OrdersGrid.prototype.getDialogType = function () { return DIS.OrdersDialog; };
            OrdersGrid.prototype.getIdProperty = function () { return DIS.OrdersRow.idProperty; };
            OrdersGrid.prototype.getLocalTextPrefix = function () { return DIS.OrdersRow.localTextPrefix; };
            OrdersGrid.prototype.getService = function () { return DIS.OrdersService.baseUrl; };
            OrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersGrid);
            return OrdersGrid;
        }(Serenity.EntityGrid));
        DIS.OrdersGrid = OrdersGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.OrderDetailForm(this.idPrefix);
            }
            OrderDetailDialog.prototype.getFormKey = function () { return DIS.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getIdProperty = function () { return DIS.OrderDetailRow.idProperty; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return DIS.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog.prototype.getService = function () { return DIS.OrderDetailService.baseUrl; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(Serenity.EntityDialog));
        DIS.OrderDetailDialog = OrderDetailDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailGrid = (function (_super) {
            __extends(OrderDetailGrid, _super);
            function OrderDetailGrid(container) {
                _super.call(this, container);
            }
            OrderDetailGrid.prototype.getColumnsKey = function () { return 'DIS.OrderDetail'; };
            OrderDetailGrid.prototype.getDialogType = function () { return DIS.OrderDetailDialog; };
            OrderDetailGrid.prototype.getIdProperty = function () { return DIS.OrderDetailRow.idProperty; };
            OrderDetailGrid.prototype.getLocalTextPrefix = function () { return DIS.OrderDetailRow.localTextPrefix; };
            OrderDetailGrid.prototype.getService = function () { return DIS.OrderDetailService.baseUrl; };
            OrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailGrid);
            return OrderDetailGrid;
        }(Serenity.EntityGrid));
        DIS.OrderDetailGrid = OrderDetailGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderCategoryDialog = (function (_super) {
            __extends(OrderCategoryDialog, _super);
            function OrderCategoryDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.OrderCategoryForm(this.idPrefix);
            }
            OrderCategoryDialog.prototype.getFormKey = function () { return DIS.OrderCategoryForm.formKey; };
            OrderCategoryDialog.prototype.getIdProperty = function () { return DIS.OrderCategoryRow.idProperty; };
            OrderCategoryDialog.prototype.getLocalTextPrefix = function () { return DIS.OrderCategoryRow.localTextPrefix; };
            OrderCategoryDialog.prototype.getNameProperty = function () { return DIS.OrderCategoryRow.nameProperty; };
            OrderCategoryDialog.prototype.getService = function () { return DIS.OrderCategoryService.baseUrl; };
            OrderCategoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], OrderCategoryDialog);
            return OrderCategoryDialog;
        }(Serenity.EntityDialog));
        DIS.OrderCategoryDialog = OrderCategoryDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderCategoryGrid = (function (_super) {
            __extends(OrderCategoryGrid, _super);
            function OrderCategoryGrid(container) {
                _super.call(this, container);
            }
            OrderCategoryGrid.prototype.getColumnsKey = function () { return 'DIS.OrderCategory'; };
            OrderCategoryGrid.prototype.getDialogType = function () { return DIS.OrderCategoryDialog; };
            OrderCategoryGrid.prototype.getIdProperty = function () { return DIS.OrderCategoryRow.idProperty; };
            OrderCategoryGrid.prototype.getLocalTextPrefix = function () { return DIS.OrderCategoryRow.localTextPrefix; };
            OrderCategoryGrid.prototype.getService = function () { return DIS.OrderCategoryService.baseUrl; };
            OrderCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderCategoryGrid);
            return OrderCategoryGrid;
        }(Serenity.EntityGrid));
        DIS.OrderCategoryGrid = OrderCategoryGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var InventoryDialog = (function (_super) {
            __extends(InventoryDialog, _super);
            function InventoryDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.InventoryForm(this.idPrefix);
            }
            InventoryDialog.prototype.getFormKey = function () { return DIS.InventoryForm.formKey; };
            InventoryDialog.prototype.getIdProperty = function () { return DIS.InventoryRow.idProperty; };
            InventoryDialog.prototype.getLocalTextPrefix = function () { return DIS.InventoryRow.localTextPrefix; };
            InventoryDialog.prototype.getNameProperty = function () { return DIS.InventoryRow.nameProperty; };
            InventoryDialog.prototype.getService = function () { return DIS.InventoryService.baseUrl; };
            InventoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], InventoryDialog);
            return InventoryDialog;
        }(Serenity.EntityDialog));
        DIS.InventoryDialog = InventoryDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var InventoryGrid = (function (_super) {
            __extends(InventoryGrid, _super);
            function InventoryGrid(container) {
                _super.call(this, container);
            }
            InventoryGrid.prototype.getColumnsKey = function () { return 'DIS.Inventory'; };
            InventoryGrid.prototype.getDialogType = function () { return DIS.InventoryDialog; };
            InventoryGrid.prototype.getIdProperty = function () { return DIS.InventoryRow.idProperty; };
            InventoryGrid.prototype.getLocalTextPrefix = function () { return DIS.InventoryRow.localTextPrefix; };
            InventoryGrid.prototype.getService = function () { return DIS.InventoryService.baseUrl; };
            InventoryGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                return grid;
            };
            InventoryGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons = _super.prototype.getButtons.call(this).splice(0, 0);
                buttons.push({
                    title: 'Group By Nama Produk',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            getter: 'ProductProductName'
                        }]); }
                });
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DIS.InventoryService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            InventoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryGrid);
            return InventoryGrid;
        }(Serenity.EntityGrid));
        DIS.InventoryGrid = InventoryGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CustomerDealerDialog = (function (_super) {
            __extends(CustomerDealerDialog, _super);
            function CustomerDealerDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.CustomerDealerForm(this.idPrefix);
            }
            CustomerDealerDialog.prototype.getFormKey = function () { return DIS.CustomerDealerForm.formKey; };
            CustomerDealerDialog.prototype.getIdProperty = function () { return DIS.CustomerDealerRow.idProperty; };
            CustomerDealerDialog.prototype.getLocalTextPrefix = function () { return DIS.CustomerDealerRow.localTextPrefix; };
            CustomerDealerDialog.prototype.getNameProperty = function () { return DIS.CustomerDealerRow.nameProperty; };
            CustomerDealerDialog.prototype.getService = function () { return DIS.CustomerDealerService.baseUrl; };
            CustomerDealerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CustomerDealerDialog);
            return CustomerDealerDialog;
        }(Serenity.EntityDialog));
        DIS.CustomerDealerDialog = CustomerDealerDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CustomerDealerGrid = (function (_super) {
            __extends(CustomerDealerGrid, _super);
            function CustomerDealerGrid(container) {
                _super.call(this, container);
            }
            CustomerDealerGrid.prototype.getColumnsKey = function () { return 'DIS.CustomerDealer'; };
            CustomerDealerGrid.prototype.getDialogType = function () { return DIS.CustomerDealerDialog; };
            CustomerDealerGrid.prototype.getIdProperty = function () { return DIS.CustomerDealerRow.idProperty; };
            CustomerDealerGrid.prototype.getLocalTextPrefix = function () { return DIS.CustomerDealerRow.localTextPrefix; };
            CustomerDealerGrid.prototype.getService = function () { return DIS.CustomerDealerService.baseUrl; };
            CustomerDealerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                //buttons = super.getButtons().splice(0, 0);
                buttons.push(KBT.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: DIS.CustomerDealerService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(KBT.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerDealerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDealerGrid);
            return CustomerDealerGrid;
        }(Serenity.EntityGrid));
        DIS.CustomerDealerGrid = CustomerDealerGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CostDialog = (function (_super) {
            __extends(CostDialog, _super);
            function CostDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.CostForm(this.idPrefix);
            }
            CostDialog.prototype.getFormKey = function () { return DIS.CostForm.formKey; };
            CostDialog.prototype.getIdProperty = function () { return DIS.CostRow.idProperty; };
            CostDialog.prototype.getLocalTextPrefix = function () { return DIS.CostRow.localTextPrefix; };
            CostDialog.prototype.getNameProperty = function () { return DIS.CostRow.nameProperty; };
            CostDialog.prototype.getService = function () { return DIS.CostService.baseUrl; };
            CostDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CostDialog);
            return CostDialog;
        }(Serenity.EntityDialog));
        DIS.CostDialog = CostDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CostGrid = (function (_super) {
            __extends(CostGrid, _super);
            function CostGrid(container) {
                _super.call(this, container);
            }
            CostGrid.prototype.getColumnsKey = function () { return 'DIS.Cost'; };
            CostGrid.prototype.getDialogType = function () { return DIS.CostDialog; };
            CostGrid.prototype.getIdProperty = function () { return DIS.CostRow.idProperty; };
            CostGrid.prototype.getLocalTextPrefix = function () { return DIS.CostRow.localTextPrefix; };
            CostGrid.prototype.getService = function () { return DIS.CostService.baseUrl; };
            CostGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CostGrid);
            return CostGrid;
        }(Serenity.EntityGrid));
        DIS.CostGrid = CostGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CompanyDialog = (function (_super) {
            __extends(CompanyDialog, _super);
            function CompanyDialog() {
                _super.apply(this, arguments);
                this.form = new DIS.CompanyForm(this.idPrefix);
            }
            CompanyDialog.prototype.getFormKey = function () { return DIS.CompanyForm.formKey; };
            CompanyDialog.prototype.getIdProperty = function () { return DIS.CompanyRow.idProperty; };
            CompanyDialog.prototype.getLocalTextPrefix = function () { return DIS.CompanyRow.localTextPrefix; };
            CompanyDialog.prototype.getNameProperty = function () { return DIS.CompanyRow.nameProperty; };
            CompanyDialog.prototype.getService = function () { return DIS.CompanyService.baseUrl; };
            CompanyDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CompanyDialog);
            return CompanyDialog;
        }(Serenity.EntityDialog));
        DIS.CompanyDialog = CompanyDialog;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CompanyGrid = (function (_super) {
            __extends(CompanyGrid, _super);
            function CompanyGrid(container) {
                _super.call(this, container);
            }
            CompanyGrid.prototype.getColumnsKey = function () { return 'DIS.Company'; };
            CompanyGrid.prototype.getDialogType = function () { return DIS.CompanyDialog; };
            CompanyGrid.prototype.getIdProperty = function () { return DIS.CompanyRow.idProperty; };
            CompanyGrid.prototype.getLocalTextPrefix = function () { return DIS.CompanyRow.localTextPrefix; };
            CompanyGrid.prototype.getService = function () { return DIS.CompanyService.baseUrl; };
            CompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyGrid);
            return CompanyGrid;
        }(Serenity.EntityGrid));
        DIS.CompanyGrid = CompanyGrid;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderStatusEditor = (function (_super) {
            __extends(OrderStatusEditor, _super);
            function OrderStatusEditor(hidden) {
                _super.call(this, hidden, null);
                _super.prototype.addItem.call(this, { id: "In Progress", source: "In Progress", text: "In Progress", disabled: false });
                _super.prototype.addItem.call(this, { id: "Complete", source: "Complete", text: "Complete", disabled: false });
                _super.prototype.addItem.call(this, { id: "Cancelled", source: "Cancelled", text: "Cancelled", disabled: false });
            }
            OrderStatusEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OrderStatusEditor);
            return OrderStatusEditor;
        }(Serenity.Select2Editor));
        DIS.OrderStatusEditor = OrderStatusEditor;
        var OrderCategoryEditor = (function (_super) {
            __extends(OrderCategoryEditor, _super);
            function OrderCategoryEditor(hidden) {
                _super.call(this, hidden, null);
                _super.prototype.addItem.call(this, { id: "EO", source: "EO", text: "EO", disabled: false });
                _super.prototype.addItem.call(this, { id: "MO", source: "MO", text: "MO", disabled: false });
                _super.prototype.addItem.call(this, { id: "PO", source: "PO", text: "PO", disabled: false });
            }
            OrderCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OrderCategoryEditor);
            return OrderCategoryEditor;
        }(Serenity.Select2Editor));
        DIS.OrderCategoryEditor = OrderCategoryEditor;
        var UnitStockEditor = (function (_super) {
            __extends(UnitStockEditor, _super);
            function UnitStockEditor(hidden) {
                _super.call(this, hidden, null);
                _super.prototype.addItem.call(this, { id: "DRUM", source: "DRUM", text: "DRUM", disabled: false });
                _super.prototype.addItem.call(this, { id: "LOT", source: "LOT", text: "LOT", disabled: false });
                _super.prototype.addItem.call(this, { id: "PCS", source: "PCS", text: "PCS", disabled: false });
                _super.prototype.addItem.call(this, { id: "UNIT", source: "UNIT", text: "UNIT", disabled: false });
            }
            UnitStockEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], UnitStockEditor);
            return UnitStockEditor;
        }(Serenity.Select2Editor));
        DIS.UnitStockEditor = UnitStockEditor;
        var ReceiveOrderStatusEditor = (function (_super) {
            __extends(ReceiveOrderStatusEditor, _super);
            function ReceiveOrderStatusEditor(hidden) {
                _super.call(this, hidden, null);
                _super.prototype.addItem.call(this, { id: "In Progress", source: "In Progress", text: "In Progress", disabled: false });
                _super.prototype.addItem.call(this, { id: "Complete", source: "Complete", text: "Complete", disabled: false });
                _super.prototype.addItem.call(this, { id: "Partial Complete", source: "Partial Complete", text: "Partial Complete", disabled: false });
                _super.prototype.addItem.call(this, { id: "Cancelled", source: "Cancelled", text: "Cancelled", disabled: false });
            }
            ReceiveOrderStatusEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ReceiveOrderStatusEditor);
            return ReceiveOrderStatusEditor;
        }(Serenity.Select2Editor));
        DIS.ReceiveOrderStatusEditor = ReceiveOrderStatusEditor;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var StatusFormatter = (function () {
            function StatusFormatter() {
            }
            StatusFormatter.prototype.format = function (ctx) {
                var classStatus = '';
                switch (ctx.value) {
                    case "Draft":
                        {
                            classStatus = 'label label-warning';
                        }
                        break;
                    case "In Progress":
                        {
                            ctx.value = "In Progress";
                            classStatus = 'label label-info';
                        }
                        break;
                    case "UnComplete":
                        {
                            classStatus = 'label label-primary';
                        }
                        break;
                    case "Complete":
                        {
                            classStatus = 'label label-success';
                        }
                        break;
                    case "Reject":
                        {
                            classStatus = 'label label-danger';
                        }
                        break;
                }
                return '<span class="' + classStatus + '">' + Q.htmlEncode(ctx.value) + '</span>';
            };
            StatusFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], StatusFormatter);
            return StatusFormatter;
        }());
        DIS.StatusFormatter = StatusFormatter;
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('KBT');
    })(ScriptInitialization = KBT.ScriptInitialization || (KBT.ScriptInitialization = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        var fileName = options.reportTitle || "{0}_{1}.pdf";
                        fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                        doc.save(fileName);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                _super.call(this, select);
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = this;
                _super.call(this, input);
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                this.menuUL = menuUL;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = this;
                _super.call(this, select);
                this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(this.getCurrentTheme());
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                _super.apply(this, arguments);
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                _super.apply(this, arguments);
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                _super.apply(this, arguments);
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            var Methods;
            (function (Methods) {
            })(Methods = BasicSamplesService.Methods || (BasicSamplesService.Methods = {}));
            ['OrdersByShipper', 'OrderBulkAction'].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) { return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BasicSamplesService.baseUrl + '/' + x;
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm() {
                _super.apply(this, arguments);
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
        [['CustomerID', function () { return KBT.Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return BasicSamples.FilteredLookupDetailEditor; }]].forEach(function (x) { return Object.defineProperty(FilteredLookupInDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm() {
                _super.apply(this, arguments);
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return BasicSamples.ProduceSeafoodCategoryEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(LookupFilterByMultipleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CompanyForm = (function (_super) {
            __extends(CompanyForm, _super);
            function CompanyForm() {
                _super.apply(this, arguments);
            }
            CompanyForm.formKey = 'DIS.Company';
            return CompanyForm;
        }(Serenity.PrefixedContext));
        DIS.CompanyForm = CompanyForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['Logo', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(CompanyForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CompanyRow;
        (function (CompanyRow) {
            CompanyRow.idProperty = 'CompanyId';
            CompanyRow.nameProperty = 'CompanyName';
            CompanyRow.localTextPrefix = 'DIS.Company';
            CompanyRow.lookupKey = 'DIS.Company';
            function getLookup() {
                return Q.getLookup('DIS.Company');
            }
            CompanyRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CompanyRow.Fields || (CompanyRow.Fields = {}));
            ['CompanyId', 'CompanyName', 'Address', 'Fax', 'Logo', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(CompanyRow = DIS.CompanyRow || (DIS.CompanyRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CompanyService;
        (function (CompanyService) {
            CompanyService.baseUrl = 'DIS/Company';
            var Methods;
            (function (Methods) {
            })(Methods = CompanyService.Methods || (CompanyService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CompanyService[x] = function (r, s, o) { return Q.serviceRequest(CompanyService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CompanyService.baseUrl + '/' + x;
            });
        })(CompanyService = DIS.CompanyService || (DIS.CompanyService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CostForm = (function (_super) {
            __extends(CostForm, _super);
            function CostForm() {
                _super.apply(this, arguments);
            }
            CostForm.formKey = 'DIS.Cost';
            return CostForm;
        }(Serenity.PrefixedContext));
        DIS.CostForm = CostForm;
        [['CostName', function () { return Serenity.StringEditor; }], ['Amount', function () { return Serenity.DecimalEditor; }], ['Percentage', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(CostForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CostRow;
        (function (CostRow) {
            CostRow.idProperty = 'CostId';
            CostRow.nameProperty = 'CostName';
            CostRow.localTextPrefix = 'DIS.Cost';
            CostRow.lookupKey = 'DIS.Cost';
            function getLookup() {
                return Q.getLookup('DIS.Cost');
            }
            CostRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CostRow.Fields || (CostRow.Fields = {}));
            ['CostId', 'CostName', 'Amount', 'Percentage'].forEach(function (x) { return Fields[x] = x; });
        })(CostRow = DIS.CostRow || (DIS.CostRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CostService;
        (function (CostService) {
            CostService.baseUrl = 'DIS/Cost';
            var Methods;
            (function (Methods) {
            })(Methods = CostService.Methods || (CostService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CostService[x] = function (r, s, o) { return Q.serviceRequest(CostService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CostService.baseUrl + '/' + x;
            });
        })(CostService = DIS.CostService || (DIS.CostService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CustomerDealerForm = (function (_super) {
            __extends(CustomerDealerForm, _super);
            function CustomerDealerForm() {
                _super.apply(this, arguments);
            }
            CustomerDealerForm.formKey = 'DIS.CustomerDealer';
            return CustomerDealerForm;
        }(Serenity.PrefixedContext));
        DIS.CustomerDealerForm = CustomerDealerForm;
        [['CustomerDealerName', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerDealerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CustomerDealerRow;
        (function (CustomerDealerRow) {
            CustomerDealerRow.idProperty = 'CustomerDealerId';
            CustomerDealerRow.nameProperty = 'CustomerDealerName';
            CustomerDealerRow.localTextPrefix = 'DIS.CustomerDealer';
            CustomerDealerRow.lookupKey = 'DIS.CustomerDealer';
            function getLookup() {
                return Q.getLookup('DIS.CustomerDealer');
            }
            CustomerDealerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDealerRow.Fields || (CustomerDealerRow.Fields = {}));
            ['CustomerDealerId', 'CustomerDealerName', 'Address'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDealerRow = DIS.CustomerDealerRow || (DIS.CustomerDealerRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var CustomerDealerService;
        (function (CustomerDealerService) {
            CustomerDealerService.baseUrl = 'DIS/CustomerDealer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerDealerService.Methods || (CustomerDealerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerDealerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerDealerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerDealerService.baseUrl + '/' + x;
            });
        })(CustomerDealerService = DIS.CustomerDealerService || (DIS.CustomerDealerService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var InventoryForm = (function (_super) {
            __extends(InventoryForm, _super);
            function InventoryForm() {
                _super.apply(this, arguments);
            }
            InventoryForm.formKey = 'DIS.Inventory';
            return InventoryForm;
        }(Serenity.PrefixedContext));
        DIS.InventoryForm = InventoryForm;
        [['ProductId', function () { return DIS.ProductLookupEditor; }], ['OrderCategoryId', function () { return Serenity.LookupEditor; }], ['Qty', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(InventoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var InventoryRow;
        (function (InventoryRow) {
            InventoryRow.idProperty = 'InventoryId';
            InventoryRow.nameProperty = 'ProductProductName';
            InventoryRow.localTextPrefix = 'DIS.Inventory';
            InventoryRow.lookupKey = 'DIS.Inventory';
            function getLookup() {
                return Q.getLookup('DIS.Inventory');
            }
            InventoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = InventoryRow.Fields || (InventoryRow.Fields = {}));
            ['InventoryId', 'ProductId', 'OrderCategoryId', 'OrderCategoryOrderCategoryName', 'Qty', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'InventoryStatus', 'DocumentNo', 'EntryDate'].forEach(function (x) { return Fields[x] = x; });
        })(InventoryRow = DIS.InventoryRow || (DIS.InventoryRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var InventoryService;
        (function (InventoryService) {
            InventoryService.baseUrl = 'DIS/Inventory';
            var Methods;
            (function (Methods) {
            })(Methods = InventoryService.Methods || (InventoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                InventoryService[x] = function (r, s, o) { return Q.serviceRequest(InventoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = InventoryService.baseUrl + '/' + x;
            });
        })(InventoryService = DIS.InventoryService || (DIS.InventoryService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderCategoryForm = (function (_super) {
            __extends(OrderCategoryForm, _super);
            function OrderCategoryForm() {
                _super.apply(this, arguments);
            }
            OrderCategoryForm.formKey = 'DIS.OrderCategory';
            return OrderCategoryForm;
        }(Serenity.PrefixedContext));
        DIS.OrderCategoryForm = OrderCategoryForm;
        [['OrderCategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderCategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderCategoryRow;
        (function (OrderCategoryRow) {
            OrderCategoryRow.idProperty = 'OrderCategoryId';
            OrderCategoryRow.nameProperty = 'OrderCategoryName';
            OrderCategoryRow.localTextPrefix = 'DIS.OrderCategory';
            OrderCategoryRow.lookupKey = 'DIS.OrderCategory';
            function getLookup() {
                return Q.getLookup('DIS.OrderCategory');
            }
            OrderCategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderCategoryRow.Fields || (OrderCategoryRow.Fields = {}));
            ['OrderCategoryId', 'OrderCategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(OrderCategoryRow = DIS.OrderCategoryRow || (DIS.OrderCategoryRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderCategoryService;
        (function (OrderCategoryService) {
            OrderCategoryService.baseUrl = 'DIS/OrderCategory';
            var Methods;
            (function (Methods) {
            })(Methods = OrderCategoryService.Methods || (OrderCategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderCategoryService[x] = function (r, s, o) { return Q.serviceRequest(OrderCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderCategoryService.baseUrl + '/' + x;
            });
        })(OrderCategoryService = DIS.OrderCategoryService || (DIS.OrderCategoryService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                _super.apply(this, arguments);
            }
            OrderDetailForm.formKey = 'DIS.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        DIS.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return DIS.ProductLookupEditor; }], ['OrderQty', function () { return Serenity.IntegerEditor; }], ['BasePrice', function () { return Serenity.DecimalEditor; }], ['Stock', function () { return Serenity.IntegerEditor; }], ['OrderDetailProductSerialNumber', function () { return Serenity.StringEditor; }], ['OrderDetailProductColor', function () { return Serenity.StringEditor; }], ['OrderDetailProductManufactureYear', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'OrderDetailId';
            OrderDetailRow.localTextPrefix = 'DIS.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['OrderDetailId', 'OrderId', 'ProductID', 'OrderQty', 'ProductPriceId', 'CostId', 'OrderOrderDate', 'OrderCustomerDealerId', 'OrderUserId', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'ProductPriceProductId', 'ProductPriceOrderCategoryId', 'ProductPricePrice', 'ProductPriceIsActive', 'ProductPriceEntryDate', 'CostCostName', 'CostAmount', 'CostTotal', 'BasePrice', 'LineTotal', 'CostPercentage', 'KmInUse', 'ServiceQuantity', 'OrderCategoryId', 'OrderCategoryName', 'Stock', 'OrderDetailProductMachineNo', 'OrderDetailProductSerialNumber', 'OrderDetailProductColor', 'OrderDetailProductManufactureYear', 'ServiceUnitDetailId'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = DIS.OrderDetailRow || (DIS.OrderDetailRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'DIS/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = DIS.OrderDetailService || (DIS.OrderDetailService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrdersForm = (function (_super) {
            __extends(OrdersForm, _super);
            function OrdersForm() {
                _super.apply(this, arguments);
            }
            OrdersForm.formKey = 'DIS.Orders';
            return OrdersForm;
        }(Serenity.PrefixedContext));
        DIS.OrdersForm = OrdersForm;
        [['CustomerDealerId', function () { return Serenity.LookupEditor; }], ['ProductTypeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return DIS.OrderDetailEditor; }]].forEach(function (x) { return Object.defineProperty(OrdersForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrdersRow;
        (function (OrdersRow) {
            OrdersRow.idProperty = 'OrderId';
            OrdersRow.localTextPrefix = 'DIS.Orders';
            OrdersRow.lookupKey = 'DIS.Orders';
            function getLookup() {
                return Q.getLookup('DIS.Orders');
            }
            OrdersRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrdersRow.Fields || (OrdersRow.Fields = {}));
            ['OrderId', 'OrderDate', 'CustomerDealerId', 'UserId', 'ProductTypeID', 'OrderNumber', 'CustomerDealerCustomerDealerName', 'CustomerDealerAddress', 'OrderStatus', 'DetailList', 'PaymentService', 'KmInUse'].forEach(function (x) { return Fields[x] = x; });
        })(OrdersRow = DIS.OrdersRow || (DIS.OrdersRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var OrdersService;
        (function (OrdersService) {
            OrdersService.baseUrl = 'DIS/Orders';
            var Methods;
            (function (Methods) {
            })(Methods = OrdersService.Methods || (OrdersService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrdersService[x] = function (r, s, o) { return Q.serviceRequest(OrdersService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrdersService.baseUrl + '/' + x;
            });
        })(OrdersService = DIS.OrdersService || (DIS.OrdersService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeForm = (function (_super) {
            __extends(ProductAlternativeForm, _super);
            function ProductAlternativeForm() {
                _super.apply(this, arguments);
            }
            ProductAlternativeForm.formKey = 'DIS.ProductAlternative';
            return ProductAlternativeForm;
        }(Serenity.PrefixedContext));
        DIS.ProductAlternativeForm = ProductAlternativeForm;
        [['ProductIdAlt', function () { return DIS.ProductLookupEditor; }], ['SeqNo', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductAlternativeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeRow;
        (function (ProductAlternativeRow) {
            ProductAlternativeRow.idProperty = 'ProductAlternativeId';
            ProductAlternativeRow.localTextPrefix = 'DIS.ProductAlternative';
            var Fields;
            (function (Fields) {
            })(Fields = ProductAlternativeRow.Fields || (ProductAlternativeRow.Fields = {}));
            ['ProductAlternativeId', 'ProductIdMain', 'ProductIdAlt', 'SeqNo', 'ProductIdAltProductName', 'ProductIdAltProductNumber', 'ProductIdAltPartNumber', 'ProductIdAltProductCategoryId', 'ProductIdAltProductTypeId', 'ProductIdAltDiscontinued', 'ProductIdAltProductImage', 'ProductIdAltDescription', 'ProductIdAltBinLocation', 'ProductIdAltMerek', 'ProductIdAltPoliceNumber', 'ProductIdAltMachineNo', 'ProductIdAltSerialNumber', 'ProductIdAltColor', 'ProductIdAltManufactureYear'].forEach(function (x) { return Fields[x] = x; });
        })(ProductAlternativeRow = DIS.ProductAlternativeRow || (DIS.ProductAlternativeRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductAlternativeService;
        (function (ProductAlternativeService) {
            ProductAlternativeService.baseUrl = 'DIS/ProductAlternative';
            var Methods;
            (function (Methods) {
            })(Methods = ProductAlternativeService.Methods || (ProductAlternativeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductAlternativeService[x] = function (r, s, o) { return Q.serviceRequest(ProductAlternativeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductAlternativeService.baseUrl + '/' + x;
            });
        })(ProductAlternativeService = DIS.ProductAlternativeService || (DIS.ProductAlternativeService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductBasePriceForm = (function (_super) {
            __extends(ProductBasePriceForm, _super);
            function ProductBasePriceForm() {
                _super.apply(this, arguments);
            }
            ProductBasePriceForm.formKey = 'DIS.ProductBasePrice';
            return ProductBasePriceForm;
        }(Serenity.PrefixedContext));
        DIS.ProductBasePriceForm = ProductBasePriceForm;
        [['ProductID', function () { return DIS.ProductLookupEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['EntryDate', function () { return Serenity.DateEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ProductBasePriceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductBasePriceRow;
        (function (ProductBasePriceRow) {
            ProductBasePriceRow.idProperty = 'ProductBasePriceId';
            ProductBasePriceRow.localTextPrefix = 'DIS.ProductBasePrice';
            ProductBasePriceRow.lookupKey = 'DIS.ProductBasePrice';
            function getLookup() {
                return Q.getLookup('DIS.ProductBasePrice');
            }
            ProductBasePriceRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductBasePriceRow.Fields || (ProductBasePriceRow.Fields = {}));
            ['ProductBasePriceId', 'ProductID', 'Price', 'EntryDate', 'IsActive', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation'].forEach(function (x) { return Fields[x] = x; });
        })(ProductBasePriceRow = DIS.ProductBasePriceRow || (DIS.ProductBasePriceRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductBasePriceService;
        (function (ProductBasePriceService) {
            ProductBasePriceService.baseUrl = 'DIS/ProductBasePrice';
            var Methods;
            (function (Methods) {
            })(Methods = ProductBasePriceService.Methods || (ProductBasePriceService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductBasePriceService[x] = function (r, s, o) { return Q.serviceRequest(ProductBasePriceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductBasePriceService.baseUrl + '/' + x;
            });
        })(ProductBasePriceService = DIS.ProductBasePriceService || (DIS.ProductBasePriceService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductCategoryForm = (function (_super) {
            __extends(ProductCategoryForm, _super);
            function ProductCategoryForm() {
                _super.apply(this, arguments);
            }
            ProductCategoryForm.formKey = 'DIS.ProductCategory';
            return ProductCategoryForm;
        }(Serenity.PrefixedContext));
        DIS.ProductCategoryForm = ProductCategoryForm;
        [['ProductCategoryName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProductCategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductCategoryRow;
        (function (ProductCategoryRow) {
            ProductCategoryRow.idProperty = 'ProductCategoryId';
            ProductCategoryRow.nameProperty = 'ProductCategoryName';
            ProductCategoryRow.localTextPrefix = 'DIS.ProductCategory';
            ProductCategoryRow.lookupKey = 'DIS.ProductCategory';
            function getLookup() {
                return Q.getLookup('DIS.ProductCategory');
            }
            ProductCategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductCategoryRow.Fields || (ProductCategoryRow.Fields = {}));
            ['ProductCategoryId', 'ProductCategoryName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductCategoryRow = DIS.ProductCategoryRow || (DIS.ProductCategoryRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductCategoryService;
        (function (ProductCategoryService) {
            ProductCategoryService.baseUrl = 'DIS/ProductCategory';
            var Methods;
            (function (Methods) {
            })(Methods = ProductCategoryService.Methods || (ProductCategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductCategoryService[x] = function (r, s, o) { return Q.serviceRequest(ProductCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductCategoryService.baseUrl + '/' + x;
            });
        })(ProductCategoryService = DIS.ProductCategoryService || (DIS.ProductCategoryService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductPriceForm = (function (_super) {
            __extends(ProductPriceForm, _super);
            function ProductPriceForm() {
                _super.apply(this, arguments);
            }
            ProductPriceForm.formKey = 'DIS.ProductPrice';
            return ProductPriceForm;
        }(Serenity.PrefixedContext));
        DIS.ProductPriceForm = ProductPriceForm;
        [['ProductId', function () { return DIS.ProductLookupEditor; }], ['OrderCategoryId', function () { return Serenity.LookupEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['IsActive', function () { return Serenity.BooleanEditor; }], ['EntryDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(ProductPriceForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductPriceRow;
        (function (ProductPriceRow) {
            ProductPriceRow.idProperty = 'ProductPriceId';
            ProductPriceRow.localTextPrefix = 'DIS.ProductPrice';
            ProductPriceRow.lookupKey = 'DIS.ProductPrice';
            function getLookup() {
                return Q.getLookup('DIS.ProductPrice');
            }
            ProductPriceRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductPriceRow.Fields || (ProductPriceRow.Fields = {}));
            ['ProductPriceId', 'ProductId', 'OrderCategoryId', 'Price', 'IsActive', 'EntryDate', 'ProductProductName', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'OrderCategoryOrderCategoryName', 'OrderCategoryDescription'].forEach(function (x) { return Fields[x] = x; });
        })(ProductPriceRow = DIS.ProductPriceRow || (DIS.ProductPriceRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductPriceService;
        (function (ProductPriceService) {
            ProductPriceService.baseUrl = 'DIS/ProductPrice';
            var Methods;
            (function (Methods) {
            })(Methods = ProductPriceService.Methods || (ProductPriceService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductPriceService[x] = function (r, s, o) { return Q.serviceRequest(ProductPriceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductPriceService.baseUrl + '/' + x;
            });
        })(ProductPriceService = DIS.ProductPriceService || (DIS.ProductPriceService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsExcelImportForm = (function (_super) {
            __extends(ProductsExcelImportForm, _super);
            function ProductsExcelImportForm() {
                _super.apply(this, arguments);
            }
            ProductsExcelImportForm.formKey = 'DIS.ProductsExcelImport';
            return ProductsExcelImportForm;
        }(Serenity.PrefixedContext));
        DIS.ProductsExcelImportForm = ProductsExcelImportForm;
        [['FileName', function () { return Serenity.ImageUploadEditor; }]].forEach(function (x) { return Object.defineProperty(ProductsExcelImportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsForm = (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm() {
                _super.apply(this, arguments);
            }
            ProductsForm.formKey = 'DIS.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        DIS.ProductsForm = ProductsForm;
        [['ProductTypeId', function () { return Serenity.LookupEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['UnitStock', function () { return DIS.UnitStockEditor; }], ['PartNumber', function () { return Serenity.StringEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['SerialNumber', function () { return Serenity.StringEditor; }], ['Color', function () { return Serenity.StringEditor; }], ['ManufactureYear', function () { return Serenity.IntegerEditor; }], ['ProductAltList', function () { return DIS.ProductAlternativeEditor; }]].forEach(function (x) { return Object.defineProperty(ProductsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'ProductID';
            ProductsRow.nameProperty = 'ProductName';
            ProductsRow.localTextPrefix = 'DIS.Products';
            ProductsRow.lookupKey = 'DIS.Products';
            function getLookup() {
                return Q.getLookup('DIS.Products');
            }
            ProductsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductsRow.Fields || (ProductsRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductNumber', 'ProductCategoryId', 'ProductTypeId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'ProductCategoryProductCategoryName', 'ProductTypeProductTypeName', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'PartNumber', 'Color', 'UnitStock', 'ManufactureYear', 'ProductAltList'].forEach(function (x) { return Fields[x] = x; });
        })(ProductsRow = DIS.ProductsRow || (DIS.ProductsRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'DIS/Products';
            var Methods;
            (function (Methods) {
            })(Methods = ProductsService.Methods || (ProductsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'ProductBulkAction'].forEach(function (x) {
                ProductsService[x] = function (r, s, o) { return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductsService.baseUrl + '/' + x;
            });
        })(ProductsService = DIS.ProductsService || (DIS.ProductsService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductTypeForm = (function (_super) {
            __extends(ProductTypeForm, _super);
            function ProductTypeForm() {
                _super.apply(this, arguments);
            }
            ProductTypeForm.formKey = 'DIS.ProductType';
            return ProductTypeForm;
        }(Serenity.PrefixedContext));
        DIS.ProductTypeForm = ProductTypeForm;
        [['ProductTypeName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ProductTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductTypeRow;
        (function (ProductTypeRow) {
            ProductTypeRow.idProperty = 'ProductTypeId';
            ProductTypeRow.nameProperty = 'ProductTypeName';
            ProductTypeRow.localTextPrefix = 'DIS.ProductType';
            ProductTypeRow.lookupKey = 'DIS.ProductType';
            function getLookup() {
                return Q.getLookup('DIS.ProductType');
            }
            ProductTypeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductTypeRow.Fields || (ProductTypeRow.Fields = {}));
            ['ProductTypeId', 'ProductTypeName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductTypeRow = DIS.ProductTypeRow || (DIS.ProductTypeRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ProductTypeService;
        (function (ProductTypeService) {
            ProductTypeService.baseUrl = 'DIS/ProductType';
            var Methods;
            (function (Methods) {
            })(Methods = ProductTypeService.Methods || (ProductTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductTypeService[x] = function (r, s, o) { return Q.serviceRequest(ProductTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductTypeService.baseUrl + '/' + x;
            });
        })(ProductTypeService = DIS.ProductTypeService || (DIS.ProductTypeService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailForm = (function (_super) {
            __extends(PurchaseOrderDetailForm, _super);
            function PurchaseOrderDetailForm() {
                _super.apply(this, arguments);
            }
            PurchaseOrderDetailForm.formKey = 'DIS.PurchaseOrderDetail';
            return PurchaseOrderDetailForm;
        }(Serenity.PrefixedContext));
        DIS.PurchaseOrderDetailForm = PurchaseOrderDetailForm;
        [['ProductId', function () { return DIS.ProductLookupEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['ProductPriceId', function () { return Serenity.IntegerEditor; }], ['ProductSerialNumber', function () { return Serenity.StringEditor; }], ['ProductColor', function () { return Serenity.StringEditor; }], ['ProductManufactureYear', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseOrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailRow;
        (function (PurchaseOrderDetailRow) {
            PurchaseOrderDetailRow.idProperty = 'PurchaseOrderDetailId';
            PurchaseOrderDetailRow.localTextPrefix = 'DIS.PurchaseOrderDetail';
            PurchaseOrderDetailRow.lookupKey = 'DIS.PurchaseOrderDetail';
            function getLookup() {
                return Q.getLookup('DIS.PurchaseOrderDetail');
            }
            PurchaseOrderDetailRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseOrderDetailRow.Fields || (PurchaseOrderDetailRow.Fields = {}));
            ['PurchaseOrderDetailId', 'PurchaseOrderId', 'ProductId', 'Quantity', 'ProductPriceId', 'Price', 'LineTotal', 'CostTotal', 'PurchaseOrderPurchaseOrderNumber', 'PurchaseOrderCompanyId', 'PurchaseOrderPurchaseOrderDate', 'PurchaseOrderCostId', 'PurchaseOrderOrderCategoryId', 'PurchaseOrderPurchaseOrderStatus', 'ProductProductName', 'ProductSerialNumber', 'ProductColor', 'ProductManufactureYear', 'ProductProductNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation'].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseOrderDetailRow = DIS.PurchaseOrderDetailRow || (DIS.PurchaseOrderDetailRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderDetailService;
        (function (PurchaseOrderDetailService) {
            PurchaseOrderDetailService.baseUrl = 'DIS/PurchaseOrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseOrderDetailService.Methods || (PurchaseOrderDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PurchaseOrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(PurchaseOrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PurchaseOrderDetailService.baseUrl + '/' + x;
            });
        })(PurchaseOrderDetailService = DIS.PurchaseOrderDetailService || (DIS.PurchaseOrderDetailService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderForm = (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm() {
                _super.apply(this, arguments);
            }
            PurchaseOrderForm.formKey = 'DIS.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        DIS.PurchaseOrderForm = PurchaseOrderForm;
        [['PurchaseOrderNumber', function () { return Serenity.StringEditor; }], ['PurchaseOrderDate', function () { return Serenity.DateEditor; }], ['OrderCategoryId', function () { return Serenity.LookupEditor; }], ['ProductTypeId', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return DIS.PurchaseOrderDetailEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseOrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'PurchaseOrderId';
            PurchaseOrderRow.nameProperty = 'PurchaseOrderNumber';
            PurchaseOrderRow.localTextPrefix = 'DIS.PurchaseOrder';
            PurchaseOrderRow.lookupKey = 'DIS.PurchaseOrder';
            function getLookup() {
                return Q.getLookup('DIS.PurchaseOrder');
            }
            PurchaseOrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseOrderRow.Fields || (PurchaseOrderRow.Fields = {}));
            ['PurchaseOrderId', 'PurchaseOrderNumber', 'CompanyId', 'PurchaseOrderDate', 'CostId', 'OrderCategoryId', 'PurchaseOrderOrderCategoryName', 'PurchaseOrderStatus', 'CostCostName', 'CostAmount', 'CostPercentage', 'ProductTypeId', 'ProductTypeName', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseOrderRow = DIS.PurchaseOrderRow || (DIS.PurchaseOrderRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'DIS/PurchaseOrder';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseOrderService.Methods || (PurchaseOrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) { return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PurchaseOrderService.baseUrl + '/' + x;
            });
        })(PurchaseOrderService = DIS.PurchaseOrderService || (DIS.PurchaseOrderService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDetailForm = (function (_super) {
            __extends(ReceiveOrderDetailForm, _super);
            function ReceiveOrderDetailForm() {
                _super.apply(this, arguments);
            }
            ReceiveOrderDetailForm.formKey = 'DIS.ReceiveOrderDetail';
            return ReceiveOrderDetailForm;
        }(Serenity.PrefixedContext));
        DIS.ReceiveOrderDetailForm = ReceiveOrderDetailForm;
        [['ReceiveOrderId', function () { return Serenity.IntegerEditor; }], ['ProductId', function () { return DIS.ProductLookupEditor; }], ['POQty', function () { return Serenity.IntegerEditor; }], ['BackOrderQty', function () { return Serenity.IntegerEditor; }], ['Price', function () { return Serenity.StringEditor; }], ['BinLocation', function () { return Serenity.StringEditor; }], ['ReceiveComplete', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(ReceiveOrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDetailRow;
        (function (ReceiveOrderDetailRow) {
            ReceiveOrderDetailRow.idProperty = 'ReceiveOrderDetailId';
            ReceiveOrderDetailRow.nameProperty = 'ReceiveOrderNumber';
            ReceiveOrderDetailRow.localTextPrefix = 'DIS.ReceiveOrderDetail';
            ReceiveOrderDetailRow.lookupKey = 'DIS.ReceiveOrderDetail';
            function getLookup() {
                return Q.getLookup('DIS.ReceiveOrderDetail');
            }
            ReceiveOrderDetailRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReceiveOrderDetailRow.Fields || (ReceiveOrderDetailRow.Fields = {}));
            ['ReceiveOrderDetailId', 'ReceiveOrderId', 'ProductId', 'ReceiveQty', 'BackOrderQty', 'POQty', 'Price', 'ProductName', 'BinLocation', 'ReceiveComplete', 'ReceiveOrderNumber', 'ReceiveOrderPurchaseOrderId', 'ReceiveOrderReceiveDate', 'ReceiveOrderReceiveBy', 'ReceiveOrderAcknowledgeBy', 'ReceiveOrderReceiveOrderStatus'].forEach(function (x) { return Fields[x] = x; });
        })(ReceiveOrderDetailRow = DIS.ReceiveOrderDetailRow || (DIS.ReceiveOrderDetailRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderDetailService;
        (function (ReceiveOrderDetailService) {
            ReceiveOrderDetailService.baseUrl = 'DIS/ReceiveOrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = ReceiveOrderDetailService.Methods || (ReceiveOrderDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ReceiveOrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(ReceiveOrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ReceiveOrderDetailService.baseUrl + '/' + x;
            });
        })(ReceiveOrderDetailService = DIS.ReceiveOrderDetailService || (DIS.ReceiveOrderDetailService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderForm = (function (_super) {
            __extends(ReceiveOrderForm, _super);
            function ReceiveOrderForm() {
                _super.apply(this, arguments);
            }
            ReceiveOrderForm.formKey = 'DIS.ReceiveOrder';
            return ReceiveOrderForm;
        }(Serenity.PrefixedContext));
        DIS.ReceiveOrderForm = ReceiveOrderForm;
        [['ReceiveOrderNumber', function () { return Serenity.StringEditor; }], ['ReceiveDate', function () { return Serenity.DateEditor; }], ['ReceiveBy', function () { return Serenity.StringEditor; }], ['AcknowledgeBy', function () { return Serenity.StringEditor; }], ['DetailList', function () { return DIS.ReceiveOrderDetailEditor; }]].forEach(function (x) { return Object.defineProperty(ReceiveOrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderRow;
        (function (ReceiveOrderRow) {
            ReceiveOrderRow.idProperty = 'ReceiveOrderId';
            ReceiveOrderRow.nameProperty = 'ReceiveOrderNumber';
            ReceiveOrderRow.localTextPrefix = 'DIS.ReceiveOrder';
            ReceiveOrderRow.lookupKey = 'DIS.ReceiveOrder';
            function getLookup() {
                return Q.getLookup('DIS.ReceiveOrder');
            }
            ReceiveOrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ReceiveOrderRow.Fields || (ReceiveOrderRow.Fields = {}));
            ['ReceiveOrderId', 'ReceiveOrderNumber', 'PurchaseOrderId', 'ReceiveDate', 'ReceiveBy', 'AcknowledgeBy', 'ReceiveOrderStatus', 'PurchaseOrderPurchaseOrderNumber', 'PurchaseOrderCompanyId', 'PurchaseOrderPurchaseOrderDate', 'PurchaseOrderCostId', 'PurchaseOrderOrderCategoryId', 'PurchaseOrderPurchaseOrderStatus', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(ReceiveOrderRow = DIS.ReceiveOrderRow || (DIS.ReceiveOrderRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ReceiveOrderService;
        (function (ReceiveOrderService) {
            ReceiveOrderService.baseUrl = 'DIS/ReceiveOrder';
            var Methods;
            (function (Methods) {
            })(Methods = ReceiveOrderService.Methods || (ReceiveOrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ReceiveOrderService[x] = function (r, s, o) { return Q.serviceRequest(ReceiveOrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ReceiveOrderService.baseUrl + '/' + x;
            });
        })(ReceiveOrderService = DIS.ReceiveOrderService || (DIS.ReceiveOrderService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var RevenueForm = (function (_super) {
            __extends(RevenueForm, _super);
            function RevenueForm() {
                _super.apply(this, arguments);
            }
            RevenueForm.formKey = 'DIS.Revenue';
            return RevenueForm;
        }(Serenity.PrefixedContext));
        DIS.RevenueForm = RevenueForm;
        [['PurchaseOrderId', function () { return Serenity.IntegerEditor; }], ['OrderId', function () { return Serenity.IntegerEditor; }], ['Credit', function () { return Serenity.DecimalEditor; }], ['Debit', function () { return Serenity.DecimalEditor; }], ['EntryDate', function () { return Serenity.DateEditor; }], ['DocumentNo', function () { return Serenity.StringEditor; }], ['CancelationStatus', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(RevenueForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var RevenueRow;
        (function (RevenueRow) {
            RevenueRow.idProperty = 'RevenueId';
            RevenueRow.nameProperty = 'DocumentNo';
            RevenueRow.localTextPrefix = 'DIS.Revenue';
            var Fields;
            (function (Fields) {
            })(Fields = RevenueRow.Fields || (RevenueRow.Fields = {}));
            ['RevenueId', 'PurchaseOrderId', 'OrderId', 'Credit', 'Debit', 'EntryDate', 'DocumentNo', 'CancelationStatus', 'PurchaseOrderPurchaseOrderNumber', 'PurchaseOrderCompanyId', 'PurchaseOrderPurchaseOrderDate', 'PurchaseOrderCostId', 'PurchaseOrderOrderCategoryId', 'PurchaseOrderPurchaseOrderStatus', 'OrderOrderNumber', 'OrderOrderDate', 'OrderCustomerDealerId', 'OrderUserId', 'OrderProductTypeId', 'OrderPaymentService'].forEach(function (x) { return Fields[x] = x; });
        })(RevenueRow = DIS.RevenueRow || (DIS.RevenueRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var RevenueService;
        (function (RevenueService) {
            RevenueService.baseUrl = 'DIS/Revenue';
            var Methods;
            (function (Methods) {
            })(Methods = RevenueService.Methods || (RevenueService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RevenueService[x] = function (r, s, o) { return Q.serviceRequest(RevenueService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RevenueService.baseUrl + '/' + x;
            });
        })(RevenueService = DIS.RevenueService || (DIS.RevenueService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailForm = (function (_super) {
            __extends(ServiceUnitDetailForm, _super);
            function ServiceUnitDetailForm() {
                _super.apply(this, arguments);
            }
            ServiceUnitDetailForm.formKey = 'DIS.ServiceUnitDetail';
            return ServiceUnitDetailForm;
        }(Serenity.PrefixedContext));
        DIS.ServiceUnitDetailForm = ServiceUnitDetailForm;
        [['ServiceCharge', function () { return Serenity.DecimalEditor; }], ['KmInUse', function () { return Serenity.IntegerEditor; }], ['ServiceDate', function () { return Serenity.DateEditor; }], ['DetailList', function () { return DIS.OrderDetailEditor; }]].forEach(function (x) { return Object.defineProperty(ServiceUnitDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailRow;
        (function (ServiceUnitDetailRow) {
            ServiceUnitDetailRow.idProperty = 'ServiceUnitDetailId';
            ServiceUnitDetailRow.localTextPrefix = 'DIS.ServiceUnitDetail';
            var Fields;
            (function (Fields) {
            })(Fields = ServiceUnitDetailRow.Fields || (ServiceUnitDetailRow.Fields = {}));
            ['ServiceUnitDetailId', 'ServiceUnitId', 'ServiceCharge', 'KmInUse', 'ServiceDate', 'ServiceUnitProductId', 'ServiceUnitCustomerDealerId', 'ServiceUnitOrderUnitId', 'OrderIDService', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(ServiceUnitDetailRow = DIS.ServiceUnitDetailRow || (DIS.ServiceUnitDetailRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitDetailService;
        (function (ServiceUnitDetailService) {
            ServiceUnitDetailService.baseUrl = 'DIS/ServiceUnitDetail';
            var Methods;
            (function (Methods) {
            })(Methods = ServiceUnitDetailService.Methods || (ServiceUnitDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ServiceUnitDetailService[x] = function (r, s, o) { return Q.serviceRequest(ServiceUnitDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ServiceUnitDetailService.baseUrl + '/' + x;
            });
        })(ServiceUnitDetailService = DIS.ServiceUnitDetailService || (DIS.ServiceUnitDetailService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitForm = (function (_super) {
            __extends(ServiceUnitForm, _super);
            function ServiceUnitForm() {
                _super.apply(this, arguments);
            }
            ServiceUnitForm.formKey = 'DIS.ServiceUnit';
            return ServiceUnitForm;
        }(Serenity.PrefixedContext));
        DIS.ServiceUnitForm = ServiceUnitForm;
        [['DetailList', function () { return DIS.ServiceUnitDetailEditor; }]].forEach(function (x) { return Object.defineProperty(ServiceUnitForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitRow;
        (function (ServiceUnitRow) {
            ServiceUnitRow.idProperty = 'ServiceUnitId';
            ServiceUnitRow.localTextPrefix = 'DIS.ServiceUnit';
            ServiceUnitRow.lookupKey = 'DIS.ServiceUnit';
            function getLookup() {
                return Q.getLookup('DIS.ServiceUnit');
            }
            ServiceUnitRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ServiceUnitRow.Fields || (ServiceUnitRow.Fields = {}));
            ['ServiceUnitId', 'ProductId', 'CustomerDealerId', 'OrderUnitId', 'ProductProductName', 'ProductProductNumber', 'ProductPartNumber', 'ProductProductCategoryId', 'ProductProductTypeId', 'ProductDiscontinued', 'ProductProductImage', 'ProductDescription', 'ProductBinLocation', 'ProductMerek', 'ProductPoliceNumber', 'ProductMachineNo', 'ProductSerialNumber', 'ProductColor', 'ProductManufactureYear', 'CustomerDealerCustomerDealerName', 'CustomerDealerAddress', 'OrderUnitOrderNumber', 'OrderUnitOrderDate', 'OrderUnitCustomerDealerId', 'OrderUnitUserId', 'OrderUnitProductTypeId', 'OrderUnitKmInUse', 'OrderUnitPaymentService', 'OrderUnitOrderStatus', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(ServiceUnitRow = DIS.ServiceUnitRow || (DIS.ServiceUnitRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ServiceUnitService;
        (function (ServiceUnitService) {
            ServiceUnitService.baseUrl = 'DIS/ServiceUnit';
            var Methods;
            (function (Methods) {
            })(Methods = ServiceUnitService.Methods || (ServiceUnitService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ServiceUnitService[x] = function (r, s, o) { return Q.serviceRequest(ServiceUnitService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ServiceUnitService.baseUrl + '/' + x;
            });
        })(ServiceUnitService = DIS.ServiceUnitService || (DIS.ServiceUnitService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                _super.apply(this, arguments);
            }
            SupplierForm.formKey = 'DIS.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        DIS.SupplierForm = SupplierForm;
        [['SupplierName', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierId';
            SupplierRow.nameProperty = 'SupplierName';
            SupplierRow.localTextPrefix = 'DIS.Supplier';
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierId', 'SupplierName', 'Address', 'Phone', 'ContactName'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = DIS.SupplierRow || (DIS.SupplierRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'DIS/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = DIS.SupplierService || (DIS.SupplierService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewOrdersForm = (function (_super) {
            __extends(ViewOrdersForm, _super);
            function ViewOrdersForm() {
                _super.apply(this, arguments);
            }
            ViewOrdersForm.formKey = 'DIS.ViewOrders';
            return ViewOrdersForm;
        }(Serenity.PrefixedContext));
        DIS.ViewOrdersForm = ViewOrdersForm;
        [['OrderId', function () { return Serenity.IntegerEditor; }], ['OrderNumber', function () { return Serenity.StringEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['CustomerDealerId', function () { return Serenity.IntegerEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['ProductTypeId', function () { return Serenity.IntegerEditor; }], ['KmInUse', function () { return Serenity.IntegerEditor; }], ['PaymentService', function () { return Serenity.DecimalEditor; }], ['OrderStatus', function () { return Serenity.StringEditor; }], ['OrderDetailId', function () { return Serenity.IntegerEditor; }], ['ProductId', function () { return Serenity.IntegerEditor; }], ['OrderQty', function () { return Serenity.IntegerEditor; }], ['ProductPriceId', function () { return Serenity.IntegerEditor; }], ['CostId', function () { return Serenity.IntegerEditor; }], ['OrderCategoryId', function () { return Serenity.IntegerEditor; }], ['BasePrice', function () { return Serenity.DecimalEditor; }], ['Total', function () { return Serenity.DecimalEditor; }], ['Ppn', function () { return Serenity.DecimalEditor; }], ['ServiceQuantity', function () { return Serenity.IntegerEditor; }], ['ServiceUnitDetailId', function () { return Serenity.IntegerEditor; }], ['CustomerDealerName', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['ProductTypeName', function () { return Serenity.StringEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['ProductNumber', function () { return Serenity.StringEditor; }], ['PartNumber', function () { return Serenity.StringEditor; }], ['ProductCategoryId', function () { return Serenity.IntegerEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['ProductImage', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['BinLocation', function () { return Serenity.StringEditor; }], ['Merek', function () { return Serenity.StringEditor; }], ['PoliceNumber', function () { return Serenity.StringEditor; }], ['MachineNo', function () { return Serenity.StringEditor; }], ['SerialNumber', function () { return Serenity.StringEditor; }], ['Color', function () { return Serenity.StringEditor; }], ['ManufactureYear', function () { return Serenity.IntegerEditor; }], ['ServiceUnitId', function () { return Serenity.IntegerEditor; }], ['ServiceCharge', function () { return Serenity.DecimalEditor; }], ['ServiceDate', function () { return Serenity.DateEditor; }], ['OrderIdService', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ViewOrdersForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewOrdersRow;
        (function (ViewOrdersRow) {
            ViewOrdersRow.nameProperty = 'OrderNumber';
            ViewOrdersRow.localTextPrefix = 'DIS.ViewOrders';
            var Fields;
            (function (Fields) {
            })(Fields = ViewOrdersRow.Fields || (ViewOrdersRow.Fields = {}));
            ['OrderId', 'OrderNumber', 'OrderDate', 'CustomerDealerId', 'UserId', 'ProductTypeId', 'KmInUse', 'PaymentService', 'OrderStatus', 'OrderDetailId', 'ProductId', 'OrderQty', 'ProductPriceId', 'CostId', 'OrderCategoryId', 'BasePrice', 'Total', 'Ppn', 'ServiceQuantity', 'ServiceUnitDetailId', 'CustomerDealerName', 'Address', 'ProductTypeName', 'ProductName', 'ProductNumber', 'PartNumber', 'ProductCategoryId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'Color', 'ManufactureYear', 'ServiceUnitId', 'ServiceCharge', 'ServiceDate', 'OrderIdService'].forEach(function (x) { return Fields[x] = x; });
        })(ViewOrdersRow = DIS.ViewOrdersRow || (DIS.ViewOrdersRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewOrdersService;
        (function (ViewOrdersService) {
            ViewOrdersService.baseUrl = 'DIS/ViewOrders';
            var Methods;
            (function (Methods) {
            })(Methods = ViewOrdersService.Methods || (ViewOrdersService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                ViewOrdersService[x] = function (r, s, o) { return Q.serviceRequest(ViewOrdersService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ViewOrdersService.baseUrl + '/' + x;
            });
        })(ViewOrdersService = DIS.ViewOrdersService || (DIS.ViewOrdersService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductStockForm = (function (_super) {
            __extends(ViewProductStockForm, _super);
            function ViewProductStockForm() {
                _super.apply(this, arguments);
            }
            ViewProductStockForm.formKey = 'DIS.ViewProductStock';
            return ViewProductStockForm;
        }(Serenity.PrefixedContext));
        DIS.ViewProductStockForm = ViewProductStockForm;
        [['ProductId', function () { return Serenity.IntegerEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['ProductNumber', function () { return Serenity.StringEditor; }], ['ProductTypeName', function () { return Serenity.StringEditor; }], ['TotalIn', function () { return Serenity.IntegerEditor; }], ['TotalOut', function () { return Serenity.IntegerEditor; }], ['Stock', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ViewProductStockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductStockRow;
        (function (ViewProductStockRow) {
            ViewProductStockRow.nameProperty = 'ProductName';
            ViewProductStockRow.localTextPrefix = 'DIS.ViewProductStock';
            ViewProductStockRow.lookupKey = 'DIS.ViewProductStock';
            function getLookup() {
                return Q.getLookup('DIS.ViewProductStock');
            }
            ViewProductStockRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ViewProductStockRow.Fields || (ViewProductStockRow.Fields = {}));
            ['ProductId', 'ProductName', 'ProductNumber', 'ProductTypeName', 'TotalIn', 'TotalOut', 'Stock', 'ProductTypeId', 'ProductTypeNameDesc'].forEach(function (x) { return Fields[x] = x; });
        })(ViewProductStockRow = DIS.ViewProductStockRow || (DIS.ViewProductStockRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductStockService;
        (function (ViewProductStockService) {
            ViewProductStockService.baseUrl = 'DIS/ViewProductStock';
            var Methods;
            (function (Methods) {
            })(Methods = ViewProductStockService.Methods || (ViewProductStockService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                ViewProductStockService[x] = function (r, s, o) { return Q.serviceRequest(ViewProductStockService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ViewProductStockService.baseUrl + '/' + x;
            });
        })(ViewProductStockService = DIS.ViewProductStockService || (DIS.ViewProductStockService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitForm = (function (_super) {
            __extends(ViewProductUnitForm, _super);
            function ViewProductUnitForm() {
                _super.apply(this, arguments);
            }
            ViewProductUnitForm.formKey = 'DIS.ViewProductUnit';
            return ViewProductUnitForm;
        }(Serenity.PrefixedContext));
        DIS.ViewProductUnitForm = ViewProductUnitForm;
        [['OrderNumber', function () { return Serenity.StringEditor; }], ['CustomerDealerName', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['SerialNumber', function () { return Serenity.StringEditor; }], ['ManufactureYear', function () { return Serenity.IntegerEditor; }], ['Color', function () { return Serenity.StringEditor; }], ['OrderId', function () { return Serenity.IntegerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }]].forEach(function (x) { return Object.defineProperty(ViewProductUnitForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitOrderForm = (function (_super) {
            __extends(ViewProductUnitOrderForm, _super);
            function ViewProductUnitOrderForm() {
                _super.apply(this, arguments);
            }
            ViewProductUnitOrderForm.formKey = 'DIS.ViewProductUnitOrder';
            return ViewProductUnitOrderForm;
        }(Serenity.PrefixedContext));
        DIS.ViewProductUnitOrderForm = ViewProductUnitOrderForm;
        [['OrderDetailId', function () { return Serenity.IntegerEditor; }], ['OrderId', function () { return Serenity.IntegerEditor; }], ['ProductId', function () { return Serenity.IntegerEditor; }], ['OrderQty', function () { return Serenity.IntegerEditor; }], ['ProductPriceId', function () { return Serenity.IntegerEditor; }], ['CostId', function () { return Serenity.IntegerEditor; }], ['OrderCategoryId', function () { return Serenity.IntegerEditor; }], ['BasePrice', function () { return Serenity.DecimalEditor; }], ['Total', function () { return Serenity.DecimalEditor; }], ['Ppn', function () { return Serenity.DecimalEditor; }], ['KmInUse', function () { return Serenity.IntegerEditor; }], ['ServiceQuantity', function () { return Serenity.IntegerEditor; }], ['OrderNumber', function () { return Serenity.StringEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['CustomerDealerId', function () { return Serenity.IntegerEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['ProductTypeId', function () { return Serenity.IntegerEditor; }], ['ProductUnitId', function () { return Serenity.IntegerEditor; }], ['OrderProductSerialNumber', function () { return Serenity.StringEditor; }], ['OrderProductColor', function () { return Serenity.StringEditor; }], ['OrderProductManufactureYear', function () { return Serenity.IntegerEditor; }], ['PaymentService', function () { return Serenity.DecimalEditor; }], ['OrderStatus', function () { return Serenity.StringEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['ProductNumber', function () { return Serenity.StringEditor; }], ['PartNumber', function () { return Serenity.StringEditor; }], ['ProductCategoryId', function () { return Serenity.IntegerEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['ProductImage', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['BinLocation', function () { return Serenity.StringEditor; }], ['Merek', function () { return Serenity.StringEditor; }], ['PoliceNumber', function () { return Serenity.StringEditor; }], ['MachineNo', function () { return Serenity.StringEditor; }], ['SerialNumber', function () { return Serenity.StringEditor; }], ['Color', function () { return Serenity.StringEditor; }], ['ManufactureYear', function () { return Serenity.IntegerEditor; }], ['ProductTypeName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ViewProductUnitOrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitOrderRow;
        (function (ViewProductUnitOrderRow) {
            ViewProductUnitOrderRow.idProperty = 'OrderDetailId';
            ViewProductUnitOrderRow.nameProperty = 'OrderNumber';
            ViewProductUnitOrderRow.localTextPrefix = 'DIS.ViewProductUnitOrder';
            ViewProductUnitOrderRow.lookupKey = 'DIS.ProductUnitLookup1';
            function getLookup() {
                return Q.getLookup('DIS.ProductUnitLookup1');
            }
            ViewProductUnitOrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ViewProductUnitOrderRow.Fields || (ViewProductUnitOrderRow.Fields = {}));
            ['OrderDetailId', 'OrderId', 'ProductId', 'OrderQty', 'ProductPriceId', 'CostId', 'OrderCategoryId', 'BasePrice', 'Total', 'Ppn', 'KmInUse', 'ServiceQuantity', 'OrderNumber', 'OrderDate', 'CustomerDealerId', 'UserId', 'ProductTypeId', 'ProductUnitId', 'OrderProductSerialNumber', 'OrderProductColor', 'OrderProductManufactureYear', 'PaymentService', 'OrderStatus', 'ProductName', 'ProductNumber', 'ProductNumberName', 'PartNumber', 'ProductCategoryId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'Color', 'ManufactureYear', 'ProductTypeName'].forEach(function (x) { return Fields[x] = x; });
        })(ViewProductUnitOrderRow = DIS.ViewProductUnitOrderRow || (DIS.ViewProductUnitOrderRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitOrderService;
        (function (ViewProductUnitOrderService) {
            ViewProductUnitOrderService.baseUrl = 'DIS/ViewProductUnitOrder';
            var Methods;
            (function (Methods) {
            })(Methods = ViewProductUnitOrderService.Methods || (ViewProductUnitOrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ViewProductUnitOrderService[x] = function (r, s, o) { return Q.serviceRequest(ViewProductUnitOrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ViewProductUnitOrderService.baseUrl + '/' + x;
            });
        })(ViewProductUnitOrderService = DIS.ViewProductUnitOrderService || (DIS.ViewProductUnitOrderService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitRow;
        (function (ViewProductUnitRow) {
            ViewProductUnitRow.nameProperty = 'OrderNumber';
            ViewProductUnitRow.localTextPrefix = 'DIS.ViewProductUnit';
            var Fields;
            (function (Fields) {
            })(Fields = ViewProductUnitRow.Fields || (ViewProductUnitRow.Fields = {}));
            ['OrderNumber', 'CustomerDealerName', 'Address', 'ProductName', 'SerialNumber', 'ManufactureYear', 'Color', 'OrderId', 'OrderDetailId', 'OrderDate'].forEach(function (x) { return Fields[x] = x; });
        })(ViewProductUnitRow = DIS.ViewProductUnitRow || (DIS.ViewProductUnitRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewProductUnitService;
        (function (ViewProductUnitService) {
            ViewProductUnitService.baseUrl = 'DIS/ViewProductUnit';
            var Methods;
            (function (Methods) {
            })(Methods = ViewProductUnitService.Methods || (ViewProductUnitService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                ViewProductUnitService[x] = function (r, s, o) { return Q.serviceRequest(ViewProductUnitService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ViewProductUnitService.baseUrl + '/' + x;
            });
        })(ViewProductUnitService = DIS.ViewProductUnitService || (DIS.ViewProductUnitService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderDetailForm = (function (_super) {
            __extends(ViewPurchaseOrderDetailForm, _super);
            function ViewPurchaseOrderDetailForm() {
                _super.apply(this, arguments);
            }
            ViewPurchaseOrderDetailForm.formKey = 'DIS.ViewPurchaseOrderDetail';
            return ViewPurchaseOrderDetailForm;
        }(Serenity.PrefixedContext));
        DIS.ViewPurchaseOrderDetailForm = ViewPurchaseOrderDetailForm;
        [['PurchaseOrderDetailId', function () { return Serenity.IntegerEditor; }], ['PurchaseOrderId', function () { return Serenity.IntegerEditor; }], ['ProductId', function () { return Serenity.IntegerEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['Ppn', function () { return Serenity.DecimalEditor; }], ['Total', function () { return Serenity.DecimalEditor; }], ['ProductPriceId', function () { return Serenity.IntegerEditor; }], ['ProductName', function () { return Serenity.StringEditor; }], ['ProductNumber', function () { return Serenity.StringEditor; }], ['PartNumber', function () { return Serenity.StringEditor; }], ['ProductCategoryId', function () { return Serenity.IntegerEditor; }], ['ProductTypeId', function () { return Serenity.IntegerEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['ProductImage', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['BinLocation', function () { return Serenity.StringEditor; }], ['Merek', function () { return Serenity.StringEditor; }], ['PoliceNumber', function () { return Serenity.StringEditor; }], ['MachineNo', function () { return Serenity.StringEditor; }], ['SerialNumber', function () { return Serenity.StringEditor; }], ['Color', function () { return Serenity.StringEditor; }], ['ManufactureYear', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ViewPurchaseOrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderDetailRow;
        (function (ViewPurchaseOrderDetailRow) {
            ViewPurchaseOrderDetailRow.idProperty = 'PurchaseOrderDetailId';
            ViewPurchaseOrderDetailRow.nameProperty = 'ProductName';
            ViewPurchaseOrderDetailRow.localTextPrefix = 'DIS.ViewPurchaseOrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = ViewPurchaseOrderDetailRow.Fields || (ViewPurchaseOrderDetailRow.Fields = {}));
            ['PurchaseOrderDetailId', 'PurchaseOrderId', 'ProductId', 'Quantity', 'Price', 'Ppn', 'Total', 'ProductPriceId', 'ProductName', 'ProductNumber', 'PartNumber', 'ProductCategoryId', 'ProductTypeId', 'Discontinued', 'ProductImage', 'Description', 'BinLocation', 'Merek', 'PoliceNumber', 'MachineNo', 'SerialNumber', 'Color', 'ManufactureYear'].forEach(function (x) { return Fields[x] = x; });
        })(ViewPurchaseOrderDetailRow = DIS.ViewPurchaseOrderDetailRow || (DIS.ViewPurchaseOrderDetailRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderDetailService;
        (function (ViewPurchaseOrderDetailService) {
            ViewPurchaseOrderDetailService.baseUrl = 'DIS/ViewPurchaseOrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = ViewPurchaseOrderDetailService.Methods || (ViewPurchaseOrderDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ViewPurchaseOrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(ViewPurchaseOrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ViewPurchaseOrderDetailService.baseUrl + '/' + x;
            });
        })(ViewPurchaseOrderDetailService = DIS.ViewPurchaseOrderDetailService || (DIS.ViewPurchaseOrderDetailService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderForm = (function (_super) {
            __extends(ViewPurchaseOrderForm, _super);
            function ViewPurchaseOrderForm() {
                _super.apply(this, arguments);
            }
            ViewPurchaseOrderForm.formKey = 'DIS.ViewPurchaseOrder';
            return ViewPurchaseOrderForm;
        }(Serenity.PrefixedContext));
        DIS.ViewPurchaseOrderForm = ViewPurchaseOrderForm;
        [['PurchaseOrderId', function () { return Serenity.IntegerEditor; }], ['PurchaseOrderNumber', function () { return Serenity.StringEditor; }], ['CompanyId', function () { return Serenity.IntegerEditor; }], ['PurchaseOrderDate', function () { return Serenity.DateEditor; }], ['CostId', function () { return Serenity.IntegerEditor; }], ['OrderCategoryId', function () { return Serenity.IntegerEditor; }], ['PurchaseOrderStatus', function () { return Serenity.StringEditor; }], ['OrderCategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['Logo', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(ViewPurchaseOrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderRow;
        (function (ViewPurchaseOrderRow) {
            ViewPurchaseOrderRow.idProperty = 'PurchaseOrderId';
            ViewPurchaseOrderRow.nameProperty = 'PurchaseOrderNumber';
            ViewPurchaseOrderRow.localTextPrefix = 'DIS.ViewPurchaseOrder';
            var Fields;
            (function (Fields) {
            })(Fields = ViewPurchaseOrderRow.Fields || (ViewPurchaseOrderRow.Fields = {}));
            ['PurchaseOrderId', 'PurchaseOrderNumber', 'CompanyId', 'PurchaseOrderDate', 'CostId', 'OrderCategoryId', 'PurchaseOrderStatus', 'OrderCategoryName', 'Description', 'CompanyName', 'Address', 'Fax', 'Logo', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(ViewPurchaseOrderRow = DIS.ViewPurchaseOrderRow || (DIS.ViewPurchaseOrderRow = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DIS;
    (function (DIS) {
        var ViewPurchaseOrderService;
        (function (ViewPurchaseOrderService) {
            ViewPurchaseOrderService.baseUrl = 'DIS/ViewPurchaseOrder';
            var Methods;
            (function (Methods) {
            })(Methods = ViewPurchaseOrderService.Methods || (ViewPurchaseOrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ViewPurchaseOrderService[x] = function (r, s, o) { return Q.serviceRequest(ViewPurchaseOrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ViewPurchaseOrderService.baseUrl + '/' + x;
            });
        })(ViewPurchaseOrderService = DIS.ViewPurchaseOrderService || (DIS.ViewPurchaseOrderService = {}));
    })(DIS = KBT.DIS || (KBT.DIS = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                _super.apply(this, arguments);
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                _super.apply(this, arguments);
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                _super.apply(this, arguments);
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                _super.apply(this, arguments);
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                _super.apply(this, arguments);
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = KBT.Membership || (KBT.Membership = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                _super.apply(this, arguments);
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryLangService.Methods || (CategoryLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) { return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryLangService.baseUrl + '/' + x;
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryID', 'CategoryName', 'Description', 'Picture'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'RetrieveLocalization', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerCustomerDemoRow.Fields || (CustomerCustomerDemoRow.Fields = {}));
            ['ID', 'CustomerID', 'CustomerTypeID', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerTypeCustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDemographicRow.Fields || (CustomerDemographicRow.Fields = {}));
            ['ID', 'CustomerTypeID', 'CustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                _super.apply(this, arguments);
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
        [['CustomerID', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['NoteList', function () { return Northwind.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'CustomerRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Photo', 'Notes', 'ReportsTo', 'PhotoPath', 'ReportsToFullName', 'ReportsToLastName', 'ReportsToFirstName', 'ReportsToTitle', 'ReportsToTitleOfCourtesy', 'ReportsToBirthDate', 'ReportsToHireDate', 'ReportsToAddress', 'ReportsToCity', 'ReportsToRegion', 'ReportsToPostalCode', 'ReportsToCountry', 'ReportsToHomePhone', 'ReportsToExtension', 'ReportsToPhoto', 'ReportsToNotes', 'ReportsToReportsTo', 'ReportsToPhotoPath', 'Gender'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTerritoryRow.Fields || (EmployeeTerritoryRow.Fields = {}));
            ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeTitle', 'EmployeeTitleOfCourtesy', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeRegion', 'EmployeePostalCode', 'EmployeeCountry', 'EmployeeHomePhone', 'EmployeeExtension', 'EmployeePhoto', 'EmployeeNotes', 'EmployeeReportsTo', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Northwind.Gender || (Northwind.Gender = {}));
        var Gender = Northwind.Gender;
        Serenity.Decorators.registerEnum(Gender, 'KBT.Northwind.Entities.Gender');
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                _super.apply(this, arguments);
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                _super.apply(this, arguments);
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
        [['CustomerID', function () { return Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Northwind.OrderDetailsEditor; }], ['ShippedDate', function () { return Serenity.DateEditor; }], ['ShipVia', function () { return Serenity.LookupEditor; }], ['Freight', function () { return Serenity.DecimalEditor; }], ['ShipName', function () { return Serenity.StringEditor; }], ['ShipAddress', function () { return Serenity.StringEditor; }], ['ShipCity', function () { return Serenity.StringEditor; }], ['ShipRegion', function () { return Serenity.StringEditor; }], ['ShipPostalCode', function () { return Serenity.StringEditor; }], ['ShipCountry', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.lookupKey = 'Northwind.OrderShipCity';
            function getLookup() {
                return Q.getLookup('Northwind.OrderShipCity');
            }
            OrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            var Methods;
            (function (Methods) {
            })(Methods = OrderService.Methods || (OrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderService[x] = function (r, s, o) { return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderService.baseUrl + '/' + x;
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        var OrderShippingState = Northwind.OrderShippingState;
        Serenity.Decorators.registerEnum(OrderShippingState, 'Northwind.OrderShippingState');
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                _super.apply(this, arguments);
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ['Id', 'ProductId', 'LanguageId', 'ProductName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLangService.Methods || (ProductLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) { return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLangService.baseUrl + '/' + x;
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ['ProductLogID', 'OperationType', 'ChangingUserId', 'ValidFrom', 'ValidUntil', 'ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'CategoryName', 'CategoryDescription', 'CategoryPicture'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'RetrieveLocalization', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm() {
                _super.apply(this, arguments);
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
        [['RegionID', function () { return Serenity.IntegerEditor; }], ['RegionDescription', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RegionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RegionRow.Fields || (RegionRow.Fields = {}));
            ['RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            var Methods;
            (function (Methods) {
            })(Methods = RegionService.Methods || (RegionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RegionService[x] = function (r, s, o) { return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RegionService.baseUrl + '/' + x;
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            var Fields;
            (function (Fields) {
            })(Fields = SalesByCategoryRow.Fields || (SalesByCategoryRow.Fields = {}));
            ['CategoryId', 'CategoryName', 'ProductName', 'ProductSales'].forEach(function (x) { return Fields[x] = x; });
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            var Methods;
            (function (Methods) {
            })(Methods = SalesByCategoryService.Methods || (SalesByCategoryService.Methods = {}));
            ['List'].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) { return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SalesByCategoryService.baseUrl + '/' + x;
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                _super.apply(this, arguments);
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Phone', function () { return Northwind.PhoneEditor; }]].forEach(function (x) { return Object.defineProperty(ShipperForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ['ShipperID', 'CompanyName', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            var Methods;
            (function (Methods) {
            })(Methods = ShipperService.Methods || (ShipperService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShipperService[x] = function (r, s, o) { return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShipperService.baseUrl + '/' + x;
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                _super.apply(this, arguments);
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['HomePage', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm() {
                _super.apply(this, arguments);
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
        [['TerritoryID', function () { return Serenity.StringEditor; }], ['TerritoryDescription', function () { return Serenity.StringEditor; }], ['RegionID', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(TerritoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TerritoryRow.Fields || (TerritoryRow.Fields = {}));
            ['ID', 'TerritoryID', 'TerritoryDescription', 'RegionID', 'RegionDescription'].forEach(function (x) { return Fields[x] = x; });
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            var Methods;
            (function (Methods) {
            })(Methods = TerritoryService.Methods || (TerritoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) { return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TerritoryService.baseUrl + '/' + x;
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = KBT.Northwind || (KBT.Northwind = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = this;
            _super.call(this);
            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    KBT.BasicProgressDialog = BasicProgressDialog;
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = KBT.DialogUtils || (KBT.DialogUtils = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var ImportExcelServiceAction = (function () {
            function ImportExcelServiceAction() {
            }
            ImportExcelServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new KBT.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            ImportExcelServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            ImportExcelServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            ImportExcelServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            ImportExcelServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            ImportExcelServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            ImportExcelServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            ImportExcelServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            ImportExcelServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            ImportExcelServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            ImportExcelServiceAction.prototype.executeForBatch = function (batch) {
            };
            ImportExcelServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            ImportExcelServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            ImportExcelServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            ImportExcelServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            ImportExcelServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            ImportExcelServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            ImportExcelServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            ImportExcelServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            ImportExcelServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            ImportExcelServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            ImportExcelServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            ImportExcelServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            ImportExcelServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return ImportExcelServiceAction;
        }());
        Common.ImportExcelServiceAction = ImportExcelServiceAction;
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = KBT.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = KBT.LanguageList || (KBT.LanguageList = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                            params: {
                                key: options.reportKey,
                                ext: Q.coalesce(options.extension, 'pdf'),
                                opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                            },
                            target: Q.coalesce(options.target, '_blank')
                        });
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = KBT.Common || (KBT.Common = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                _super.call(this, container);
                // this is our autoincrementing counter
                this.nextId = 1;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return KBT.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return KBT.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return KBT.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            ViewWithoutIDGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewWithoutIDGrid);
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                _super.call(this, container);
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg('UnitPrice'),
                        new Slick.Aggregators.Sum('UnitsInStock'),
                        new Slick.Aggregators.Max('UnitsOnOrder'),
                        new Slick.Aggregators.Avg('ReorderLevel')
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: 'CategoryName'
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'CategoryName'
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'SupplierCompanyName'
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            GroupingAndSummariesInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GroupingAndSummariesInGrid);
            return GroupingAndSummariesInGrid;
        }(KBT.Northwind.ProductGrid));
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                _super.call(this, container);
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            GridFilteredByCriteria = __decorate([
                Serenity.Decorators.registerClass()
            ], GridFilteredByCriteria);
            return GridFilteredByCriteria;
        }(KBT.Northwind.ProductGrid));
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                _super.call(this, container);
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = KBT.Northwind.OrderRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.CustomerCompanyName; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"); };
                Q.first(columns, function (x) { return x.field == fld.OrderDate; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(Q.parseISODateTime(ctx.value)) + "</a>"); };
                Q.first(columns, function (x) { return x.field == fld.EmployeeFullName; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"); };
                Q.first(columns, function (x) { return x.field == fld.ShipCountry; }).format =
                    function (ctx) { return ("<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"); };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(KBT.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new KBT.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new KBT.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(Q.parseISODateTime(item.OrderDate)) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new KBT.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, KBT.Northwind.OrderRow.Fields.ShipCountry);
                    countryFilter.value = item.ShipCountry;
                }
            };
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
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(Q.parseISODateTime(item.OrderDate));
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new KBT.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            CustomLinksInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomLinksInGrid);
            return CustomLinksInGrid;
        }(KBT.Northwind.OrderGrid));
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                _super.call(this, container);
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return KBT.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return KBT.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return KBT.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return KBT.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = KBT.Northwind.ProductRow.Fields;
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == fld.UnitPrice; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ConditionalFormattingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConditionalFormattingGrid);
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                _super.call(this, container);
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            CancellableBulkActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CancellableBulkActionGrid);
            return CancellableBulkActionGrid;
        }(KBT.Northwind.OrderGrid));
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                _super.apply(this, arguments);
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(KBT.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                _super.call(this, container);
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(KBT.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                _super.call(this, container, opt);
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return KBT.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                _super.call(this, container);
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(KBT.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = this;
                _super.call(this);
                this.form = new BasicSamples.FilteredLookupInDetailForm(this.idPrefix);
                this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return KBT.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return KBT.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return KBT.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return KBT.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                _super.call(this, container);
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(KBT.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                _super.call(this);
                this.form = new KBT.Northwind.OrderDetailForm(this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                this.form.ProductID.cascadeField = KBT.Northwind.ProductRow.Fields.CategoryID;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(KBT.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Adding Responsive attribute makes this dialog use full screen in mobile devices.
         */
        var ResponsiveDialog = (function (_super) {
            __extends(ResponsiveDialog, _super);
            function ResponsiveDialog() {
                _super.call(this);
            }
            ResponsiveDialog.prototype.getFormKey = function () { return KBT.Northwind.OrderForm.formKey; };
            ResponsiveDialog.prototype.getIdProperty = function () { return KBT.Northwind.OrderRow.idProperty; };
            ResponsiveDialog.prototype.getLocalTextPrefix = function () { return KBT.Northwind.OrderRow.localTextPrefix; };
            ResponsiveDialog.prototype.getNameProperty = function () { return KBT.Northwind.OrderRow.nameProperty; };
            ResponsiveDialog.prototype.getService = function () { return KBT.Northwind.OrderService.baseUrl; };
            ResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ResponsiveDialog);
            return ResponsiveDialog;
        }(Serenity.EntityDialog));
        BasicSamples.ResponsiveDialog = ResponsiveDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to ResponsiveDialog
         */
        var ResponsiveGrid = (function (_super) {
            __extends(ResponsiveGrid, _super);
            function ResponsiveGrid(container) {
                _super.call(this, container);
            }
            ResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.ResponsiveDialog; };
            ResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ResponsiveGrid);
            return ResponsiveGrid;
        }(KBT.Northwind.OrderGrid));
        BasicSamples.ResponsiveGrid = ResponsiveGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Styling for columns is done with CSS in site.basicsamples.less file.
         * When comparing this to MultiColumnDialog sample, you may notice that
         * this version requires much less JS and CSS code.
         */
        var MultiColumnResponsiveDialog = (function (_super) {
            __extends(MultiColumnResponsiveDialog, _super);
            function MultiColumnResponsiveDialog() {
                _super.call(this);
            }
            MultiColumnResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveDialog);
            return MultiColumnResponsiveDialog;
        }(KBT.Northwind.OrderDialog));
        BasicSamples.MultiColumnResponsiveDialog = MultiColumnResponsiveDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
         */
        var MultiColumnResponsiveGrid = (function (_super) {
            __extends(MultiColumnResponsiveGrid, _super);
            function MultiColumnResponsiveGrid(container) {
                _super.call(this, container);
            }
            MultiColumnResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.MultiColumnResponsiveDialog; };
            MultiColumnResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveGrid);
            return MultiColumnResponsiveGrid;
        }(KBT.Northwind.OrderGrid));
        BasicSamples.MultiColumnResponsiveGrid = MultiColumnResponsiveGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                _super.call(this, container);
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: KBT.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: KBT.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: KBT.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: KBT.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new KBT.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = KBT.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = KBT.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(KBT.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                _super.apply(this, arguments);
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            CloneableEntityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], CloneableEntityDialog);
            return CloneableEntityDialog;
        }(KBT.Northwind.ProductDialog));
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                _super.call(this, container);
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(KBT.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                _super.apply(this, arguments);
            }
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
                this.element.closest('.ui-dialog').bind('resize', function () { return _this.arrange(); });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            ChartInDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ChartInDialog);
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        BasicSamples.ChartInDialog = ChartInDialog;
    })(BasicSamples = KBT.BasicSamples || (KBT.BasicSamples = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                _super.call(this, div);
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return {
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }; });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.RoleCheckEditor(this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = this;
                _super.call(this, container, opt);
                this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return {
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }; });
                this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                this.setItems(items);
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                _super.call(this, container);
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = KBT.Authorization || (KBT.Authorization = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                _super.call(this, container);
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LanguageForm(this.idPrefix);
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
var KBT;
(function (KBT) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                _super.call(this, container);
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = KBT.Administration || (KBT.Administration = {}));
})(KBT || (KBT = {}));
//# sourceMappingURL=KBT.Web.js.map