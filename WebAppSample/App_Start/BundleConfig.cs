using System.Web;
using System.Web.Optimization;

namespace WebAppSample
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/vendor/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                      "~/Scripts/vendor/jquery-{version}.js",
                      "~/Scripts/vendor/bootstrap.js",
                      "~/Scripts/vendor/respond.js",
                      "~/Scripts/vendor/underscore.js",
                      "~/Scripts/vendor/backbone.js",
                      "~/Scripts/vendor/backbone.marionette.js",
                      "~/Scripts/vendor/handlebars.runtime.js"));

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/Scripts/src/main.js")
                .IncludeDirectory("~/Scripts/src/app","*.js", true));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
