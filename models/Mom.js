const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports(mongoose.model("Mom"), schema);
