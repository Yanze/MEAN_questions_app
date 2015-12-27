var mongoose = require('mongoose'), Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  title: String,
  description: String,
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

mongoose.model('Question', QuestionSchema);
