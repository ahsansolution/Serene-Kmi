﻿


namespace KBT.DIS.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("DIS/Cost"), Route("{action=index}")]
    public class CostController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/DIS/Cost/CostIndex.cshtml");
        }
    }
}