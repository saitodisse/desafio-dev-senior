using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebAPI_ML.Controllers;
using WebAPI_ML.RouteServiceReference;

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
            routeQueryConfig.RouteType = RouteType.RotaEvitandoTransito;
            routeQueryConfig.AverageConsumption = 12;
            routeQueryConfig.TankCapacity = 100;
            routeQueryConfig.FuelPrice = 1.92;
            routeQueryConfig.AverageSpeed = 50;
            routeQueryConfig.TotalFeeCat = TotalFeeCat.AutomóvelCaminhonetaEFurgãodoisEixosSimples;

            var routeInfo = controller.Post(routeQueryConfig);

            Assert.IsTrue(routeInfo.routeTotals.totalDistance > 0);
        }

        [TestMethod]
        public void RouteWithoutFeeHasTheSameLength()
        {
            var sourceAddress = new AddressItem
            {
                street = "Pça. Augusta Vitória, 1000",
                X = -46.5737289,
                Y = -23.4844051
            };

            var destineAddress = new AddressItem
            {
                street = "Vp. Secundina Augusta Santos, 1000",
                X = -46.579239,
                Y = -23.4790611
            };

            var routeAvoidFee = GetRouteInfo(RouteType.RotaEvitandopedágios, sourceAddress, destineAddress);
            var routeWhithFee = GetRouteInfo(RouteType.RotaPadraoMaisRapida, sourceAddress, destineAddress);

            Console.WriteLine("routeAvoidFee.routeTotals.totalCost = " + routeAvoidFee.routeTotals.totalDistance);
            Console.WriteLine("routeWhithFee.routeTotals.totalCost = " + routeWhithFee.routeTotals.totalDistance);

            Assert.AreEqual(routeAvoidFee.routeTotals.totalDistance,routeWhithFee.routeTotals.totalDistance);
        }

        [TestMethod]
        public void RouteWithFeeHave()
        {
            //Av. Jabaquara	 1000	 Saúde	 São Paulo	 SP	 04046100	 -46.6381084	 -23.6134835
            //Estr. Galvão Bueno	 3569	 Jordanópolis	 São Bernardo do Campo	 SP	 09842080	 -46.6198738	 -23.77118

            var destineAddress = new AddressItem
            {
                street = "Estr. Galvão Bueno, 3569",
                X = -46.6198738,
                Y = -23.77118
            };
            var sourceAddress = new AddressItem
            {
                street = "Av. Jabaquara	 1000",
                X = -46.6381084,
                Y = -23.6134835
            };

            var routeAvoidFee = GetRouteInfo(RouteType.RotaEvitandopedágios, sourceAddress, destineAddress);
            var routeWhithFee = GetRouteInfo(RouteType.RotaPadraoMaisRapida, sourceAddress, destineAddress);

            Console.WriteLine("routeAvoidFee.routeTotals.totalCost = " + routeAvoidFee.routeTotals.totalCost);
            Console.WriteLine("routeWhithFee.routeTotals.totalCost = " + routeWhithFee.routeTotals.totalCost);

            Assert.IsTrue(routeWhithFee.routeTotals.totalCost > routeAvoidFee.routeTotals.totalCost);
        }

        private static RouteInfo GetRouteInfo(RouteType routeType, AddressItem sourceAddress, AddressItem destineAddress)
        {
            var controller = new RouteController();

            var addressItems = new List<AddressItem>();
            addressItems.Add(sourceAddress);

            addressItems.Add(destineAddress);

            var routeQueryConfig = new RouteQueryConfig();
            routeQueryConfig.AddressItens = addressItems;
            routeQueryConfig.RouteType = routeType;
            routeQueryConfig.AverageConsumption = 12;
            routeQueryConfig.TankCapacity = 70;
            routeQueryConfig.FuelPrice = 1.92;
            routeQueryConfig.AverageSpeed = 70;
            routeQueryConfig.TotalFeeCat = TotalFeeCat.AutomóvelCaminhonetaEFurgãodoisEixosSimples;

            var routeInfo = controller.Post(routeQueryConfig);
            return routeInfo;
        }
    }
}
