/*global MapApp, JST */
'use strict';

MapApp.module('Views', function (Views, App, Backbone, Marionette, $) {

    // ---------------
    // SearchAddress Result ItemView
    // ---------------
    Views.SelectedAddressesItemView = Marionette.ItemView.extend({
        tagName: 'tr',

        template: JST['./WebAppSample/Scripts/src/templates/selectedAddressesItemView.hbs'],

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
    Views.SelectedAddressesCompositeView = Marionette.CompositeView.extend({
        tagName: 'div',

        template: JST['./WebAppSample/Scripts/src/templates/selectedAddressesCompositeView.hbs'],

        itemView: Views.SelectedAddressesItemView,

        itemViewContainer: 'tbody',

        initialize: function () {
            App.vent.on('search:address:selected', function(address) {
                this.collection.add(address);
            }.bind(this));
        }
    });

});