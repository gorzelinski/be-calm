const { Schema, model } = require("mongoose");

const quoteSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  source: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Quote = model("Quote", quoteSchema);

module.exports = Quote;
