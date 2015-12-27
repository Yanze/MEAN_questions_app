var mongoose = require('mongoose');
var Question = mongoose.model('Question');


module.exports = (function(){
  return{
    getAll: function(req, res){
      Question.find({}, function(err, questions){
        if(err){
          res.json({
            status: "error",
            message: "KO"
          });
        }
        else{
          res.json(questions);
        }
      });
    },

    getQuestionById: function(req, res){
      Question.findOne({_id: req.params.id}).populate("answers").exec(function(err, question){
        if(err){
          res.json({
            status: "error",
            message: "KO"
          });
        }
        else{
          res.json(question);
        }
      });
    },

    addNew: function(req, res){
      var question = new Question({
        title: req.body.title,
        description: req.body.description,
        answers: []
      });
      console.log(question);

      question.save(function(err){
        if(err){
          res.json({
            status: "error",
            message: "KO"
          });
        }
        else {
          res.json({
            status: "success",
            message: "OK"
          });
        }
      });
    },



 };
})();
