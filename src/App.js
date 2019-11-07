import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './routes/Search/Search';
import Stocks from './routes/Stocks/Stocks';

class App extends React.Component {
  state = {
    stockText: '',
    saved: [],
  }
  addStock = (event) => {
    event.preventDefault()

    const { stockText, saved } = this.state
    let stocks = stockText.split(/[\s,]+/)
    stocks.forEach(stock => stock.trim())
    stocks.forEach(stock => saved.push(stock))
    this.setState({ saved, stockText: '' })
  }
  deleteStock = (title) => {
    let { saved } = this.state
    saved = saved.filter(stock => stock !== title)
    this.setState({ saved })
  }
  changeText = (event) => {
    event.preventDefault()
    this.setState({ stockText: event.target.value })
  }
  render() {
    const { saved, stockText } = this.state
    return (
      <div className="App">
        <header className="App-header">
          StockTwits Search
        </header>
        <Search
          addStock={this.addStock}
          changeText={this.changeText}
          deleteStock={this.deleteStock}
          saved={saved}
          stockText={stockText}
        />
        <Stocks />
        <section className='col col-3'>
          col-3
        </section>
      </div>
    )
  }
}

export default App;
