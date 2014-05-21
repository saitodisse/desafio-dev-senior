/*global Backbone */
'use strict';

var MapApp = new Backbone.Marionette.Application();

MapApp.on('initialize:after', function () {
    Backbone.history.start();
});