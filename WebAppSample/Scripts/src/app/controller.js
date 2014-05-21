/*global MapApp */
'use strict';


MapApp.module('Mapp', function (Mapp, App, Backbone, Marionette, $, _) {
    console.dir(arguments);
    // Mapp Controller (Mediator)
    // ------------------------------
    //
    // Control the workflow and logic that exists at the application
    // level, above the implementation detail of views and models
    Mapp.Controller = function () {
        this.Mapp = new App.Models.AddressCollection();
    };

    _.extend(Mapp.Controller.prototype, {
        // Start the app by showing the appropriate views
        // and fetching the list of todo items, if there are any
        start: function () {
            //MODEL
            var addressModel = new App.Models.AddressModel();

            //VIEW
            var inputAddressView = new App.Views.InputAddressView({
                model: addressModel
            });
            inputAddressView.render();

            //Add to DOM
            var inputAddressSection = $('#inputAddress');
            inputAddressSection.html(inputAddressView.el);
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