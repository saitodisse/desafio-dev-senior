/*global MapApp, JST */
'use strict';

MapApp.module('Views', function (Views, App, Backbone, Marionette, $) {

    Views.SearchAddressResultCompositeView = Marionette.CompositeView.extend({
        tagName: 'div',

        template: JST['./WebAppSample/Scripts/src/templates/searchAddressResultCompositeView.hbs'],

        itemView: Views.SearchAddressResultItemView,

        itemViewContainer: 'tbody',

        initialize: function() {
            App.vent.on('search:address:result', function(data) {
                this.collection.reset(data);
            }.bind(this));
            console.log('SearchAddressResultCompositeView initialized', arguments, this);
        }
    });

});