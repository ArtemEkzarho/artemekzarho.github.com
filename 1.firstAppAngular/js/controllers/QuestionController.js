questApp.controller('QuestionController',
    function QuestionController($scope, dataService){
     
        var promiseObj=dataService.getData();
        promiseObj.then(function(value) { $scope.question=value; });
         
        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)