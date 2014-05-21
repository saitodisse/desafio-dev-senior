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
            street: '#street',
            houseNumber: '#houseNumber',
            state: '#state',
            cityName: '#cityName'
        },

        events: {
            'click #btnCalcRoute': 'btnCalcRouteClicked',
        },

        initialize: function (options) {
            this.addressesCollection = options.addressesCollection;
        },

        btnCalcRouteClicked: function () {
            console.log('selected address collection', this.addressesCollection);
            //var searchObj = {
            //    street: this.ui.street.val(),
            //    houseNumber: this.ui.houseNumber.val(),
            //    state: this.ui.state.val(),
            //    cityName: this.ui.cityName.val()
            //}

            App.vent.trigger('calc:route', {
                addresses: this.addressesCollection.toJSON()
            });
        },
    });
});