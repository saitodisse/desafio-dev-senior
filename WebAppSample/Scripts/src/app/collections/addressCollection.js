/*global MapApp */
'use strict';

MapApp.module('Mapp', function (Mapp, App, Backbone) {
    // Address Collection
    // ---------------
    Mapp.TodoList = Backbone.Collection.extend({
        model: Mapp.Todo,
    });
});