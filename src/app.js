const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

//define path for express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartial(partialsPath);

app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mohammed Khushab Alam",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mohammed Khushab Alam",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "How can we help you?",
  });
});

app.get("/weather", (req, res) => {
  res.send("weatheer page");
});

app.listen(3200, () => {
  console.log("server is running at port 3200");
});
