using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebAPI_ML.Controllers;

namespace WebAPI_ML.Tests.Controllers
{
    [TestClass]
    public class AddressFinderTest
    {
        [TestMethod]
        public void SearchForAddress()
        {
            var controller = new AddressController();
            var addressLocations = controller.Get("Augusta", "1000", "SP", "São Paulo");
            Assert.AreEqual(5, addressLocations.Count);
        }
    }
}
