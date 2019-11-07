import React from 'react'
import './Stocks.css'

class Stocks extends React.Component {
    componentDidMount() {
        
    }
    render() {
        const { stocks } =  this.props
        const stocksList = stocks.map(stock => 
            <li onClick={() => this.props.activateStock(stock)} key={stock} className='list-stock'>
                <h2>{stock}</h2>
                <div className='tweet-count'>
                    1
                </div>
            </li>
        )
        return (
            <section className='col col-2'>
                <h2>Saved Stocks</h2>
                <ul className='stocks'>
                    {stocksList}
                </ul>
            </section>
        )
    }
}

export default Stocks