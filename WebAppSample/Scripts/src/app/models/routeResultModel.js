/*global MapApp */
'use strict';

MapApp.module('Mapp', function (Mapp, App, Backbone) {
    // RouteResult Model
    // ----------
    Mapp.Todo = Backbone.Model.extend({
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