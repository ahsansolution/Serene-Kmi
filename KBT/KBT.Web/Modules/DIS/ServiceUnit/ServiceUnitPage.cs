

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ServiceUnit", typeof(KBT.DIS.Pages.ServiceUnitController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ServiceUnit"), Route("{action=index}")]
    public class ServiceUnitController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ServiceUnit/ServiceUnitIndex.cshtml");
        }
    }
}