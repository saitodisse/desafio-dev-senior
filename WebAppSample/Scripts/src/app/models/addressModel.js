/*global MapApp */
'use strict';

MapApp.module('Models', function (Models, App, Backbone) {
    // Todo Model
    // ----------
    Models.AddressModel = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false,
            created: 0
        },

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

});