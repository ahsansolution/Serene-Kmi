
namespace KBT.DIS.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ViewOrdersRepository;
    using MyRow = Entities.ViewOrdersRow;

    [RoutePrefix("Services/DIS/ViewOrders"), Route("{action}")]
    [ConnectionKey("Default"), ServiceAuthorize("Administration")]
    public class ViewOrdersController : ServiceEndpoint
    {
       

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
