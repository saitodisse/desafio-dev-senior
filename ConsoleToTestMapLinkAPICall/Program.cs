using System;
using System.Collections.Generic;
using System.Linq;
using ConsoleApplication1.AddressFinderServiceReference;
using ConsoleApplication1.RouteServiceReference;
using City = ConsoleApplication1.AddressFinderServiceReference.City;
using Point = ConsoleApplication1.AddressFinderServiceReference.Point;

namespace ConsoleApplication1
{
    internal static class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine("------------");
            Console.WriteLine("Address test");
            Console.WriteLine("------------");
            AddressTest();

            Console.WriteLine("");
            Console.WriteLine("");

            Console.WriteLine("----------");
            Console.WriteLine("Route test");
            Console.WriteLine("----------");
            RouteTest();
        }


        /// <summary>
        ///     Address
        /// </summary>
        private static void AddressTest()
        {
            const string token = "c13iyCvmcC9mzwkLd0LCbmYC5mUF5m2jNGNtNGt6NmK6NJK=";

            var address = new Address
            {
                street = "Rua dos Salgueiros",
                houseNumber = "35",
                city = new City {name = "São Bernardo do Campo", state = "SP"}
            };

            var addressOptions = new AddressOptions
            {
                usePhonetic = true,
                searchType = 2,
                resultRange = new ResultRange {pageIndex = 1, recordsPerPage = 10}
            };

            using (var addressFinderSoapClient = new AddressFinderSoapClient())
            {
                AddressInfo findAddressResponse = addressFinderSoapClient.findAddress(address,
                    addressOptions,
                    token);

                Console.WriteLine("Page Count: {0}, Record Count: {1}",
                    findAddressResponse.pageCount,
                    findAddressResponse.recordCount);

                List<AddressLocation> addressLocations = findAddressResponse.addressLocation.ToList();
                addressLocations.ForEach(addressLocation =>
                    Console.WriteLine
                        (
                            "Key: {0}" +
                            "\n Street name: {1}" +
                            "\n Street number: {2}" +
                            "\n Zip code: {3}" +
                            "\n District: {4}" +
                            "\n City: {5}" +
                            "\n State: {6}" +
                            "\n Left zip code: {7}" +
                            "\n Right zip code: {8}" +
                            "\n Car access: {9}" +
                            "\n Data Source: {10}" +
                            "\n Latitude: {11}" +
                            "\n Longitude: {12}",
                            addressLocation.key,
                            addressLocation.address.street,
                            addressLocation.address.houseNumber,
                            addressLocation.address.zip,
                            addressLocation.address.district,
                            addressLocation.address.city.name,
                            addressLocation.address.city.state,
                            addressLocation.zipL,
                            addressLocation.zipR,
                            addressLocation.carAccess,
                            addressLocation.dataSource,
                            addressLocation.point.y,
                            addressLocation.point.x
                        ));
            }
        }


        /// <summary>
        ///     Routes
        /// </summary>
        private static void RouteTest()
        {
            const string token = "c13iyCvmcC9mzwkLd0LCbmYC5mUF5m2jNGNtNGt6NmK6NJK=";

            var originRoute = new RouteStop
            {
                description = "Avenida Paulista, 1000",
                point = new Point {x = -46.6520066, y = -23.5650127}
            };

            var destinationRoute = new RouteStop
            {
                description = "Av Pres Juscelino Kubitschek, 1000",
                point = new Point {x = -46.679055, y = -23.589735}
            };

            var routes = new[] {originRoute, destinationRoute};

            var routeOptions = new RouteOptions
            {
                language = "portugues",
                routeDetails = new RouteDetails {descriptionType = 0, routeType = 1, optimizeRoute = true},
                vehicle = new Vehicle
                {
                    tankCapacity = 20,
                    averageConsumption = 9,
                    fuelPrice = 3,
                    averageSpeed = 60,
                    tollFeeCat = 2
                }
            };

            using (var routeSoapClient = new RouteSoapClient())
            {
                RouteInfo getRouteResponse = routeSoapClient.getRoute(routes,
                    routeOptions,
                    token);

                Console.WriteLine
                    (
                        "RouteId: {0}"
                        + "\n MapInfo - Url: {1}"
                        + "\n Extent"
                        + "\n Xmin: {2}"
                        + "\n YMin: {3}"
                        + "\n XMax: {4}"
                        + "\n YMax: {5}",
                        getRouteResponse.routeId,
                        getRouteResponse.MapInfo.url,
                        getRouteResponse.MapInfo.extent.XMin,
                        getRouteResponse.MapInfo.extent.YMin,
                        getRouteResponse.MapInfo.extent.XMax,
                        getRouteResponse.MapInfo.extent.YMax
                    );

                List<SegmentDescription> segmentDescriptions = getRouteResponse.segDescription.ToList();
                segmentDescriptions.ForEach(segmentDescription =>
                    Console.WriteLine
                        (
                            "\n\n SegmentDescription - Command: {0}"
                            + "\n Description: {1}"
                            + "\n City: {2}"
                            + "\n State: {3}"
                            + "\n TollFeeDetails - Price: {4}"
                            + "\n PricePerAxle: {5}"
                            + "\n Distance: {6}"
                            + "\n CumulativeDistance: {7}"
                            + "\n Latitude: {8}"
                            + "\n Longitude: {9}",
                            segmentDescription.command,
                            segmentDescription.description,
                            segmentDescription.city.name,
                            segmentDescription.city.state,
                            segmentDescription.tollFeeDetails.price,
                            segmentDescription.tollFeeDetails.pricePerAxle,
                            segmentDescription.distance,
                            segmentDescription.cumulativeDistance,
                            segmentDescription.point.y,
                            segmentDescription.point.x
                        ));

                Console.WriteLine
                    (
                        "\n\nRouteTotals - TotalDistance: {0}"
                        + "\n TotalTime: {1}"
                        + "\n TotalFuelUsed: {2}"
                        + "\n TotalTollFeeCost: {3}"
                        + "\n TotalFuelCost: {4}"
                        + "\n TotalCost: {5}"
                        + "\n TaxiFarel1: {6}"
                        + "\n TaxiFare2: {7}",
                        getRouteResponse.routeTotals.totalDistance,
                        getRouteResponse.routeTotals.totalTime,
                        getRouteResponse.routeTotals.totalFuelUsed,
                        getRouteResponse.routeTotals.totaltollFeeCost,
                        getRouteResponse.routeTotals.totalfuelCost,
                        getRouteResponse.routeTotals.totalCost,
                        getRouteResponse.routeTotals.taxiFare1,
                        getRouteResponse.routeTotals.taxiFare2
                    );

                List<RouteSummary> routeSummaries = getRouteResponse.routeSummary.ToList();
                routeSummaries.ForEach(routeSummary =>
                    Console.WriteLine
                        (
                            "\n\nRouteSummary - Description: {0}"
                            + "\n Distance: {1}"
                            + "\n Point - Longitude: {2}"
                            + "\n Latitude: {3}"
                            ,
                            routeSummary.description,
                            routeSummary.distance,
                            routeSummary.point.x,
                            routeSummary.point.y
                        ));

                Console.WriteLine
                    (
                        "\n\nRoadType - TwoLaneHighway: {0}"
                        + "\n SecondLaneUnderConstruction: {1}"
                        + "\n OneLaneRoadway: {2}"
                        + "\n PavingWorkInProgress: {3}"
                        + "\n DirtRoad: {4}"
                        + "\n RoadwayInPoorConditions: {5}"
                        + "\n Ferry: {6}",
                        getRouteResponse.roadType.twoLaneHighway,
                        getRouteResponse.roadType.secondLaneUnderConstruction,
                        getRouteResponse.roadType.oneLaneRoadway,
                        getRouteResponse.roadType.pavingWorkInProgress,
                        getRouteResponse.roadType.dirtRoad,
                        getRouteResponse.roadType.roadwayInPoorConditions,
                        getRouteResponse.roadType.ferry
                    );
            }
        }
    }
}