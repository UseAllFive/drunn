// Require that the application be included first.
define([
    'app',
    'apps/splash/splashController'
], function(App, SplashController) {
    App.module('SplashApp', function(SplashApp, App, Backbone, Marionette, $, _) {
        // Do not start automatically
        this.startWithParent = false;

        SplashApp.Router = new Marionette.AppRouter({
            appRoutes: {
                '': 'show'
            },
            controller: {
                show: function(id) {
                    App.execute('splash:show', id);
                }
            }
        });

        // Respond to the `splash:show`.
        App.commands.setHandler('splash:show', function() {
            if (_.isUndefined(SplashApp.splashController)) {
                SplashApp.splashController = new SplashController();
            }

            App.navigate('');
            SplashApp.splashController.show();
            App.trigger('splash');
        });
    });
});
