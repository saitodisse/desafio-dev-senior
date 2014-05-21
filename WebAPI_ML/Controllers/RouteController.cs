using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebAPI_ML.RouteServiceReference;

namespace WebAPI_ML.Controllers
{
    public class RouteController : ApiController
    {
        public RouteInfo Get(string[] lista)
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

            RouteStop[] routes = {originRoute, destinationRoute};

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

                return getRouteResponse;
            }
        }
    }
}