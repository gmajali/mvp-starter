var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var cryptoSchema = mongoose.Schema({
  name: String,
  price: Number
});

var Crypto = mongoose.model('Crypto', cryptoSchema);

// save to database function
let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let cryptos = new Crypto(data);
  console.log('dataowner', data);

  cryptos.save(function (err, res) {
    if (err) {
      console.log("error");
    }
      console.log('Saved!');
  })
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

module.exports.save = save;
module.exports.Crypto = Crypto;
module.exports.selectAll = selectAll;