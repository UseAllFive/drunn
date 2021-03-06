define([
    'app',
    'modernizr',
    'hbars!apps/splash/templates/about',
    'hbars!apps/splash/templates/layout',
    'hbars!apps/splash/templates/item',
    'hbars!apps/splash/templates/share',
    'hbars!apps/splash/templates/slideshow',
    'hbars!apps/splash/templates/slide',
    'appExtensions/globals',
    'jquery-cycle2'
], function(App, Modernizr, aboutTemplate, layoutTemplate, itemTemplate, shareTemplate, slideshowTemplate, slideTemplate) {

    App.module('Splash.View', function(View, App, Backbone, Marionette, $, _) {

        View.Layout = Marionette.LayoutView.extend({
            template: layoutTemplate,

            className: 'splash',

            // Define regions
            regions: {
                aboutRegion: '.aboutRegion',
                contentRegion: '.contentRegion',
                shareRegion: '.shareRegion',
                slideshowRegion: '.slideshowRegion'
            }
        });

        View.About = Marionette.ItemView.extend({
            className: 'aboutItem',
            template: aboutTemplate,
            ui: {

            },
            triggers: {

            }
        });

        View.Item = Marionette.ItemView.extend({
            className: 'splashItem',
            template: itemTemplate,
            ui: {

            },
            triggers: {

            },
            onShow: function() {
                // Set homepage to 100% height
                this.$('.homepage').css('min-height', $(window).height());
            }
        });

        View.Share = Marionette.ItemView.extend({
            className: 'shareItem',
            template: shareTemplate,
            ui: {

            },
            triggers: {

            }
        });

        View.Slide = Marionette.ItemView.extend({
            className: 'slide',
            template: slideTemplate,
            tagName: 'li'
        });

        View.Slideshow = Marionette.CompositeView.extend({
            className: 'slideshowWrap',
            template: slideshowTemplate,
            childViewContainer: 'ul',
            childView: View.Slide,
            onShow: function() {
                this.slideshow = this.$('ul').cycle({
                    next: '.next',
                    paused: true,
                    prev: '.prev',
                    slides: '.slide',
                    fx: 'none',
                    speed: 1
                    // Enable touch support
                    // swipe: true
                });
            }
        });

    });

    return App.Splash.View;
});
