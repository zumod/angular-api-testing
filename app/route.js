var app = angular.module("sumod", ["ngRoute"]); //to create route
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/name", {
        templateUrl : "templates/name.html",
        controller  : "newController"
    })
    .when("/about", {
        templateUrl : "templates/about.html"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html"
    });
});
