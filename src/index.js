const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const quoteRouter = require("./routers/quote");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(quoteRouter);

app.listen(port);