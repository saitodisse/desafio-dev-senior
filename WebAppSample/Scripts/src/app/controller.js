/*global MapApp */
'use strict';

MapApp.module('Mapp', function (Mapp, App, Backbone, Marionette, $, _) {

    Mapp.Controller = function (){};

    _.extend(Mapp.Controller.prototype, {

        // //////////////////////////////////////////////
        // /WebAppSample/Views/Home/AddressFinder.cshtml
        // //////////////////////////////////////////////

        start: function () {
            //MaplinkApp API
            var webAPI = new App.MapLinkAPI.WebAPI();

            //MODELS
            var addressModel = new App.Models.AddressModel();
            var addressResultCollection = new App.Models.AddressCollection();
            var addressSelectedCollection = new App.Models.AddressCollection();
            var vehicleInfoModel = new App.Models.VehicleInfoModel();

            //VIEWS
            var inputAddressView = new App.Views.InputAddressView({
                model: addressModel
            });
            var searchAddressResultCompositeView = new App.Views.SearchAddressResultCompositeView({
                collection: addressResultCollection
            });
            var selectedAddressesCompositeView = new App.Views.SelectedAddressesCompositeView({
                collection: addressSelectedCollection
            });
            var inputVehicleInfoItemView = new App.Views.InputVehicleInfoItemView({
                model: vehicleInfoModel,
                addressesCollection: addressSelectedCollection
            });

            //render views
            inputAddressView.render();
            searchAddressResultCompositeView.render();
            selectedAddressesCompositeView.render();
            inputVehicleInfoItemView.render();

            //get DOM sections
            var addressListSection = $('#addressList');
            var inputAddressSection = $('#inputAddress');
            var addressSearchResultSection = $('#addressSearchResult');
            var inputVehicleInfoSection = $('#inputVehicleInfo');
            var routeResultSection = $('#routeResult');

            //Add to DOM
            inputAddressSection.html(inputAddressView.el);
            addressSearchResultSection.html(searchAddressResultCompositeView.el);
            addressListSection.html(selectedAddressesCompositeView.el);
            inputVehicleInfoSection.html(inputVehicleInfoItemView.el);
        }

        //showHeader: function (Mapp) {
        //    var header = new App.Layout.Header({
        //        collection: Mapp
        //    });
        //    App.header.show(header);
        //},

        //showFooter: function (Mapp) {
        //    var footer = new App.Layout.Footer({
        //        collection: Mapp
        //    });
        //    App.footer.show(footer);
        //},

        //showMapp: function (Mapp) {
        //    App.main.show(new Mapp.Views.ListView({
        //        collection: Mapp
        //    }));
        //},

        //// Set the filter to show complete or all items
        //filterItems: function (filter) {
        //    App.vent.trigger('Mapp:filter', (filter && filter.trim()) || '');
        //}
    });

    // Mapp Initializer
    // --------------------
    //
    // Get the Mapp up and running by initializing the mediator
    // when the the application is started, pulling in all of the
    // existing Todo items and displaying them.
    Mapp.addInitializer(function () {
        var controller = new Mapp.Controller();
        controller.start();
    });
});