using System.Collections.Generic;
using System.Web.Http;
using WebAPI_ML.RouteServiceReference;

namespace WebAPI_ML.Controllers
{
    public class RouteQueryConfig
    {
        public IList<AddressItem> AddressItens { get; set; }
        public RouteType RouteType { get; set; }
        public float AverageConsumption { get; set; }
        public int TankCapacity { get; set; }
        public double FuelPrice { get; set; }
        public int AverageSpeed { get; set; }
        public TotalFeeCat TotalFeeCat { get; set; }
    }
    
    public class AddressItem
    {
        public string street { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
    }

    public enum RouteType
    {
        RotaPadraoMaisRapida = 0,
        RotaPadraoMaiscurta = 1,
        RotaAPéPedestre = 2,
        RotaEvitandobalsas = 6,
        RotaEvitandoestradasdeTerra = 7,
        RotaEvitandobalsaseEstradasDeTerra = 8,
        RotaEvitandoestradasemCondiçõesPrecárias = 9,
        RotaEvitandopedágios = 10,
        RotaComtransportePúblico = 21,
        RotaEvitandoTransito = 23,
        RotaPadraomaisrápidaComOTempoConsiderandoTrânsito = 24,
        RotaPadraomaiscurtaComOTempoConsiderandoTrânsito = 25,
        RotapriorizandocicloviasCiclofaixasCiclorrotas = 26,
    }

    public enum TotalFeeCat
    {
        NãoSeráCalculadoOValorDoPedágio = 0,
        MotocicletasMotonetasEBicicletasAMotor = 1,
        AutomóvelCaminhonetaEFurgãodoisEixosSimples = 2,
        AutomóvelCaminhonetaComSemiReboquetrêsEixosSimples = 3,
        AutomóvelCaminhonetaComReboquequatroEixosSimples = 4,
        ÔnibusdoisEixosDuplos = 5,
        ÔnibusComReboquetrêsEixosDuplos = 6,
        CaminhãoLeveFurgãoECavaloMecânicodoisEixosDuplos = 7,
        CaminhãoCaminhãoTratorECavaloMecânicoComSemiReboquetrêsEixosDuplos = 8,
        CaminhãoComReboqueECavaloMecânicoComSemiReboquequatroEixosDuplos = 9,
        CaminhãoComReboqueECavaloMecânicoComSemiReboquecincoEixosDuplos= 10,
        CaminhãoComReboqueECavaloMecânicoComSemiReboqueseisEixosDuplos= 11,
        CaminhãoComReboqueECavaloMecânicoComSemiReboqueseteEixosDuplos= 12,
        CaminhãoComReboqueECavaloMecânicoComSemiReboqueoitoEixosDuplos= 13,
        CaminhãoComReboqueECavaloMecânicoComSemiReboquenoveEixosDuplos= 14,
    }

    public class RouteController : ApiController
    {
        public RouteInfo Post(RouteQueryConfig routeQueryConfig)
        {
            const string token = "c13iyCvmcC9mzwkLd0LCbmYC5mUF5m2jNGNtNGt6NmK6NJK=";

            var routes = new List<RouteStop>();
            foreach (AddressItem address in routeQueryConfig.AddressItens)
            {
                var routeStop = new RouteStop();
                routeStop.description = address.street;

                var point = new Point();
                point.x = address.X;
                point.y = address.Y;
                routeStop.point = point;

                routes.Add(routeStop);
            }

            var routeOptions = new RouteOptions
            {
                language = "portugues",
                routeDetails = new RouteDetails { descriptionType = 0, routeType = (int)routeQueryConfig.RouteType, optimizeRoute = true },
                vehicle = new Vehicle
                {
                    tankCapacity = routeQueryConfig.TankCapacity,
                    averageConsumption = routeQueryConfig.AverageConsumption,
                    fuelPrice = routeQueryConfig.FuelPrice,
                    averageSpeed = routeQueryConfig.AverageSpeed,
                    tollFeeCat = (int)routeQueryConfig.TotalFeeCat
                }
            };

            using (var routeSoapClient = new RouteSoapClient())
            {
                return routeSoapClient.getRoute(
                    routes.ToArray(),
                    routeOptions,
                    token);
            }
        }
    }
}