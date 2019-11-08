import React from 'react'
import StockButton from './StockButton'
import './Search.css'

class Search extends React.Component {
    state = {
        stockText: '',
        saved: []
    }
    render() {
        const { saved, stockText } = this.props
        const savedButtons = saved.map(stock => <li key={stock}><StockButton delete={() => this.props.deleteStock(stock)} title={stock} /></li>)
        return (
            <section className='col col-1'>
                <form onSubmit={(e) => this.props.addStock(e)}>   
                    <div className='form-line'>
                        <input onChange={(e) => this.props.changeText(e)} value={stockText} placeholder='AAPL, BABA, BAC' name='stock-search' id='stock-search' />    
                        <button>Add</button>
                    </div>  
                    <label htmlFor='stock-search'>Search For A Stock By Its Symbol Or Search Multiple Stocks Separated By Commas</label>
                </form>
                <div className='saved-stocks'>
                    <h2>My Stocks</h2>
                    <ul>
                        {savedButtons}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Search