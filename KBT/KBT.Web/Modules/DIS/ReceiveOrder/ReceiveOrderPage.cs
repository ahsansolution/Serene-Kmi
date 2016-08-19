


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ReceiveOrder"), Route("{action=index}")]
    public class ReceiveOrderController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ReceiveOrder/ReceiveOrderIndex.cshtml");
        }
    }
}