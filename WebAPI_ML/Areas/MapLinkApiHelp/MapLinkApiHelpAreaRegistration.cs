using System.Web.Mvc;

namespace WebAPI_ML.Areas.MapLinkApiHelp
{
    public class MapLinkApiHelpAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MapLinkApiHelp";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MapLinkApiHelp_default",
                "MapLinkApiHelp/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}