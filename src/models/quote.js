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
});

const Quote = model("Quote", quoteSchema);

module.exports = Quote;
