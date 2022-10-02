const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/be-calm");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));
