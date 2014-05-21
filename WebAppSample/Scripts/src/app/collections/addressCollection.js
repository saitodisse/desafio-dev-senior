/*global MapApp */
'use strict';

MapApp.module('Models', function (Mapp, App, Backbone) {
    // Address Collection
    // ---------------
    Mapp.AddressCollection = Backbone.Collection.extend({
        model: Mapp.Todo,
    });
});