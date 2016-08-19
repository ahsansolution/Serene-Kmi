

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ProductAlternative", typeof(KBT.DIS.Pages.ProductAlternativeController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ProductAlternative"), Route("{action=index}")]
    public class ProductAlternativeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ProductAlternative/ProductAlternativeIndex.cshtml");
        }
    }
}