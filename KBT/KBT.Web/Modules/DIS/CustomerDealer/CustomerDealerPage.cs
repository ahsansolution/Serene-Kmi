


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/CustomerDealer"), Route("{action=index}")]
    public class CustomerDealerController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/CustomerDealer/CustomerDealerIndex.cshtml");
        }
    }
}