

namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/Upload"), Route("{action=index}")]
    public class UploadFileController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/Upload/UploadFileIndex.cshtml");
        }
    }
}