


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ProductBasePrice"), Route("{action=index}")]
    public class ProductBasePriceController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ProductBasePrice/ProductBasePriceIndex.cshtml");
        }
    }
}