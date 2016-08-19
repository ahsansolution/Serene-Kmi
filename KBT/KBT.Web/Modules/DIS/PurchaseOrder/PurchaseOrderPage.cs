


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/PurchaseOrder"), Route("{action=index}")]
    public class PurchaseOrderController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/PurchaseOrder/PurchaseOrderIndex.cshtml");
        }
    }
}