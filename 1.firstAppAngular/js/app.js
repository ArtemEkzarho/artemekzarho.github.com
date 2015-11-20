var questApp = angular.module('questApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/question',
        {
            templateUrl:'views/question.html',
            controller:'QuestionController'
        });
        $routeProvider.when('/answer',
        {
            templateUrl:'views/answer.html',
            controller:'AnswerController'
        });
        $routeProvider.otherwise({redirectTo: '/question'});
});