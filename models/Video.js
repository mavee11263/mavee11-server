const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
    author: {
      type: String,
    },
    video:{
        type:String,
        default: 'add later'
    },
    thumbnail:{
        type: String,
        default: 'iama thumbnail'
    },
    category:{
        type: String,
        required: [true, 'Please enter a category']
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
