using System;
using System.Collections.Generic;
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

            var addressItems = new List<AddressItem>();
            addressItems.Add(new AddressItem
            {
                street = "Pça. Augusta Vitória, 1000",
                X = -46.5737289,
                Y = -23.4844051
            });

            addressItems.Add(new AddressItem
            {
                street = "Vp. Secundina Augusta Santos, 1000",
                X = -46.579239,
                Y = -23.4790611
            });

            var routeQueryConfig = new RouteQueryConfig();
            routeQueryConfig.AddressItens = addressItems;
            routeQueryConfig.RouteType = RouteType.RotaEvitandoTrânsito;
            routeQueryConfig.AverageConsumption = 12;
            routeQueryConfig.TankCapacity = 70;
            routeQueryConfig.FuelPrice = 1.92;
            routeQueryConfig.AverageSpeed = 70;
            routeQueryConfig.TotalFeeCat = TotalFeeCat.AutomóvelCaminhonetaEFurgãodoisEixosSimples;

            var routeInfo = controller.Post(routeQueryConfig);

            Assert.IsTrue(routeInfo.routeTotals.totalDistance > 0);
        }
    }
}
