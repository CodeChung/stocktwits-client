import React from 'react'
import './Stocks.css'

class Stock extends React.Component {
    state = {
        tweetCount: 0,
        error: false,
    }
    componentDidMount() {
        const url = `https://api.stocktwits.com/api/2/streams/symbol/${this.props.stock}.json`
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({ tweetCount: res['messages'].length }))
            .catch(res => this.setState({ error: res.message }))
    }
    render() {
        const { stock } = this.props
        return (
            <li onClick={() => this.props.activateStock(stock)} className='list-stock'>
                <h2>{stock}</h2>
                <div className='tweet-count'>
                    {this.state.tweetCount}
                </div>
            </li>
        )
    }
}

export default Stock