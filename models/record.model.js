const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const recordSchema = new Schema({
  name: { type: String, required: true },
  sid: { type: String, required: true },
  
});

const Record = mongoose.model("Quizexamrecord", recordSchema);
module.exports = Record;