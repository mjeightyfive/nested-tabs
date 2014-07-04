'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.bootstrap',
    'ui.router',
    'ui.router.stateHelper'
]).
config(['$stateProvider', 'stateHelperProvider', '$urlRouterProvider',  function ($stateProvider, stateHelperProvider, $urlRouterProvider) {

        stateHelperProvider.setNestedState({
            name: 'page-1',
            templateUrl: 'views/page-1.html',
            children: [{
                name: 'tab-1',
                templateUrl: 'views/page-1.tab-1.html'
            }, {
                name: 'tab-2',
                templateUrl: 'views/page-1.tab-2.html'
            }]
        }, true);

    }]
);