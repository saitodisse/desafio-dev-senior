/*global Backbone */
'use strict';

var MapApp = new Backbone.Marionette.Application();

MapApp.on('initialize:after', function () {
    Backbone.history.start();
});

$(function () {
    // start the TodoMVC app (defined in js/TodoMVC.js)
    MapApp.start();
});