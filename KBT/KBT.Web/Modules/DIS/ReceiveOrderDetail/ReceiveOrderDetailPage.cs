


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ReceiveOrderDetail"), Route("{action=index}")]
    public class ReceiveOrderDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ReceiveOrderDetail/ReceiveOrderDetailIndex.cshtml");
        }
    }
}