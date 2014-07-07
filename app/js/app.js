'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'ui.bootstrap', 'ui.router'])

.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ui-sref-active='active }'> will set the <li> // to active whenever
        // 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/page-1');
        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        // .when('/c?id', '/contacts/:id')
        // .when('/user/:id', '/contacts/:id')
        // $stateProvider
        //     .state('page-1', {
        //         url: '/page-1/:id',
        //         templateUrl: function($stateParams) {
        //             console.log($stateParams);
        //             return 'views/page-1.' + $stateParams.filterBy + '.html';
        //         }
        //     });
        $stateProvider
            .state('page-1', {
                url: '/page-1',
                templateUrl: 'views/page-1.html'
            })
            .state('page-1.tab-1', {
                url: '/tab-1',
                templateUrl: 'views/page-1.tab-1.html'
            })
            .state('page-1.tab-2', {
                url: '/tab-2',
                templateUrl: 'views/page-1.tab-2.html'
            })
            .state('page-1.tab-3', {
                url: '/tab-3',
                templateUrl: 'views/page-1.tab-3.html'
            })
            .state('page-2', {
                url: '/page-2',
                templateUrl: 'views/page-2.html'
            })
            .state('page-2.tab-1', {
                url: '/tab-1',
                templateUrl: 'views/page-1.tab-1.html'
            })
            .state('page-2.tab-2', {
                url: '/tab-2',
                templateUrl: 'views/page-1.tab-2.html'
            })
            .state('page-2.tab-3', {
                url: '/tab-3',
                templateUrl: 'views/page-1.tab-3.html'
            })
            .state('page-3', {
                url: '/page-2',
                templateUrl: 'views/page-2.html'
            })
            .state('page-3.tab-1', {
                url: '/tab-1',
                templateUrl: 'views/page-1.tab-1.html'
            })
            .state('page-3.tab-2', {
                url: '/tab-2',
                templateUrl: 'views/page-1.tab-2.html'
            })
            .state('page-3.tab-3', {
                url: '/tab-3',
                templateUrl: 'views/page-1.tab-3.html'
            })
        ;
    }
]);