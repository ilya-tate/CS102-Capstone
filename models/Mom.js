const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
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
    required: false
  }
});

module.exports(mongoose.model("Mom"), Schema);
