var express = require('express');
var bodyParser = require('body-parser');

var db = require('../database-mongo/index.js');

var cryptos = require('../database-mongo');

var router = express.Router();

global.fetch = require('node-fetch');
const cc = require('cryptocompare');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

setInterval(function(){
  cc.price('BTC', ['USD'])
  .then(prices => {
      console.log(prices);
      let _prices = [];
    Object.keys(prices).forEach(key => {
      _prices.push({
        cryptoCurrency: 'BTC',
        actualCurrency: key,
        price: prices[key]
      });
    })
    db.save(_prices, (err, result) => {
      if(err){
        console.error(err);
      } else {
        console.log(result);
      }
    });
}).catch(console.error);
}, 3000);

setInterval(function(){
  cc.price('ETH', ['USD'])
  .then(prices => {
      console.log(prices);
      let _prices = [];
    Object.keys(prices).forEach(key => {
      _prices.push({
        cryptoCurrency: 'ETH',
        actualCurrency: key,
        price: prices[key]
      });
    })
    db.save(_prices, (err, result) => {
      if(err){
        console.error(err);
      } else {
        console.log(result);
      }
    });
}).catch(console.error);
}, 3000);

setInterval(function(){
  cc.price('LTC', ['USD'])
  .then(prices => {
      console.log(prices);
      let _prices = [];
    Object.keys(prices).forEach(key => {
      _prices.push({
        cryptoCurrency: 'LTC',
        actualCurrency: key,
        price: prices[key]
      });
    })
    db.save(_prices, (err, result) => {
      if(err){
        console.error(err);
      } else {
        console.log(result);
      }
    });
}).catch(console.error);
}, 3000);

router.get('/btc', function(req, res, next) {
  cc.price('BTC', ['USD'])
    .then(prices => {
      res.render('index', {
      title: prices.USD
      });
    }).catch(console.error);
});

router.get('/eth', function(req, res, next) {
  cc.price('ETH', ['USD'])
    .then(prices => {
      res.render('index', {
      title: prices.USD
      });
    }).catch(console.error);
});

router.get('/ltc', function(req, res, next) {
  cc.price('LTC', ['USD'])
    .then(prices => {
      res.render('index', {
      title: prices.USD
      });
    }).catch(console.error);
});





router.get('/getSpecificCurrency', function(req, res, next) {
  var currencyName = req.query.currencyName;
  // console.log('currency Name:', req.query)
  db.getSpecificCurrency(currencyName, (err, result) => {
    let response = result.map(val => {
      return {
        cryptoCurrency: val.cryptoCurrency,
        actualCurrency: val.actualCurrency,
        price: val.price,
        jod: val.price * 0.7
      };
    });
    res.send(response);
  });
});

router.post('/prices', function (req, res) {
  cryptos.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.use(router);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port 3000!');
});


// cc.price('ETH', ['USD'])
//     .then(prices => {
//         console.log(prices)
// }).catch(console.error);
// router.get('/testingget', function(req, res, next){
// console.log('reached here');
// res.send('testing test router');
// });

// cc.price('LTC', ['USD'])
//     .then(prices => {
//         console.log(prices)
// }).catch(console.error);

// router.post('/btc', function(req, res, next) {
//   cc.price('BTC', ['USD'])
//     .then(prices => {
//       let _prices = [];
//       Object.keys(prices).forEach(key => {
//         _prices.push({
//           cryptoCurrency: 'BTC',
//           actualCurrency: key,
//           price: prices[key]
//         });
//       })
//       db.save(_prices, (err, result) => {
//         if(err){
//           res.json({
//             code: -99,
//             error: err
//           });
//         }else{
//           res.json({
//             code: 0,
//             result: result
//           });
//         }
//       });
//     })
// });

// router.post('/eth', function(req, res, next) {
  
// })

// router.post('/ltc', function(req, res, next) {
  
// })

// router.get('/getAll', function(req, res, next) {
//   db.getAll((err, result) => {
//     if(err){
//       return res.json({
//         code: -99,
//         error: err
//       });
//     }
//     return res.json({
//       code: 0,
//       result: result
//     });
//   });
// });