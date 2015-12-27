var mongoose = require('mongoose'), Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
  text: String,
  description: String,
  username: String,
  _questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
  likes: Number
});

mongoose.model('Answer', AnswerSchema);
