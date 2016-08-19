


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ProductCategory"), Route("{action=index}")]
    public class ProductCategoryController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ProductCategory/ProductCategoryIndex.cshtml");
        }
    }
}