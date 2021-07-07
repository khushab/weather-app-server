const path = require('path');
const express = require('express');
const hbs = require('hbs');

//importing utils
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

const app = express();

//define path for express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('', (req, res) => {
  res.render('index', {
    title: "Weather App",
    name: "Mohammed Khushab Alam",
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: "About me",
    name: "Mohammed Khushab Alam",
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: "How can we help you?",
    name: "Mohammed Khushab Alam",
    title: "Help",
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please provide an address",
    })
  }
  geoCode(req.query.address, (error, { latitude, longitude } = {}) => {
    if (error) {
      res.send(error)
    } else {
      forecast(latitude, longitude, (err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "Please provide search query"
    })
  }
  res.send({
    products: [],
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: "404 error",
    message: "Help article not found",
    name: "Mohammed Khushab Alam",
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: "404 error",
    message: "Page Not Found",
    name: "Mohammed Khushab Alam",
  })
});

app.listen(3200, () => {
  console.log("server is running at port 3200");
});
