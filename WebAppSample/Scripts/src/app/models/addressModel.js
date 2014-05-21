/*global MapApp */
'use strict';

MapApp.module('Models', function (Models, App, Backbone) {

    // ---------------
    // Address Model
    // ---------------
    Models.AddressModel = Backbone.Model.extend({
        defaults: {
        },

        idAttribute: function() {
            return this.get('point');
        },

        initialize: function () {
            if (this.isNew()) {
                this.set('created', Date.now());
            }
        },
    });

    // ---------------
    // Address Collection
    // ---------------
    Models.AddressCollection = Backbone.Collection.extend({
        model: Models.AddressModel,
    });


});
