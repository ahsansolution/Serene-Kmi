

namespace KBT.DIS.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("PurchaseOrder"), InstanceName("PurchaseOrder"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("DIS.PurchaseOrder")]
    public sealed class PurchaseOrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Order Id"), Column("PurchaseOrderID"), Identity]
        public Int32? PurchaseOrderId
        {
            get { return Fields.PurchaseOrderId[this]; }
            set { Fields.PurchaseOrderId[this] = value; }
        }

        [DisplayName("Purchase Order Number"), Size(50), QuickSearch, Insertable(false), Updatable(false)]
        public String PurchaseOrderNumber
        {
            get { return Fields.PurchaseOrderNumber[this]; }
            set { Fields.PurchaseOrderNumber[this] = value; }
        }

        [DisplayName("Company Id")]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Purchase Order Date")]
        public DateTime? PurchaseOrderDate
        {
            get { return Fields.PurchaseOrderDate[this]; }
            set { Fields.PurchaseOrderDate[this] = value; }
        }

        [DisplayName("Cost"), Column("CostID"), ForeignKey("[dbo].[Cost]", "CostID"), LeftJoin("jCost"), TextualField("CostCostName")]
        [LookupEditor(typeof(CostRow))]
        [DefaultValue(1), Insertable(false), Updatable(false)]
        public Int32? CostId
        {
            get { return Fields.CostId[this]; }
            set { Fields.CostId[this] = value; }
        }

        [DisplayName("Order Category Id"), Column("OrderCategoryID"), ForeignKey("OrderCategory", "OrderCategoryID"), LeftJoin("jOrderCategory")]
        [LookupEditor(typeof(OrderCategoryRow))]
        public Int32? OrderCategoryId
        {
            get { return Fields.OrderCategoryId[this]; }
            set { Fields.OrderCategoryId[this] = value; }
        }

        [DisplayName("Order Category Name"), Expression("jOrderCategory.OrderCategoryName")]
        public String PurchaseOrderOrderCategoryName
        {
            get { return Fields.PurchaseOrderOrderCategoryName[this]; }
            set { Fields.PurchaseOrderOrderCategoryName[this] = value; }
        }

        [DisplayName("Product Type Id"), Column("ProductTypeId"), ForeignKey("ProductType", "ProductTypeId"), LeftJoin("jProductType")]
        [LookupEditor(typeof(ProductTypeRow))]
        public Int32? ProductTypeId
        {
            get { return Fields.ProductTypeId[this]; }
            set { Fields.ProductTypeId[this] = value; }
        }

        [DisplayName("Product Type Name"), Expression("jProductType.ProductTypeName")]
        public String ProductTypeName
        {
            get { return Fields.ProductTypeName[this]; }
            set { Fields.ProductTypeName[this] = value; }
        }

        [DisplayName("Purchase Order Status"), Size(20), DefaultValue("In Progress"), Insertable(false), Updatable(false)]
        public String PurchaseOrderStatus
        {
            get { return Fields.PurchaseOrderStatus[this]; }
            set { Fields.PurchaseOrderStatus[this] = value; }
        }

        [DisplayName("Cost Cost Name"), Expression("jCost.[CostName]")]
        public String CostCostName
        {
            get { return Fields.CostCostName[this]; }
            set { Fields.CostCostName[this] = value; }
        }

        [DisplayName("Cost Amount"), Expression("jCost.[Amount]")]
        public Decimal? CostAmount
        {
            get { return Fields.CostAmount[this]; }
            set { Fields.CostAmount[this] = value; }
        }

        [DisplayName("Cost Percentage"), Expression("jCost.[Percentage]")]
        public Int16? CostPercentage
        {
            get { return Fields.CostPercentage[this]; }
            set { Fields.CostPercentage[this] = value; }
        }

        [DisplayName("PO Detail"), MasterDetailRelation(foreignKey: "PurchaseOrderID"), ClientSide, MinSelectLevel(SelectLevel.List)]
        public List<PurchaseOrderDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PurchaseOrderNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseOrderId;
            public StringField PurchaseOrderNumber;
            public Int32Field CompanyId;
            public DateTimeField PurchaseOrderDate;
            public Int32Field CostId;
            public Int32Field OrderCategoryId;
            public StringField PurchaseOrderOrderCategoryName;
            public StringField PurchaseOrderStatus;

            public StringField CostCostName;
            public DecimalField CostAmount;
            public Int16Field CostPercentage;

            public Int32Field ProductTypeId;
            public StringField ProductTypeName;

            public RowListField<PurchaseOrderDetailRow> DetailList;


            public RowFields()
                : base("[dbo].[PurchaseOrder]")
            {
                LocalTextPrefix = "DIS.PurchaseOrder";
            }
        }
    }
}