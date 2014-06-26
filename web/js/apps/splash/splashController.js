define(['app',
    'apps/splash/splashView'
], function(App, View) {
    App.module('SplashApp', function(SplashApp, App, Backbone, Marionette, $, _) {

        SplashApp.Controller = Marionette.Controller.extend({
            show: function() {
                var contentView;
                var layout;
                var slides;
                var slideshowView;

                slides = new Backbone.Collection([
                    {
                        image: 'http://www.goneforarun.com/v/vspfiles/photos/tr-09492-2.jpg'
                    },
                    {
                        image: 'http://www.goneforarun.com/v/vspfiles/photos/tr-09492-2.jpg'
                    },
                    {
                        image: 'http://www.goneforarun.com/v/vspfiles/photos/tr-09492-2.jpg'
                    },
                    {
                        image: 'http://www.goneforarun.com/v/vspfiles/photos/tr-09492-2.jpg'
                    }
                ]);

                // Define the views
                layout = new View.Layout();
                contentView = new View.Item();
                slideshowView = new View.Slideshow({collection: slides});

                // When the layout is shown, add it's children.
                layout.on('show', function() {

                    // Add layouts to their regions.
                    layout.contentRegion.show(contentView);

                    layout.slideshowRegion.show(slideshowView);
                });

                // Show the layout.
                App.drunnRegion.show(layout);
            }
        });

    });

    return App.SplashApp.Controller;
});
