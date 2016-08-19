

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/ServiceUnitDetail", typeof(KBT.DIS.Pages.ServiceUnitDetailController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/ServiceUnitDetail"), Route("{action=index}")]
    public class ServiceUnitDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/ServiceUnitDetail/ServiceUnitDetailIndex.cshtml");
        }
    }
}