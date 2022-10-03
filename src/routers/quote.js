const { Router } = require("express");
const Quote = require("../models/quote");
const auth = require("../middleware/auth");

const router = new Router();

router.post("/quotes", auth, async (req, res) => {
  const quote = new Quote({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await quote.save();
    res.status(201).send(quote);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/quotes", auth, async (req, res) => {
  try {
    const quotes = await Quote.find({ owner: req.user._id });
    res.send(quotes);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/quotes/:id", auth, async (req, res) => {
  try {
    const quote = await Quote.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!quote) {
      return res.status(404).send();
    }
    res.send(quote);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
