


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/OrderCategory"), Route("{action=index}")]
    public class OrderCategoryController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/OrderCategory/OrderCategoryIndex.cshtml");
        }
    }
}