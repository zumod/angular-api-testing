
var app = angular.module("sumod", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/name", {
        templateUrl : "api/getData.php"
    })
   
});
function getResultsPage(){
    $http({
        url: URL + 'api/getData.php',
        method: 'GET'
     }).then(function(res){
        $scope.data = res.data.data;
     });
}