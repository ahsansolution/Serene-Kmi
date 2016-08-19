
namespace KBT.DIS.Endpoints
{
    using Entities;
    using Microsoft.Reporting.WebForms;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.OrdersRepository;
    using MyRow = Entities.OrdersRow;

    [RoutePrefix("Services/DIS/Orders"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class OrdersController : ServiceEndpoint
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

        public void PrintInvoice(IDbConnection connection, RetrieveRequest request)
        {
            LocalReport localReport = new LocalReport();
            ReportViewer ReportViewer = new ReportViewer();
            List<ViewOrdersRow> dataCollection = new List<Entities.ViewOrdersRow>();

            //Header
            var row = new ViewOrdersRow();
            var fld = ViewOrdersRow.Fields;
            Int64 id = 0;
            Int64.TryParse(((string[])request.EntityId)[0], out id);
            SqlQuery query = new SqlQuery().Distinct(true).
                From(row).
                Select(fld.CustomerDealerName).
                Select(fld.OrderDate).
                Select(fld.Address).
                Where(fld.OrderId == id);
            query.GetFirst(connection);
            dataCollection.Add(row);

            //Detail
            var rowD = new ViewOrdersRow();
            var fldD = ViewOrdersRow.Fields;
            List<ViewOrdersRow> dataCollectionD = connection.List<ViewOrdersRow>(new Criteria("OrderId = " + id.ToString()));
         

            DataTable dt = ConvertData.ToDataTable<ViewOrdersRow>(dataCollection);
            DataTable dtD = ConvertData.ToDataTable<ViewOrdersRow>(dataCollectionD);

            ReportDataSource dtSourceHeader = new ReportDataSource("DSViewOrders", dtD);
            //ReportDataSource dtSourceDetail = new ReportDataSource("DSViewOrders", dtD);

            ReportViewer.LocalReport.DataSources.Clear();
            ReportViewer.LocalReport.ReportPath = Request.PhysicalApplicationPath + @"Report\Rdlc\PrintInvoice.rdlc";
            ReportViewer.LocalReport.DataSources.Add(dtSourceHeader);
            //ReportViewer.LocalReport.DataSources.Add(dtSourceDetail);

            Warning[] warnings;
            string[] streamIds;
            string mimeType = string.Empty;
            string encoding = string.Empty;
            string extension = string.Empty;
            byte[] bytes = ReportViewer.LocalReport.Render("Pdf", null, out mimeType, out encoding, out extension, out streamIds, out warnings);

            Response.ContentType = "application/pdf";
            Response.AddHeader("Content-Disposition", "attachment; filename=" + "INV_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".pdf");
            byte[] imgByte = new byte[bytes.Length];
            Response.BinaryWrite(bytes);
            Response.Flush();

        }
    }
}
