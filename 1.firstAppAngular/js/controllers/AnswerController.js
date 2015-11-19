questApp.controller('AnswerController',
    function AnswerController($scope, $http){
		
		$scope.response={};
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                
				$http.post("postAnswer.php", answer).success(function (answ) {
					$scope.response=answ;
				});
            }
        };
    }
)