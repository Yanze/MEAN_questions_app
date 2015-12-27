var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');


module.exports = function(app){
  app.post('/add-question', questions.addNew);
  app.post('/add-answer', answers.addNew);
  app.get('/get-questions', questions.getAll);
  app.post('/add-like', answers.addLike);
  app.get('/get-question/:id', questions.getQuestionById);
};
