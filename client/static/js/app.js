var app = angular.module("app", ["ngRoute" ,"ngMessages"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'static/partials/login.html',
    controller: "loginController"
  })
  .when('/questions', {
    templateUrl: 'static/partials/questions.html',
    controller: "questionsController"
  })
  .when('/new-question', {
    templateUrl: 'static/partials/addQuestion.html',
    controller: "addQuestionController"
  })
  .when('/question/:id', {
    templateUrl: 'static/partials/question.html',
    controller: "questionController"
  })
  .when('/question/:id/new-answer', {
    templateUrl: 'static/partials/addAnswer.html',
    controller: "questionController"
  });

});
