

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ViewOrders", typeof(KBT.DIS.Pages.ViewOrdersController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ViewOrders"), Route("{action=index}")]
    public class ViewOrdersController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ViewOrders/ViewOrdersIndex.cshtml");
        }
    }
}