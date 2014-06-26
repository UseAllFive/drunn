define([
    'app',
    'modernizr',
    'hbars!apps/splash/templates/layout',
    'hbars!apps/splash/templates/item',
    'appExtensions/globals'
], function(App, Modernizr, layoutTemplate, itemTemplate) {

    App.module('Splash.View', function(View, App, Backbone, Marionette, $, _) {

        View.Layout = Marionette.LayoutView.extend({
            template: layoutTemplate,

            className: 'splash',

            // Define regions
            regions: {
                contentRegion: '.contentRegion'
            }
        });

        View.Item = Marionette.ItemView.extend({
            className: 'splashItem',
            template: itemTemplate,
            ui: {

            },
            triggers: {

            }
        });

    });

    return App.Splash.View;
});
