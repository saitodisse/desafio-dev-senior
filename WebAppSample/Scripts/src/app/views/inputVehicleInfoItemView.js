/*global MapApp, JST */
'use strict';

MapApp.module('Views', function (Views, App, Backbone, Marionette, $) {
    // Todo List Item View
    // -------------------
    //
    // Display an individual todo item, and respond to changes
    // that are made to the item, including marking completed.
    Views.InputVehicleInfoItemView = Marionette.ItemView.extend({
        tagName: 'div',

        template: JST['./WebAppSample/Scripts/src/templates/inputVehicleInfoItemView.hbs'],

        ui: {
            gasPrice: '#gasPrice',
            carFuelConsumption: '#carFuelConsumption',
            selectedDropDown: '#selectedDropDown'
        },

        events: {
            'click #btnCalcRoute': 'btnCalcRouteClicked',
            'click #fastestRoute': 'selectDropDown_fastestRoute',
            'click #avoidTrafic': 'selectDropDown_avoidTrafic',
        },

        initialize: function (options) {
            this.addressesCollection = options.addressesCollection;
        },

        selectDropDown_fastestRoute: function(e) {
            e.preventDefault();
            this.model.set('routeType', 0);
            this.ui.selectedDropDown.text($(e.target).text());
        },

        selectDropDown_avoidTrafic: function (e) {
            e.preventDefault();
            this.model.set('routeType', 23);
            this.ui.selectedDropDown.text($(e.target).text());
        },

        btnCalcRouteClicked: function () {
            console.log('selected address collection', this.addressesCollection);

            var addressesDto = [];
            this.addressesCollection.models.forEach(function(model) {
                addressesDto.push({
                    street: model.get('address').street,
                    X: model.get('point').x,
                    Y: model.get('point').y,
                });
            });

            var routeQueryConfig = {
                AddressItens: addressesDto,
                RouteType: this.model.get('routeType'),
                AverageConsumption: this.ui.carFuelConsumption.val(),
                FuelPrice: this.ui.gasPrice.val()
            };

            App.vent.trigger('calc:route', routeQueryConfig);
        },
    });
});