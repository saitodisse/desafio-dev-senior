/*global MapApp */
'use strict';

MapApp.module('Models', function (Models, App, Backbone) {

    // ---------------
    // Address Model
    // ---------------
    Models.AddressModel = Backbone.Model.extend({
        defaults: {
        },

        idAttribute: "point",

        initialize: function () {
            if (this.isNew()) {
                this.set('created', Date.now());
            }
        },

        toggle: function () {
            return this.set('completed', !this.isCompleted());
        },

        isCompleted: function () {
            return this.get('completed');
        }
    });

    // ---------------
    // Address Collection
    // ---------------
    Models.AddressCollection = Backbone.Collection.extend({
        model: Models.AddressModel,
    });


});
