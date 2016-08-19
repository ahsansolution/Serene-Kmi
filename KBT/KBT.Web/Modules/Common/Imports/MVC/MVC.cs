using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class AdminLTE
        {
            public const string Calendar = "~/Modules/AdminLTE/Calendar.cshtml";
            public static class Charts
            {
                public const string ChartJS = "~/Modules/AdminLTE/Charts/ChartJS.cshtml";
                public const string Flot = "~/Modules/AdminLTE/Charts/Flot.cshtml";
                public const string InlineCharts = "~/Modules/AdminLTE/Charts/InlineCharts.cshtml";
                public const string Morris = "~/Modules/AdminLTE/Charts/Morris.cshtml";
            }
            public const string DashboardV2 = "~/Modules/AdminLTE/DashboardV2.cshtml";
            public static class Examples
            {
                public const string BlankPage = "~/Modules/AdminLTE/Examples/BlankPage.cshtml";
                public const string Error404 = "~/Modules/AdminLTE/Examples/Error404.cshtml";
                public const string Error500 = "~/Modules/AdminLTE/Examples/Error500.cshtml";
                public const string Invoice = "~/Modules/AdminLTE/Examples/Invoice.cshtml";
                public const string InvoicePrint = "~/Modules/AdminLTE/Examples/InvoicePrint.cshtml";
                public const string Lockscreen = "~/Modules/AdminLTE/Examples/Lockscreen.cshtml";
                public const string Login = "~/Modules/AdminLTE/Examples/Login.cshtml";
                public const string PacePage = "~/Modules/AdminLTE/Examples/PacePage.cshtml";
                public const string Profile = "~/Modules/AdminLTE/Examples/Profile.cshtml";
                public const string Register = "~/Modules/AdminLTE/Examples/Register.cshtml";
            }

            public static class Forms
            {
                public const string AdvancedElements = "~/Modules/AdminLTE/Forms/AdvancedElements.cshtml";
                public const string GeneralElements = "~/Modules/AdminLTE/Forms/GeneralElements.cshtml";
                public const string TextEditors = "~/Modules/AdminLTE/Forms/TextEditors.cshtml";
            }

            public static class Mailbox
            {
                public const string Compose = "~/Modules/AdminLTE/Mailbox/Compose.cshtml";
                public const string Inbox = "~/Modules/AdminLTE/Mailbox/Inbox.cshtml";
                public const string Read = "~/Modules/AdminLTE/Mailbox/Read.cshtml";
            }

            public static class Tables
            {
                public const string DataTables = "~/Modules/AdminLTE/Tables/DataTables.cshtml";
                public const string SimpleTables = "~/Modules/AdminLTE/Tables/SimpleTables.cshtml";
            }

            public static class UIElements
            {
                public const string Buttons = "~/Modules/AdminLTE/UIElements/Buttons.cshtml";
                public const string General = "~/Modules/AdminLTE/UIElements/General.cshtml";
                public const string Icons = "~/Modules/AdminLTE/UIElements/Icons.cshtml";
                public const string Modals = "~/Modules/AdminLTE/UIElements/Modals.cshtml";
                public const string Sliders = "~/Modules/AdminLTE/UIElements/Sliders.cshtml";
                public const string Timeline = "~/Modules/AdminLTE/UIElements/Timeline.cshtml";
            }
            public const string Widgets = "~/Modules/AdminLTE/Widgets.cshtml";
        }

        public static class BasicSamples
        {
            public static class Dialogs
            {
                public static class ChartInDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/ChartInDialog/Index.cshtml";
                }

                public static class CloneableEntityDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/CloneableEntityDialog/Index.cshtml";
                }

                public static class DefaultValuesInNewDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/DefaultValuesInNewDialog/Index.cshtml";
                }

                public static class MultiColumnResponsiveDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/MultiColumnResponsiveDialog/Index.cshtml";
                }

                public static class ResponsiveDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Dialogs/ResponsiveDialog/Index.cshtml";
                }

            }

            public static class Editors
            {
                public static class FilteredLookupInDetailDialog
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/FilteredLookupInDetailDialog/Index.cshtml";
                }

                public static class LookupFilterByMultipleValues
                {
                    public const string Index = "~/Modules/BasicSamples/Editors/LookupFilterByMultipleValues/Index.cshtml";
                }

            }

            public static class Grids
            {
                public static class CancellableBulkAction
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/CancellableBulkAction/Index.cshtml";
                }

                public static class ConditionalFormatting
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/ConditionalFormatting/Index.cshtml";
                }

                public static class CustomLinksInGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/CustomLinksInGrid/Index.cshtml";
                }

                public static class GridFilteredByCriteria
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/GridFilteredByCriteria/Index.cshtml";
                }

                public static class GroupingAndSummariesInGrid
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/GroupingAndSummariesInGrid/Index.cshtml";
                }

                public static class ViewWithoutID
                {
                    public const string Index = "~/Modules/BasicSamples/Grids/ViewWithoutID/Index.cshtml";
                }
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

        }

        public static class DIS
        {
            public static class Company
            {
                public const string CompanyIndex = "~/Modules/DIS/Company/CompanyIndex.cshtml";
            }

            public static class Cost
            {
                public const string CostIndex = "~/Modules/DIS/Cost/CostIndex.cshtml";
            }

            public static class CustomerDealer
            {
                public const string CustomerDealerIndex = "~/Modules/DIS/CustomerDealer/CustomerDealerIndex.cshtml";
            }

            public static class Inventory
            {
                public const string InventoryIndex = "~/Modules/DIS/Inventory/InventoryIndex.cshtml";
            }

            public static class OrderCategory
            {
                public const string OrderCategoryIndex = "~/Modules/DIS/OrderCategory/OrderCategoryIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/DIS/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Orders
            {
                public const string OrdersIndex = "~/Modules/DIS/Orders/OrdersIndex.cshtml";
            }

            public static class ProductAlternative
            {
                public const string ProductAlternativeIndex = "~/Modules/DIS/ProductAlternative/ProductAlternativeIndex.cshtml";
            }

            public static class ProductBasePrice
            {
                public const string ProductBasePriceIndex = "~/Modules/DIS/ProductBasePrice/ProductBasePriceIndex.cshtml";
            }

            public static class ProductCategory
            {
                public const string ProductCategoryIndex = "~/Modules/DIS/ProductCategory/ProductCategoryIndex.cshtml";
            }

            public static class ProductPrice
            {
                public const string ProductPriceIndex = "~/Modules/DIS/ProductPrice/ProductPriceIndex.cshtml";
            }

            public static class Products
            {
                public const string ProductsIndex = "~/Modules/DIS/Products/ProductsIndex.cshtml";
            }

            public static class ProductType
            {
                public const string ProductTypeIndex = "~/Modules/DIS/ProductType/ProductTypeIndex.cshtml";
            }

            public static class PurchaseOrder
            {
                public const string PurchaseOrderIndex = "~/Modules/DIS/PurchaseOrder/PurchaseOrderIndex.cshtml";
            }

            public static class PurchaseOrderDetail
            {
                public const string PurchaseOrderDetailIndex = "~/Modules/DIS/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml";
            }

            public static class ReceiveOrder
            {
                public const string ReceiveOrderIndex = "~/Modules/DIS/ReceiveOrder/ReceiveOrderIndex.cshtml";
            }

            public static class ReceiveOrderDetail
            {
                public const string ReceiveOrderDetailIndex = "~/Modules/DIS/ReceiveOrderDetail/ReceiveOrderDetailIndex.cshtml";
            }

            public static class Revenue
            {
                public const string RevenueIndex = "~/Modules/DIS/Revenue/RevenueIndex.cshtml";
            }

            public static class ServiceUnit
            {
                public const string ServiceUnitIndex = "~/Modules/DIS/ServiceUnit/ServiceUnitIndex.cshtml";
            }

            public static class ServiceUnitDetail
            {
                public const string ServiceUnitDetailIndex = "~/Modules/DIS/ServiceUnitDetail/ServiceUnitDetailIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/DIS/Supplier/SupplierIndex.cshtml";
            }

            public static class ViewOrders
            {
                public const string ViewOrdersIndex = "~/Modules/DIS/ViewOrders/ViewOrdersIndex.cshtml";
            }

            public static class ViewProductStock
            {
                public const string ViewProductStockIndex = "~/Modules/DIS/ViewProductStock/ViewProductStockIndex.cshtml";
            }

            public static class ViewProductUnit
            {
                public const string ViewProductUnitIndex = "~/Modules/DIS/ViewProductUnit/ViewProductUnitIndex.cshtml";
            }

            public static class ViewProductUnitOrder
            {
                public const string ViewProductUnitOrderIndex = "~/Modules/DIS/ViewProductUnitOrder/ViewProductUnitOrderIndex.cshtml";
            }

            public static class ViewPurchaseOrder
            {
                public const string ViewPurchaseOrderIndex = "~/Modules/DIS/ViewPurchaseOrder/ViewPurchaseOrderIndex.cshtml";
            }

            public static class ViewPurchaseOrderDetail
            {
                public const string ViewPurchaseOrderDetailIndex = "~/Modules/DIS/ViewPurchaseOrderDetail/ViewPurchaseOrderDetailIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                }
            }

        }

        public static class Northwind
        {
            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Northwind/Category/CategoryIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Northwind/Customer/CustomerIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderDetailReport = "~/Modules/Northwind/Order/OrderDetailReport.cshtml";
                public const string OrderIndex = "~/Modules/Northwind/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Northwind/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Northwind/Product/ProductIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/Northwind/Region/RegionIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Northwind/Shipper/ShipperIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Northwind/Supplier/SupplierIndex.cshtml";
            }

            public static class Territory
            {
                public const string TerritoryIndex = "~/Modules/Northwind/Territory/TerritoryIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

