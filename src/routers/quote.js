const { Router } = require("express");
const Quote = require("../models/quote");

const router = new Router();

router.post("/quotes", async (req, res) => {
  const quote = new Quote(req.body);
  try {
    await quote.save();
    res.status(201).send(quote);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/quotes", async (req, res) => {
  try {
    const quotes = await Quote.find({});
    res.send(quotes);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/quotes/:id", async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    if (!quote) {
      return res.status(404).send();
    }
    res.send(quote);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
