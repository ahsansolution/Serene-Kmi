

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ViewProductUnitOrder", typeof(KBT.DIS.Pages.ViewProductUnitOrderController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ViewProductUnitOrder"), Route("{action=index}")]
    public class ViewProductUnitOrderController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ViewProductUnitOrder/ViewProductUnitOrderIndex.cshtml");
        }
    }
}