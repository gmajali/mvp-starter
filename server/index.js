var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo/index.js');

var cryptos = require('../database-mongo');

var router = express.Router();

global.fetch = require('node-fetch');
const cc = require('cryptocompare');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

cc.price('BTC', ['USD'])
    .then(prices => {
        console.log(prices)
}).catch(console.error);

router.get('/', function(req, res, next) {
  cc.price('BTC', ['USD'])
    .then(prices => {
      res.render('index', {
      title: prices.USD
      });
    }).catch(console.error);
});

cc.price('ETH', ['USD'])
    .then(prices => {
        console.log(prices)
}).catch(console.error);

router.get('/', function(req, res, next) {
  cc.price('ETH', ['USD'])
    .then(prices => {
      res.render('index', {
      title: prices.USD
      });
    }).catch(console.error);
});

cc.price('LTC', ['USD'])
    .then(prices => {
        console.log(prices)
}).catch(console.error);

router.get('/', function(req, res, next) {
  cc.price('LTC', ['USD'])
    .then(prices => {
      res.render('index', {
      title: prices.USD
      });
    }).catch(console.error);
});

router.post('/btc', function(req, res, next) {
  cc.price('BTC', ['USD'])
    .then(prices => {
      db.save(price)
    })
})

router.post('/eth', function(req, res, next) {
  
})

router.post('/ltc', function(req, res, next) {
  
})
app.get('/prices', function (req, res) {
  cryptos.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port 3000!');
});

