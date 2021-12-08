const mongoose = require("mongoose");

const MomSchema = new mongoose.Schema({
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

module.exports(mongoose.model("Mom"), MomSchema);
