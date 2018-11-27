import React from 'react';
import ReactDOM from 'react-dom';
// import '../dist/style.css';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';
var NumberFormat = require('react-number-format');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cryptos: [],
      cryptosETH: [],
      cryptosLTC: [],
      upDown: ["https://static.thenounproject.com/png/1195138-200.png", "https://static.thenounproject.com/png/1195134-200.png"],
      arrow: '',
      arrowETH: '',
      arrowLTC: ''
    }
  }

  

  componentDidMount() {
    var oldVal = 0;
    var percentage = 0;
    var oldValETH = 0;
    var percentageETH = 0;
    var oldValLTC = 0;
    var percentageLTC = 0;
    setInterval(() => {
      axios.get('/getSpecificCurrency?currencyName=BTC').then(res => {
        // console.log(res.data.result);
        this.setState({cryptos: res.data.splice(res.data.length -1)});
        //function to show if price increased or decreased
        console.log('new:', this.state.cryptos[0].price, 'old:', oldVal);
        percentage = res.data[res.data.length - 1].price / oldVal;
        if(percentage >= 1){
          console.log('show greater image');
          this.setState({arrow: this.state.upDown[0]});
        } else {
          console.log('show smaller image')
          this.setState({arrow: this.state.upDown[1]});
        }
        
        oldVal = res.data[res.data.length - 1].price;
        // console.log(res);
      });
    }, 5000);

    setInterval(() => {
      axios.get('/getSpecificCurrency?currencyName=ETH').then(res => {
        // console.log(res.data.result);
        this.setState({cryptosETH: res.data.splice(res.data.length -1)});

        percentageETH = res.data[res.data.length - 1].price / oldValETH;
        if(percentageETH >= 1){
          console.log('show greater image');
          this.setState({arrowETH: this.state.upDown[0]});
        } else {
          console.log('show smaller image')
          this.setState({arrowETH: this.state.upDown[1]});
        }
        
        oldValETH = res.data[res.data.length - 1].price;
      });
    }, 5000);
      
    setInterval(() => {
      axios.get('/getSpecificCurrency?currencyName=LTC').then(res => {
        // console.log(res.data.result);
        this.setState({cryptosLTC: res.data.splice(res.data.length -1)});

        percentageLTC = res.data[res.data.length - 1].price / oldValLTC;
        if(percentageLTC >= 1){
          console.log('show greater image');
          this.setState({arrowLTC: this.state.upDown[0]});
        } else {
          console.log('show smaller image')
          this.setState({arrowLTC: this.state.upDown[1]});
        }
        
        oldValLTC = res.data[res.data.length - 1].price;
      });
    }, 5000);
  }

  render () {
    return (
    <div id='app'>
      <h1>Currencies List</h1>
      <h2>Live Data:</h2>
      {Object.keys(this.state.cryptos).map((key) => (
        <div id='crypto-cointainer' className="class">
          <span className="left">{this.state.cryptos[key].cryptoCurrency}</span>&nbsp;
          <span className="left">{this.state.cryptos[key].actualCurrency}</span>
          <br></br>
          <span className="right"><NumberFormat value ={this.state.cryptos[key].price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
          <br></br>
          <span className="right"><NumberFormat value ={this.state.cryptos[key].jod.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'JOD'} /></span>
          <br></br>
          <img src={this.state.arrow}></img>
          </div>
      ))}
      {Object.keys(this.state.cryptosETH).map((key) => (
        <div id='crypto-cointainer' className="class">
          <span className="left">{this.state.cryptosETH[key].cryptoCurrency}</span>&nbsp;
          <span className="left">{this.state.cryptosETH[key].actualCurrency}</span>
          <br></br>
          <span className="right"><NumberFormat value ={this.state.cryptosETH[key].price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
          <br></br>
          <span className="right"><NumberFormat value ={this.state.cryptosETH[key].jod.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'JOD'} /></span>
          <br></br>
          <img src={this.state.arrowETH}></img>
          </div>
      ))}
      {Object.keys(this.state.cryptosLTC).map((key) => (
        <div id='crypto-cointainer' className="class">
          <span className="left">{this.state.cryptosLTC[key].cryptoCurrency}</span>&nbsp;
          <span className="left">{this.state.cryptosLTC[key].actualCurrency}</span>
          <br></br>
          <span className="right"><NumberFormat value ={this.state.cryptosLTC[key].price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
          <br></br>
          <span className="right"><NumberFormat value ={this.state.cryptosLTC[key].jod.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'JOD'} /></span>
          <br></br>
          <img src={this.state.arrowLTC}></img>
          </div>
      ))}
      <p><a href="https://localbitcoins.com/country/JO">Click here</a> to buy Bitcoin in Jordan.</p>
      <p><a href="https://www.coinbase.com">Click here</a> to buy Cryptocurrencies online.</p>
    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


    // axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
    // .then(res => {
    //   const cryptos = res.data;
    //   console.log(cryptos);
    //   // this.setState({cryptos: cryptos});
    //   axios.post('/prices').then(res);