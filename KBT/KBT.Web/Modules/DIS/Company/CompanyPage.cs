


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/Company"), Route("{action=index}")]
    public class CompanyController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/Company/CompanyIndex.cshtml");
        }
    }
}