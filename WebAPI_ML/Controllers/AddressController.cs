using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebAPI_ML.AddressFinderServiceReference;

namespace WebAPI_ML.Controllers
{
    public class AddressController : ApiController
    {
        // GET api/address/
        public List<AddressLocation> Get(string street, string houseNumber, string cityName, string state)
        {
            const string token = "c13iyCvmcC9mzwkLd0LCbmYC5mUF5m2jNGNtNGt6NmK6NJK=";

            var address = new Address
            {
                street = street,
                houseNumber = houseNumber,
                city = new City { name = cityName, state = state }
            };

            var addressOptions = new AddressOptions
            {
                usePhonetic = true,
                searchType = 2,
                resultRange = new ResultRange { pageIndex = 1, recordsPerPage = 10 }
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
                //addressLocations.ForEach(addressLocation =>
                //    addressLocation.address.street);

                //    //Console.WriteLine
                //    //    (
                //    //        "Key: {0}" +
                //    //        "\n Street name: {1}" +
                //    //        "\n Street number: {2}" +
                //    //        "\n Zip code: {3}" +
                //    //        "\n District: {4}" +
                //    //        "\n City: {5}" +
                //    //        "\n State: {6}" +
                //    //        "\n Left zip code: {7}" +
                //    //        "\n Right zip code: {8}" +
                //    //        "\n Car access: {9}" +
                //    //        "\n Data Source: {10}" +
                //    //        "\n Latitude: {11}" +
                //    //        "\n Longitude: {12}",
                //    //        addressLocation.key,
                //    //        addressLocation.address.street,
                //    //        addressLocation.address.houseNumber,
                //    //        addressLocation.address.zip,
                //    //        addressLocation.address.district,
                //    //        addressLocation.address.city.name,
                //    //        addressLocation.address.city.state,
                //    //        addressLocation.zipL,
                //    //        addressLocation.zipR,
                //    //        addressLocation.carAccess,
                //    //        addressLocation.dataSource,
                //    //        addressLocation.point.y,
                //    //        addressLocation.point.x
                //    //    )


                return addressLocations;

            } 
        }
    }
}
