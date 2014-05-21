/*global MapApp, JST */
'use strict';

MapApp.module('Views', function (Views, App, Backbone, Marionette, $) {

    Views.SearchAddressResultItemView = Marionette.CompositeView.extend({
        tagName: 'tr',

        template: JST['./WebAppSample/Scripts/src/templates/searchAddressResultItemView.hbs'],

        initialize: function () {
            console.log('SearchAddressResultItemView initialized', arguments, this);
        }
    });

});