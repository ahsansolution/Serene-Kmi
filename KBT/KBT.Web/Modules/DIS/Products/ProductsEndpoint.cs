
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
    using MyRepository = Repositories.ProductsRepository;
    using MyRow = Entities.ProductsRow;

    [RoutePrefix("Services/DIS/Products"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class ProductsController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.ProductsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "ProductsList_" +
                System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        public ServiceResponse ProductBulkAction(IUnitOfWork uow, ProductBulkActionRequest request)
        {
            request.CheckNotNull();

            var random = new Random();

            // fail randomly with 3 percent chance
            if (random.Next(100) < 3)
                throw new ValidationError("Failed randomly!");

            foreach (var x in request.ProductIDs)
                System.Threading.Thread.Sleep(random.Next(400) + 100);

            return new ServiceResponse();
        }
    }
}
