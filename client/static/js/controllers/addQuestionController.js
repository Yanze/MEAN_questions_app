var app = angular.module("app");

app.controller("addQuestionController", function($scope,
                                                 QuestionsFactory) {

  $scope.addQuestion = function(){
    $scope.submitted = true;

    if(!$scope.new_question ||
       !$scope.new_question.title ||
       $scope.new_question.length < 5 ||
       $scope.new_question.length > 140){
         return;
       }

    QuestionsFactory.addQuestion($scope.new_question, function(response){
      if(response.status === "success"){
        $scope.warning = "Question successfully added !";
        $scope.new_question = "";
        $scope.submitted = false;
      }
    });
  };



});
