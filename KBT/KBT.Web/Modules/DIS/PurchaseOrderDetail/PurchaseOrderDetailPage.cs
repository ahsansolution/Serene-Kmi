


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/PurchaseOrderDetail"), Route("{action=index}")]
    public class PurchaseOrderDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml");
        }
    }
}