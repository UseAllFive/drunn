define(['app',
    'apps/splash/splashView',
], function(App, View) {
    App.module('SplashApp', function(SplashApp, App, Backbone, Marionette, $, _) {

        SplashApp.Controller = Marionette.Controller.extend({
            show: function() {
                var layout;

                layout = new View.Layout();

                // When the layout is shown, add it's children.
                layout.on('show', function() {
                    var contentView;

                    // Define the views
                    contentView = new View.Item();

                    // Add layouts to their regions.
                    layout.contentRegion.show(contentView);
                });

                // Show the layout.
                App.drunnRegion.show(layout);
            }
        });

    });

    return App.SplashApp.Controller;
});
