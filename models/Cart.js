const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  items: [
    {
      id: {
        type: mongoose.Types.ObjectId,
        ref: "MomModel"
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
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: false
      }
    }
  ]
});

module.exports = mongoose.model("Cart", Schema);
