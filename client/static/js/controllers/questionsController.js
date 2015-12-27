var app = angular.module("app");


app.controller("questionsController", function($scope, QuestionsFactory) {
  QuestionsFactory.showQuestions(function(data){
    $scope.questions = data;
  });
});
