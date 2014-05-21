using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebAPI_ML.Controllers;

namespace WebAPI_ML.Tests.Controllers
{
    [TestClass]
    public class RouteTest
    {
        [TestMethod]
        public void CalcRoute()
        {
            var controller = new RouteController();
            var routeInfo = controller.Get(new []{"a","b"});
            Assert.IsNotNull(routeInfo);
        }
    }
}
