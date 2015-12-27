var app = angular.module("app");

app.factory("AnswerFactory", function($http){
  var factory = {};

  factory.addAnswer = function(answer, callback){
    $http.post('/add-answer', answer).success(function(response){
      callback(response);
    });
  };

  factory.addLikes = function(answerId, callback){
    $http.post('/add-like', {_id:answerId}).success(function(response){
      callback(response);
    });
  };

  return factory;
});
