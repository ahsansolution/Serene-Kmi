﻿
namespace KBT.DIS.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ViewProductStockRepository;
    using MyRow = Entities.ViewProductStockRow;

    [RoutePrefix("Services/DIS/ViewProductStock"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class ViewProductStockController : ServiceEndpoint
    {
        //[HttpPost]
        //public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        //{
        //    return new MyRepository().Create(uow, request);
        //}

        //[HttpPost]
        //public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        //{
        //    return new MyRepository().Update(uow, request);
        //}
 
        //[HttpPost]
        //public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        //{
        //    return new MyRepository().Delete(uow, request);
        //}

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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ViewProductStockColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "DataStock_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
