const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  items: {
    type: Array,
    required: true
  }
});

module.exports(mongoose.model("Cart"), schema);
