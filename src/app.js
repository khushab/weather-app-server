const path = require("path");
const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
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
