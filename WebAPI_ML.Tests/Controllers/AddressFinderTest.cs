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
            var addressLocations = controller.Get("Augusta", "1000", "São Paulo", "SP");
            Assert.IsTrue(addressLocations.Count > 1);
        }
    }
}
