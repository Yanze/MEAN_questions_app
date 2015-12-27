var app = angular.module("app");


app.controller("questionController", function($scope,
                                              $routeParams,
                                              QuestionsFactory,
                                              AnswerFactory,
                                              LoginFactory) {

  QuestionsFactory.getQuestionById($routeParams.id, function(data){
    $scope.question = data;
  });


  $scope.addAnswer = function(){
    $scope.submitted = true;
    var username = LoginFactory.getUsername();


    if(!$scope.new_answer ||
       $scope.new_answer.text.length < 5 ||
       $scope.new_answer.text.length > 140){
         return;
       }

    var new_answer = {
      text: $scope.new_answer.text,
      description: $scope.new_answer.description,
      username: username,
      _questionId: $routeParams.id
    };

  AnswerFactory.addAnswer(new_answer, function(response){
    if(response.status === "success"){
      $scope.warning = "Answer successfully added !";
      $scope.new_answer = "";
      $scope.submitted = false;
    }
  });
};

  $scope.likes = function(answer){
    AnswerFactory.addLikes(answer._id, function(response){
      if(response.status === 'success'){
        console.log("in");
        QuestionsFactory.getQuestionById($routeParams.id, function(data){
          $scope.question = data;
        });
      }
    });
  };


});
