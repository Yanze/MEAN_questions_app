var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');


module.exports = (function(){
  return{
    addNew: function(req, res){
      Question.findOne({_id: req.body._questionId}, function(err, question){
        var answer = new Answer({
          text: req.body.text,
          description: req.body.description,
          username: req.body.username,
          _questionId: req.body._questionId,
          likes: 0
        });

        answer.save(function(err){
          if(err){
            res.json({
              status: "error",
              message: "KO"
            });
          }
          else {
            question.answers.push(answer);
            question.save();
            res.json({
              status: "success",
              message: "OK"
            });
          }
        });
      });
    },

    addLike: function(req, res){
      Answer.findOne({_id: req.body._id}, function(err, answer){
        if(err){
          res.json({
            status: "error",
            message: "KO"
          });
        }
        else {
          answer.likes += 1;
          answer.save();
          res.json({
            status: "success",
            message: "OK"
          });
        }
      });
    },



 };
})();
