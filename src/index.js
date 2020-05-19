const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const indexRoute = require("./routes/indexRoute");
const rohith = require("./routes/rohith");
const reddy = require("./routes/reddy");
const haari = require("./routes/haari");
const home = require("./routes/home");
const kris = require("./routes/kris");
const ejs = require("ejs");
const detailsRoute = require("./routes/detailsRoute");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", home);
app.use("/haari",haari);
app.use("/kris",kris);
app.use("/reddy",reddy);
app.use("/phonebook", indexRoute);
app.use("/rohith", rohith);
app.use("/details", detailsRoute);
app.get("*", (req, res) => {
  res.render("noresults");
});
const server = app.listen(process.env.PORT, () => {
  console.log("Server Running in port", server.address().port);
});
