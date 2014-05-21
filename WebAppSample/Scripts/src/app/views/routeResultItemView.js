/*global MapApp, JST */
'use strict';

MapApp.module('Views', function (Views, App, Backbone, Marionette, $) {
    // Todo List Item View
    // -------------------
    //
    // Display an individual todo item, and respond to changes
    // that are made to the item, including marking completed.
    Views.RouteResultItemView = Marionette.ItemView.extend({
        tagName: 'div',

        template: JST['./WebAppSample/Scripts/src/templates/routeResultItemView.hbs'],

        initialize: function (options) {
            this.model.set('totalFuelCost', function() {
                var routeTotals = this.model.get('routeTotals');
                var totalDistance = routeTotals.totalDistance;

                var vehicleInfoModel = options.vehicleInfoModel;
                var gasPrice = vehicleInfoModel.get('gasPrice');
                var carFuelConsumption = vehicleInfoModel.get('carFuelConsumption');

                var totalLitters = totalDistance / carFuelConsumption;
                var totalCost = totalLitters * gasPrice;

                return totalCost;
            }.bind(this));
        },

    });
});