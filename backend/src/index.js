const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/user");
const quoteRouter = require("./routers/quote");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(quoteRouter);

app.listen(port);
