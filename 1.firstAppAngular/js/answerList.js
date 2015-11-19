questApp.directive("answerList", function($compile) {
	return function (scope, element, attrs) {
		var content = "<div class='answers'>" +
        "<div ng-repeat='answer in question.answers' class='answer'>" +
            "<div class='vote'>" +
            "<a class='vote-up' ng-click='voteUp(answer)'></a>" +
            "<span class='rate'>{{answer.rate}}</span>" +
            "<a class='vote-down' ng-click='voteDown(answer)'></a>" +
			"</div>" +
        "<b>{{answer.text | formatText}}</b>" +
        "<p>{{answer.author}}</p>" +
        "<p><i>{{answer.date}}</i></p>" +
    "</div></div>";
		var answersElem = angular.element(content);
		var compileFn = $compile(answersElem);
		compileFn(scope);
		element.append(answersElem);
	}
});