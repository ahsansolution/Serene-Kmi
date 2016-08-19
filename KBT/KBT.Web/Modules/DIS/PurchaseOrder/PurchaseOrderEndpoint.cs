
namespace KBT.DIS.Endpoints
{
    using Entities;
    using Microsoft.Reporting.WebForms;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PurchaseOrderRepository;
    using MyRow = Entities.PurchaseOrderRow;

    [RoutePrefix("Services/DIS/PurchaseOrder"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class PurchaseOrderController : ServiceEndpoint
    {
        [HttpPost]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.PurchaseOrderColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "POList_" +
                System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        public void PrintPO(IDbConnection connection, RetrieveRequest request)
        {
            LocalReport localReport = new LocalReport();
            ReportViewer ReportViewer = new ReportViewer();
            List<ViewPurchaseOrderRow> dataCollection = new List<Entities.ViewPurchaseOrderRow>();
        
            //Header
            var row = new ViewPurchaseOrderRow();
            var fld = ViewPurchaseOrderRow.Fields;
            Int64 id = 0;
            Int64.TryParse(((string[])request.EntityId)[0], out id);
            SqlQuery query = new SqlQuery().From(row).
                Select(fld.PurchaseOrderNumber).
                Select(fld.PurchaseOrderDate).
                Select(fld.CompanyName).
                Select(fld.Address).
                Select(fld.Phone).
                Where(fld.PurchaseOrderId == id);
            query.GetFirst(connection);
            dataCollection.Add(row);

            //Detail
            var rowD = new ViewPurchaseOrderDetailRow();
            var fldD = ViewPurchaseOrderDetailRow.Fields;
            //SqlQuery queryD = new SqlQuery().From(rowD).Where(fldD.PurchaseOrderId == id);
            List<ViewPurchaseOrderDetailRow> dataCollectionD = connection.List<ViewPurchaseOrderDetailRow>(new Criteria("PurchaseOrderId = " + id.ToString()));
            //queryD.List<ViewPurchaseOrderDetailRow>(connection);


            DataTable dt = ConvertData.ToDataTable<ViewPurchaseOrderRow>(dataCollection);
            DataTable dtD = ConvertData.ToDataTable<ViewPurchaseOrderDetailRow>(dataCollectionD);

            ReportDataSource dtSourceHeader = new ReportDataSource("ReportDSViewPurchaseOrder", dt);
            ReportDataSource dtSourceDetail = new ReportDataSource("ReportDSViewPurchaseOrderDetail", dtD);

            ReportViewer.LocalReport.DataSources.Clear();
            ReportViewer.LocalReport.ReportPath = Request.PhysicalApplicationPath + @"Report\Rdlc\PrintPO.rdlc";
            ReportViewer.LocalReport.DataSources.Add(dtSourceHeader);
            ReportViewer.LocalReport.DataSources.Add(dtSourceDetail);

            Warning[] warnings;
            string[] streamIds;
            string mimeType = string.Empty;
            string encoding = string.Empty;
            string extension = string.Empty;
            byte[] bytes = ReportViewer.LocalReport.Render("Pdf", null, out mimeType, out encoding, out extension, out streamIds, out warnings);

            Response.ContentType = "application/pdf";
            Response.AddHeader("Content-Disposition", "attachment; filename=" + "PO_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".pdf");
            byte[] imgByte = new byte[bytes.Length];
            Response.BinaryWrite(bytes);
            Response.Flush();

        }
    }

    public static class ConvertData
    {
        public static DataTable ToDataTable<T>(this IList<T> data)
        {
            PropertyDescriptorCollection properties =
                TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }
            return table;
        }
    }
}
