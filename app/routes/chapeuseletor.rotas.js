angular.module('chapeuseletor').config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : 'app/views/sorteio.html',
        controller : 'sorteioCtrl'
    })
    .otherwise({
        templateUrl : 'app/views/404.html'
        
    })
})