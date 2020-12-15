const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    QuestionType:{
        type : String,
        required : true
    },
    Question:{
        type : String,
        required : true
    }

});

// first letter is always capital beecause it is class and code models se collection define kkr raha
const QuestionModel = new mongoose.model('Question', questionSchema);

module.exports = QuestionModel;


