

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ViewPurchaseOrderDetail", typeof(KBT.DIS.Pages.ViewPurchaseOrderDetailController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ViewPurchaseOrderDetail"), Route("{action=index}")]
    public class ViewPurchaseOrderDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ViewPurchaseOrderDetail/ViewPurchaseOrderDetailIndex.cshtml");
        }
    }
}