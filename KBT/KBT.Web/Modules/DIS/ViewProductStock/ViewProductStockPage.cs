


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ViewProductStock"), Route("{action=index}")]
    public class ViewProductStockController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ViewProductStock/ViewProductStockIndex.cshtml");
        }
    }
}