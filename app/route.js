
function getResultsPage(){
    $http({
        url: URL + 'api/getData.php',
        method: 'GET'
     }).then(function(res){
        $scope.data = res.data.data;
     });
}

