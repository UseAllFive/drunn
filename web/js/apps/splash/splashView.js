define([
    'app',
    'modernizr',
    'hbars!apps/splash/templates/layout',
    'hbars!apps/splash/templates/item',
    'hbars!apps/splash/templates/slideshow',
    'hbars!apps/splash/templates/slide',
    'appExtensions/globals',
    'jquery-cycle2'
], function(App, Modernizr, layoutTemplate, itemTemplate, slideshowTemplate, slideTemplate) {

    App.module('Splash.View', function(View, App, Backbone, Marionette, $, _) {

        View.Layout = Marionette.LayoutView.extend({
            template: layoutTemplate,

            className: 'splash',

            // Define regions
            regions: {
                contentRegion: '.contentRegion',
                slideshowRegion: '.slideshowRegion'
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

        View.Slide = Marionette.ItemView.extend({
            className: 'slide',
            template: slideTemplate,
            tagName: 'li'
        });

        View.Slideshow = Marionette.CompositeView.extend({
            className: 'slideshowx',
            template: slideshowTemplate,
            childViewContainer: 'ul',
            childView: View.Slide,
            ui: {},
            trigger: {},
            onShow: function() {
                console.log(this.$el);
                this.slideshow = this.$el.cycle({
                    next: '.next',
                    pager: '.pager',
                    paused: false,
                    prev: '.prev',
                    slides: '.slide',
                    // Enable touch support
                    // swipe: true
                });
            }
        });

    });

    return App.Splash.View;
});
