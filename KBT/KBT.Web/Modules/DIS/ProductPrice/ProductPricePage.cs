


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ProductPrice"), Route("{action=index}")]
    public class ProductPriceController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ProductPrice/ProductPriceIndex.cshtml");
        }
    }
}