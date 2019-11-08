import React from 'react'
import './Stocks.css'
import Stock from './Stock'

class Stocks extends React.Component {
    render() {
        const { stocks } =  this.props
        const stocksList = stocks.map(stock => <Stock key={stock} stock={stock} activateStock={this.props.activateStock} />
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