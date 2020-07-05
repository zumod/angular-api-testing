app.controller('newController',['$scope',function($scope){
    $scope.onClick = function(){
        var newLine = "\r\n"            //to add multiple lines in alertbox         
            var msg = $scope.name;      //value of name
            msg += newLine;
            msg += $scope.email;        //value of email
            alert(msg);                    
    }
}])