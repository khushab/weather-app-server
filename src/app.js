const path = require("path");
const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// app.get("/help", (req, res) => {
//   res.send({
//     title: "help",
//     name: "Khushab",
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

app.get("/weather", (req, res) => {
  res.send("weather page");
});

app.listen(3200, () => {
  console.log("server is running");
});
