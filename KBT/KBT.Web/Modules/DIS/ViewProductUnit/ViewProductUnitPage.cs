

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ViewProductUnit", typeof(KBT.DIS.Pages.ViewProductUnitController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ViewProductUnit"), Route("{action=index}")]
    public class ViewProductUnitController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ViewProductUnit/ViewProductUnitIndex.cshtml");
        }
    }
}