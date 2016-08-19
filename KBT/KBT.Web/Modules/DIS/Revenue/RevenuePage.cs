

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "DIS/Revenue", typeof(KBT.DIS.Pages.RevenueController))]

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/Revenue"), Route("{action=index}")]
    public class RevenueController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/Revenue/RevenueIndex.cshtml");
        }
    }
}