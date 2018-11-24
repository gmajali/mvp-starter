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
      cryptos: []
    }
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
      axios.post('/prices').then(res)
    })
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
    <div id='app'>
      <h1>Currencies List</h1>
      {Object.keys(this.state.cryptos).map((key) => (
        <div id='crypto-cointainer'>
          <span className="left">{key}</span>
          <span className="right"><NumberFormat value ={this.state.cryptos[key].USD} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
          <button onClick={}>Convert to JOD</button>
          </div>
      ))}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));