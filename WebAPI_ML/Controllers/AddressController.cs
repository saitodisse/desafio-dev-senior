using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebAPI_ML.AddressFinderServiceReference;

namespace WebAPI_ML.Controllers
{
    public class AddressController : ApiController
    {
        public List<AddressLocation> Get(string street, string houseNumber, string state, string cityName)
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

                return addressLocations;
            } 
        }
    }
}
