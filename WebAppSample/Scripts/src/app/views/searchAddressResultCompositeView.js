/*global MapApp, JST */
'use strict';

MapApp.module('Views', function (Views, App, Backbone, Marionette, $) {

    // ---------------
    // SearchAddress Result ItemView
    // ---------------
    Views.SearchAddressResultItemView = Marionette.ItemView.extend({
        tagName: 'tr',

        template: JST['./WebAppSample/Scripts/src/templates/searchAddressResultItemView.hbs'],

        events: {
            'click .addressLink': 'addressLinkClicked'
        },

        addressLinkClicked: function(e) {
            e.preventDefault();
            App.vent.trigger('search:address:selected', this.model);
        }
    });



    // ---------------
    // SearchAddress Result CompositeView
    // ---------------
    Views.SearchAddressResultCompositeView = Marionette.CompositeView.extend({
        tagName: 'div',

        template: JST['./WebAppSample/Scripts/src/templates/searchAddressResultCompositeView.hbs'],

        itemView: Views.SearchAddressResultItemView,

        itemViewContainer: 'tbody',

        initialize: function() {
            App.vent.on('search:address:result', function(data) {
                this.collection.reset(data);
            }.bind(this));

            App.vent.on('search:address:selected', function () {
                this.collection.reset([]);
            }.bind(this));
        }
    });

});