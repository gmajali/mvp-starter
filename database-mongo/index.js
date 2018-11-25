var mongoose = require('mongoose');
mongoose.connect('mongodb://ghazi:ghazi123@ds249372.mlab.com:49372/cryptobase');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var cryptoSchema = mongoose.Schema({
  cryptoCurrency: String,
  actualCurrency: String,
  price: Number
});

var Crypto = mongoose.model('Crypto', cryptoSchema);

//Helper functions
let getAll = (cb) => {
  Crypto.find({}, (err, result) => {
    if(err){
      return cb(err, null);
    }else{
      return cb(null, result);
    }
  });
}

let getSpecificCurrency = (currencyName, cb) => {
  Crypto.find({cryptoCurrency: currencyName}, (err, result) => {
    if(err){
      return cb(err, null);
    }else{
      return cb(null, result);
    }
  })
}

// save to database function
let save = (data, cb) => {

  // This function should save to
  // the MongoDB

  console.log('dataowner', data);
  data.forEach(ct => {
    let cryptos = new Crypto(ct);
    cryptos.save(function (err, res) {
        if (err) {
          console.log(`error = ${err}`);
          cb(err, null);
        } else {
          console.log('Saved!');
          res.JOD = res.price * 0.7;
          cb(null, res);
          }
      });
  });

  // working approach insert as array
  // Crypto.insertMany(data, (err, res) =>{
  //   if (err) {
  //     console.log(`error = ${err}`);
  //     cb(err, null);
  //   } else {
  //     console.log('Saved!');
  //     cb(null, res);
  //     }
  // });
  // cryptos.save(function (err, res) {
  //   if (err) {
  //     console.log(`error = ${err}`);
  //     cb(err, null);
  //   } else {
  //     console.log('Saved!');
  //     cb(null, res);
  //     }
  // })
}

var selectAll = function(callback) {
  Crypto.find({}, function(err, cryptos) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, cryptos);
    }
  });
};
module.exports.getSpecificCurrency = getSpecificCurrency;
module.exports.getAll = getAll;
module.exports.save = save;
module.exports.Crypto = Crypto;
module.exports.selectAll = selectAll;