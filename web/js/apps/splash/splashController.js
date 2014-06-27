define(['app',
    'apps/splash/splashView'
], function(App, View) {
    App.module('SplashApp', function(SplashApp, App, Backbone, Marionette, $, _) {

        SplashApp.Controller = Marionette.Controller.extend({
            show: function() {
                var aboutView;
                var contentView;
                var layout;
                var slides;
                var slideshowView;

                slides = new Backbone.Collection([
                    {
                        image: 'img/slideshow/_0000_0.png',
                        caption: 'sample 0'
                    },
                    {
                        image: 'img/slideshow/_0000_1.png',
                        caption: 'sample 1'
                    },
                    {
                        image: 'img/slideshow/_0001_2.png',
                        caption: 'sample 2'
                    },
                    {
                        image: 'img/slideshow/_0002_3.png',
                        caption: 'sample 3'
                    },
                    {
                        image: 'img/slideshow/_0003_4.png',
                        caption: 'sample 4'
                    },
                    {
                        image: 'img/slideshow/_0004_5.png',
                        caption: 'sample 5'
                    },
                    {
                        image: 'img/slideshow/_0005_6.png',
                        caption: 'sample 6'
                    },
                    {
                        image: 'img/slideshow/_0006_7.png',
                        caption: 'sample 7'
                    },
                    {
                        image: 'img/slideshow/_0007_8.png',
                        caption: 'sample 8'
                    },
                    {
                        image: 'img/slideshow/_0008_9.png',
                        caption: 'sample 9'
                    },
                    {
                        image: 'img/slideshow/_0009_10.png',
                        caption: 'sample 10'
                    }
                ]);

                // Define the views
                aboutView = new View.About();
                layout = new View.Layout();
                contentView = new View.Item();
                slideshowView = new View.Slideshow({collection: slides});

                // When the layout is shown, add it's children.
                layout.on('show', function() {

                    // Add layouts to their regions.
                    layout.contentRegion.show(contentView);

                    layout.slideshowRegion.show(slideshowView);

                    layout.aboutRegion.show(aboutView);
                });

                // Show the layout.
                App.drunnRegion.show(layout);
            }
        });

    });

    return App.SplashApp.Controller;
});
