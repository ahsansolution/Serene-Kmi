﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace KBT
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="KBTDB")]
	public partial class KBTDBDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    partial void InsertOrder(Order instance);
    partial void UpdateOrder(Order instance);
    partial void DeleteOrder(Order instance);
    partial void InsertOrderDetail(OrderDetail instance);
    partial void UpdateOrderDetail(OrderDetail instance);
    partial void DeleteOrderDetail(OrderDetail instance);
    #endregion
		
		public KBTDBDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["KBTDBConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public KBTDBDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public KBTDBDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public KBTDBDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public KBTDBDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<Order> Orders
		{
			get
			{
				return this.GetTable<Order>();
			}
		}
		
		public System.Data.Linq.Table<OrderDetail> OrderDetails
		{
			get
			{
				return this.GetTable<OrderDetail>();
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.Orders")]
	public partial class Order : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _OrderID;
		
		private string _OrderNumber;
		
		private System.Nullable<System.DateTime> _OrderDate;
		
		private System.Nullable<int> _CustomerDealerID;
		
		private System.Nullable<int> _UserID;
		
		private System.Nullable<int> _ProductTypeID;
		
		private System.Nullable<int> _ProductUnitID;
		
		private string _OrderProductSerialNumber;
		
		private string _OrderProductColor;
		
		private System.Nullable<int> _OrderProductManufactureYear;
		
		private System.Nullable<short> _KmInUse;
		
		private System.Nullable<decimal> _PaymentService;
		
		private string _OrderStatus;
		
		private EntitySet<OrderDetail> _OrderDetails;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnOrderIDChanging(int value);
    partial void OnOrderIDChanged();
    partial void OnOrderNumberChanging(string value);
    partial void OnOrderNumberChanged();
    partial void OnOrderDateChanging(System.Nullable<System.DateTime> value);
    partial void OnOrderDateChanged();
    partial void OnCustomerDealerIDChanging(System.Nullable<int> value);
    partial void OnCustomerDealerIDChanged();
    partial void OnUserIDChanging(System.Nullable<int> value);
    partial void OnUserIDChanged();
    partial void OnProductTypeIDChanging(System.Nullable<int> value);
    partial void OnProductTypeIDChanged();
    partial void OnProductUnitIDChanging(System.Nullable<int> value);
    partial void OnProductUnitIDChanged();
    partial void OnOrderProductSerialNumberChanging(string value);
    partial void OnOrderProductSerialNumberChanged();
    partial void OnOrderProductColorChanging(string value);
    partial void OnOrderProductColorChanged();
    partial void OnOrderProductManufactureYearChanging(System.Nullable<int> value);
    partial void OnOrderProductManufactureYearChanged();
    partial void OnKmInUseChanging(System.Nullable<short> value);
    partial void OnKmInUseChanged();
    partial void OnPaymentServiceChanging(System.Nullable<decimal> value);
    partial void OnPaymentServiceChanged();
    partial void OnOrderStatusChanging(string value);
    partial void OnOrderStatusChanged();
    #endregion
		
		public Order()
		{
			this._OrderDetails = new EntitySet<OrderDetail>(new Action<OrderDetail>(this.attach_OrderDetails), new Action<OrderDetail>(this.detach_OrderDetails));
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int OrderID
		{
			get
			{
				return this._OrderID;
			}
			set
			{
				if ((this._OrderID != value))
				{
					this.OnOrderIDChanging(value);
					this.SendPropertyChanging();
					this._OrderID = value;
					this.SendPropertyChanged("OrderID");
					this.OnOrderIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderNumber", DbType="NVarChar(50)")]
		public string OrderNumber
		{
			get
			{
				return this._OrderNumber;
			}
			set
			{
				if ((this._OrderNumber != value))
				{
					this.OnOrderNumberChanging(value);
					this.SendPropertyChanging();
					this._OrderNumber = value;
					this.SendPropertyChanged("OrderNumber");
					this.OnOrderNumberChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderDate", DbType="DateTime")]
		public System.Nullable<System.DateTime> OrderDate
		{
			get
			{
				return this._OrderDate;
			}
			set
			{
				if ((this._OrderDate != value))
				{
					this.OnOrderDateChanging(value);
					this.SendPropertyChanging();
					this._OrderDate = value;
					this.SendPropertyChanged("OrderDate");
					this.OnOrderDateChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CustomerDealerID", DbType="Int")]
		public System.Nullable<int> CustomerDealerID
		{
			get
			{
				return this._CustomerDealerID;
			}
			set
			{
				if ((this._CustomerDealerID != value))
				{
					this.OnCustomerDealerIDChanging(value);
					this.SendPropertyChanging();
					this._CustomerDealerID = value;
					this.SendPropertyChanged("CustomerDealerID");
					this.OnCustomerDealerIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_UserID", DbType="Int")]
		public System.Nullable<int> UserID
		{
			get
			{
				return this._UserID;
			}
			set
			{
				if ((this._UserID != value))
				{
					this.OnUserIDChanging(value);
					this.SendPropertyChanging();
					this._UserID = value;
					this.SendPropertyChanged("UserID");
					this.OnUserIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProductTypeID", DbType="Int")]
		public System.Nullable<int> ProductTypeID
		{
			get
			{
				return this._ProductTypeID;
			}
			set
			{
				if ((this._ProductTypeID != value))
				{
					this.OnProductTypeIDChanging(value);
					this.SendPropertyChanging();
					this._ProductTypeID = value;
					this.SendPropertyChanged("ProductTypeID");
					this.OnProductTypeIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProductUnitID", DbType="Int")]
		public System.Nullable<int> ProductUnitID
		{
			get
			{
				return this._ProductUnitID;
			}
			set
			{
				if ((this._ProductUnitID != value))
				{
					this.OnProductUnitIDChanging(value);
					this.SendPropertyChanging();
					this._ProductUnitID = value;
					this.SendPropertyChanged("ProductUnitID");
					this.OnProductUnitIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderProductSerialNumber", DbType="NVarChar(50)")]
		public string OrderProductSerialNumber
		{
			get
			{
				return this._OrderProductSerialNumber;
			}
			set
			{
				if ((this._OrderProductSerialNumber != value))
				{
					this.OnOrderProductSerialNumberChanging(value);
					this.SendPropertyChanging();
					this._OrderProductSerialNumber = value;
					this.SendPropertyChanged("OrderProductSerialNumber");
					this.OnOrderProductSerialNumberChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderProductColor", DbType="NVarChar(20)")]
		public string OrderProductColor
		{
			get
			{
				return this._OrderProductColor;
			}
			set
			{
				if ((this._OrderProductColor != value))
				{
					this.OnOrderProductColorChanging(value);
					this.SendPropertyChanging();
					this._OrderProductColor = value;
					this.SendPropertyChanged("OrderProductColor");
					this.OnOrderProductColorChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderProductManufactureYear", DbType="Int")]
		public System.Nullable<int> OrderProductManufactureYear
		{
			get
			{
				return this._OrderProductManufactureYear;
			}
			set
			{
				if ((this._OrderProductManufactureYear != value))
				{
					this.OnOrderProductManufactureYearChanging(value);
					this.SendPropertyChanging();
					this._OrderProductManufactureYear = value;
					this.SendPropertyChanged("OrderProductManufactureYear");
					this.OnOrderProductManufactureYearChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_KmInUse", DbType="SmallInt")]
		public System.Nullable<short> KmInUse
		{
			get
			{
				return this._KmInUse;
			}
			set
			{
				if ((this._KmInUse != value))
				{
					this.OnKmInUseChanging(value);
					this.SendPropertyChanging();
					this._KmInUse = value;
					this.SendPropertyChanged("KmInUse");
					this.OnKmInUseChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PaymentService", DbType="Money")]
		public System.Nullable<decimal> PaymentService
		{
			get
			{
				return this._PaymentService;
			}
			set
			{
				if ((this._PaymentService != value))
				{
					this.OnPaymentServiceChanging(value);
					this.SendPropertyChanging();
					this._PaymentService = value;
					this.SendPropertyChanged("PaymentService");
					this.OnPaymentServiceChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderStatus", DbType="NVarChar(20)")]
		public string OrderStatus
		{
			get
			{
				return this._OrderStatus;
			}
			set
			{
				if ((this._OrderStatus != value))
				{
					this.OnOrderStatusChanging(value);
					this.SendPropertyChanging();
					this._OrderStatus = value;
					this.SendPropertyChanged("OrderStatus");
					this.OnOrderStatusChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.AssociationAttribute(Name="Order_OrderDetail", Storage="_OrderDetails", ThisKey="OrderID", OtherKey="OrderID")]
		public EntitySet<OrderDetail> OrderDetails
		{
			get
			{
				return this._OrderDetails;
			}
			set
			{
				this._OrderDetails.Assign(value);
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
		
		private void attach_OrderDetails(OrderDetail entity)
		{
			this.SendPropertyChanging();
			entity.Order = this;
		}
		
		private void detach_OrderDetails(OrderDetail entity)
		{
			this.SendPropertyChanging();
			entity.Order = null;
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.OrderDetail")]
	public partial class OrderDetail : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _OrderDetailID;
		
		private System.Nullable<int> _OrderID;
		
		private System.Nullable<int> _ProductID;
		
		private System.Nullable<short> _OrderQty;
		
		private System.Nullable<int> _ProductPriceID;
		
		private System.Nullable<int> _CostID;
		
		private System.Nullable<int> _OrderCategoryID;
		
		private System.Nullable<decimal> _BasePrice;
		
		private System.Nullable<decimal> _Total;
		
		private System.Nullable<decimal> _PPN;
		
		private System.Nullable<int> _KmInUse;
		
		private System.Nullable<short> _ServiceQuantity;
		
		private EntityRef<Order> _Order;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnOrderDetailIDChanging(int value);
    partial void OnOrderDetailIDChanged();
    partial void OnOrderIDChanging(System.Nullable<int> value);
    partial void OnOrderIDChanged();
    partial void OnProductIDChanging(System.Nullable<int> value);
    partial void OnProductIDChanged();
    partial void OnOrderQtyChanging(System.Nullable<short> value);
    partial void OnOrderQtyChanged();
    partial void OnProductPriceIDChanging(System.Nullable<int> value);
    partial void OnProductPriceIDChanged();
    partial void OnCostIDChanging(System.Nullable<int> value);
    partial void OnCostIDChanged();
    partial void OnOrderCategoryIDChanging(System.Nullable<int> value);
    partial void OnOrderCategoryIDChanged();
    partial void OnBasePriceChanging(System.Nullable<decimal> value);
    partial void OnBasePriceChanged();
    partial void OnTotalChanging(System.Nullable<decimal> value);
    partial void OnTotalChanged();
    partial void OnPPNChanging(System.Nullable<decimal> value);
    partial void OnPPNChanged();
    partial void OnKmInUseChanging(System.Nullable<int> value);
    partial void OnKmInUseChanged();
    partial void OnServiceQuantityChanging(System.Nullable<short> value);
    partial void OnServiceQuantityChanged();
    #endregion
		
		public OrderDetail()
		{
			this._Order = default(EntityRef<Order>);
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderDetailID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int OrderDetailID
		{
			get
			{
				return this._OrderDetailID;
			}
			set
			{
				if ((this._OrderDetailID != value))
				{
					this.OnOrderDetailIDChanging(value);
					this.SendPropertyChanging();
					this._OrderDetailID = value;
					this.SendPropertyChanged("OrderDetailID");
					this.OnOrderDetailIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderID", DbType="Int")]
		public System.Nullable<int> OrderID
		{
			get
			{
				return this._OrderID;
			}
			set
			{
				if ((this._OrderID != value))
				{
					if (this._Order.HasLoadedOrAssignedValue)
					{
						throw new System.Data.Linq.ForeignKeyReferenceAlreadyHasValueException();
					}
					this.OnOrderIDChanging(value);
					this.SendPropertyChanging();
					this._OrderID = value;
					this.SendPropertyChanged("OrderID");
					this.OnOrderIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProductID", DbType="Int")]
		public System.Nullable<int> ProductID
		{
			get
			{
				return this._ProductID;
			}
			set
			{
				if ((this._ProductID != value))
				{
					this.OnProductIDChanging(value);
					this.SendPropertyChanging();
					this._ProductID = value;
					this.SendPropertyChanged("ProductID");
					this.OnProductIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderQty", DbType="SmallInt")]
		public System.Nullable<short> OrderQty
		{
			get
			{
				return this._OrderQty;
			}
			set
			{
				if ((this._OrderQty != value))
				{
					this.OnOrderQtyChanging(value);
					this.SendPropertyChanging();
					this._OrderQty = value;
					this.SendPropertyChanged("OrderQty");
					this.OnOrderQtyChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProductPriceID", DbType="Int")]
		public System.Nullable<int> ProductPriceID
		{
			get
			{
				return this._ProductPriceID;
			}
			set
			{
				if ((this._ProductPriceID != value))
				{
					this.OnProductPriceIDChanging(value);
					this.SendPropertyChanging();
					this._ProductPriceID = value;
					this.SendPropertyChanged("ProductPriceID");
					this.OnProductPriceIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CostID", DbType="Int")]
		public System.Nullable<int> CostID
		{
			get
			{
				return this._CostID;
			}
			set
			{
				if ((this._CostID != value))
				{
					this.OnCostIDChanging(value);
					this.SendPropertyChanging();
					this._CostID = value;
					this.SendPropertyChanged("CostID");
					this.OnCostIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderCategoryID", DbType="Int")]
		public System.Nullable<int> OrderCategoryID
		{
			get
			{
				return this._OrderCategoryID;
			}
			set
			{
				if ((this._OrderCategoryID != value))
				{
					this.OnOrderCategoryIDChanging(value);
					this.SendPropertyChanging();
					this._OrderCategoryID = value;
					this.SendPropertyChanged("OrderCategoryID");
					this.OnOrderCategoryIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_BasePrice", DbType="Money")]
		public System.Nullable<decimal> BasePrice
		{
			get
			{
				return this._BasePrice;
			}
			set
			{
				if ((this._BasePrice != value))
				{
					this.OnBasePriceChanging(value);
					this.SendPropertyChanging();
					this._BasePrice = value;
					this.SendPropertyChanged("BasePrice");
					this.OnBasePriceChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Total", DbType="Money")]
		public System.Nullable<decimal> Total
		{
			get
			{
				return this._Total;
			}
			set
			{
				if ((this._Total != value))
				{
					this.OnTotalChanging(value);
					this.SendPropertyChanging();
					this._Total = value;
					this.SendPropertyChanged("Total");
					this.OnTotalChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_PPN", DbType="Money")]
		public System.Nullable<decimal> PPN
		{
			get
			{
				return this._PPN;
			}
			set
			{
				if ((this._PPN != value))
				{
					this.OnPPNChanging(value);
					this.SendPropertyChanging();
					this._PPN = value;
					this.SendPropertyChanged("PPN");
					this.OnPPNChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_KmInUse", DbType="Int")]
		public System.Nullable<int> KmInUse
		{
			get
			{
				return this._KmInUse;
			}
			set
			{
				if ((this._KmInUse != value))
				{
					this.OnKmInUseChanging(value);
					this.SendPropertyChanging();
					this._KmInUse = value;
					this.SendPropertyChanged("KmInUse");
					this.OnKmInUseChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ServiceQuantity", DbType="SmallInt")]
		public System.Nullable<short> ServiceQuantity
		{
			get
			{
				return this._ServiceQuantity;
			}
			set
			{
				if ((this._ServiceQuantity != value))
				{
					this.OnServiceQuantityChanging(value);
					this.SendPropertyChanging();
					this._ServiceQuantity = value;
					this.SendPropertyChanged("ServiceQuantity");
					this.OnServiceQuantityChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.AssociationAttribute(Name="Order_OrderDetail", Storage="_Order", ThisKey="OrderID", OtherKey="OrderID", IsForeignKey=true)]
		public Order Order
		{
			get
			{
				return this._Order.Entity;
			}
			set
			{
				Order previousValue = this._Order.Entity;
				if (((previousValue != value) 
							|| (this._Order.HasLoadedOrAssignedValue == false)))
				{
					this.SendPropertyChanging();
					if ((previousValue != null))
					{
						this._Order.Entity = null;
						previousValue.OrderDetails.Remove(this);
					}
					this._Order.Entity = value;
					if ((value != null))
					{
						value.OrderDetails.Add(this);
						this._OrderID = value.OrderID;
					}
					else
					{
						this._OrderID = default(Nullable<int>);
					}
					this.SendPropertyChanged("Order");
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
}
#pragma warning restore 1591