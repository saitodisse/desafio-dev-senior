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
            this.vehicleInfoModel = new App.Models.VehicleInfoModel();
            

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
                model: this.vehicleInfoModel,
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

            //Add to DOM
            inputAddressSection.html(inputAddressView.el);
            addressSearchResultSection.html(searchAddressResultCompositeView.el);
            addressListSection.html(selectedAddressesCompositeView.el);
            inputVehicleInfoSection.html(inputVehicleInfoItemView.el);


            //Final event
            App.vent.on('calc:route:result', this.renderRouteResult, this);

        },

        renderRouteResult: function(result) {
            console.log('renderRouteResult');

            var routeResultSection = $('#routeResult');

            var routeResultModel = new App.Models.RouteResultModel(result);

            var routeResultItemView = new App.Views.RouteResultItemView({
                model: routeResultModel,
                vehicleInfoModel: this.vehicleInfoModel
            });
            routeResultItemView.render();

            routeResultSection.html(routeResultItemView.el);
        }
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