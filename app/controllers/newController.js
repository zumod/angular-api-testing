var app = angular.module('newApp',[]);
app.controller('newController',['$scope',function($scope){
    $scope.onClick = function(){
            alert($scope.data);                    
    }
}])
