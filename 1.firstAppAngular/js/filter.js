questApp.filter('formatText', function(){
	return function(text){
		if(text.indexOf("фигасе")!==-1){
			return "***";
		}
		else{
			return text;
		}
	}
})