const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = "mongodb+srv://quiz:SmDJ85o8ymlsEXjB@cluster0.b7hllrx.mongodb.net/Exams23001?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

let Record = require("./models/record.model");
app.get('/', async (req,res) =>{
  const r = new Record({
    name: "Nelson Yip",
    sid: "300356675"
  });

  r.save()
  .then(() => res.json("Record added!"))
  .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));