

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ViewPurchaseOrder", typeof(KBT.DIS.Pages.ViewPurchaseOrderController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ViewPurchaseOrder"), Route("{action=index}")]
    public class ViewPurchaseOrderController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ViewPurchaseOrder/ViewPurchaseOrderIndex.cshtml");
        }
    }
}