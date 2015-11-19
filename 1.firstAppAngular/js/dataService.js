questApp.factory('dataService', function($http, $q){
    return{
        getData: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: 'question.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.question);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
    }
})