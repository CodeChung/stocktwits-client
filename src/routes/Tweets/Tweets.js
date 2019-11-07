import React from 'react'
import './Tweets.css'

class Tweets extends React.Component {
    state = {
        tweets: []
    }
    componentDidMount() {
        const tweets = []
        this.setState({ tweets })
    }
    render() {
        const { tweets } = this.state
        return (
            <section className='col col-3'>
                {tweets.length ? tweets : 'Search for a stock to get tweets'}
            </section>
        )
    }
}

export default Tweets