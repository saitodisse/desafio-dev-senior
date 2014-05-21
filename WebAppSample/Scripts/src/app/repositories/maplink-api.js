/*global MapApp */
'use strict';

MapApp.module('MapLinkAPI', function(MapLinkAPI, App, Backbone, Marionette, $) {

    MapLinkAPI.WebAPI = Backbone.Model.extend({
        initialize: function() {
            App.vent.on('search:address', this.searchAddress, this);
        },

        searchAddress: function(searchObj) {
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

    });

});