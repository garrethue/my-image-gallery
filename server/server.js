const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const gallery = require("./routes/gallery.router.js");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

/** ---------- MIDDLEWARE ---------- **/
app.use(cors());
app.use(bodyParser.json()); // needed for axios requests

if (process.env.NODE_ENV == "production") {
  app.use(express.static("./build"));
} else {
  //set up static page
  app.use(express.static("./public"));
}

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/gallery", gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
