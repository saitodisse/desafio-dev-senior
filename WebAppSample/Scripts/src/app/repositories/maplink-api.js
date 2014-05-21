/*global MapApp */
'use strict';

MapApp.module('MapLinkAPI', function(MapLinkAPI, App, Backbone, Marionette, $) {

    MapLinkAPI.WebAPI = Backbone.Model.extend({


        initialize: function () {
            App.vent.on('search:address', this.searchAddress, this);
            App.vent.on('calc:route', this.calcRoute, this);
        },





        searchAddress: function (searchObj) {
            var req = $.ajax({
                url: 'http://localhost:9002/api/address',
                dataType: 'json',
                type: 'GET',
                data: searchObj
            });

            req.success(function (data) {
                App.vent.trigger('search:address:result', data);

/*  sample response  *
***************
    
[
{ "address" : { "city" : { "name" : "São Paulo",
            "state" : "SP"
        },
        "district" : "Consolação",
        "houseNumber" : "1000",
        "street" : "R. Augusta",
        "zip" : "01305100"
    },
    "carAccess" : true,
    "dataSource" : "SP",
    "point" : { "x" : -46.655159300000001,
        "y" : -23.553371200000001
    },
    "zipL" : "01304001",
    "zipR" : "01305100"
}
]
    
*/

            });

            req.error(function(jqXHR, textStatus, errorThrown) {
                console.log('error', jqXHR, textStatus, errorThrown);
            });

        },






        calcRoute: function (addresses) {
            console.log('sending: ', JSON.stringify(addresses));

            var req = $.ajax({
                url: 'http://localhost:9002/api/route',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(addresses)
            });

            req.success(function (data) {
                console.log('result:', JSON.stringify(data));
                //App.vent.trigger('calc:route:result', data);

/*  sample response  *
    ***************
{ "MapInfo" : { "extent" : { "XMax" : -46.651220000000002,
          "XMin" : -46.67906,
          "YMax" : -23.562609999999999,
          "YMin" : -23.589729999999999
        },
      "url" : ""
    },

  "roadType" : { "dirtRoad" : 0.0,
      "ferry" : 0.0,
      "oneLaneRoadway" : 4.8999999999999995,
      "pavingWorkInProgress" : 0.0,
      "roadwayInPoorConditions" : 0.0,
      "secondLaneUnderConstruction" : 0.0,
      "twoLaneHighway" : 0.0
    },

  "routeId" : "172.30.0.70_b0666580f4df49a7900eac00c48120df",

  "routeSummary" : [ { "description" : "Avenida Paulista, 1000",
        "distance" : 0.0,
        "point" : { "x" : -46.652009999999997,
            "y" : -23.565010000000001
          }
      },
      { "description" : "Av Pres Juscelino Kubitschek, 1000",
        "distance" : 4.9000000000000004,
        "point" : { "x" : -46.67906,
            "y" : -23.589739999999999
          }
      }
    ],

  "routeTotals" : { "taxiFare1" : 16.350000000000001,
      "taxiFare2" : 20.030000000000001,
      "totalCost" : 1.6200000000000001,
      "totalDistance" : 4.9000000000000004,
      "totalFuelUsed" : 0.54000000000000004,
      "totalTime" : "PT12M49S",
      "totalfuelCost" : 1.6200000000000001,
      "totaltollFeeCost" : 0.0
    },

  "segDescription" : 
    [ { "city" : { "name" : "",
            "state" : ""
          },
        "command" : "Início da rota",
        "cumulativeDistance" : 0.0,
        "description" : "Avenida Paulista, 1000",
        "distance" : 0.0,
        "point" : { "x" : -46.652009999999997,
            "y" : -23.565010000000001
          },
        "tollFeeDetails" : { "price" : 0.0,
            "pricePerAxle" : 0.0
          }
      },
      ....
      { "city" : { "name" : "",
            "state" : ""
          },
        "command" : "Fim da rota",
        "cumulativeDistance" : 4.9000000000000004,
        "description" : "Av Pres Juscelino Kubitschek, 1000",
        "distance" : 0.0,
        "point" : { "x" : -46.67906,
            "y" : -23.589739999999999
          },
        "tollFeeDetails" : { "price" : 0.0,
            "pricePerAxle" : 0.0
          }
      }
    ]
}
*/

            });

            req.error(function(jqXHR, textStatus, errorThrown) {
                console.log('error', jqXHR, textStatus, errorThrown);
            });

        },

    });

});