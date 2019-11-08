import React from 'react'
import './Tweets.css'
import Tweet from './Tweet'

class Tweets extends React.Component {
    state = {
        tweets: []
    }
    componentDidUpdate(prevProps) {
        if (this.props.stock !== prevProps.stock) {
            const tweets = []
            const url = `https://api.stocktwits.com/api/2/streams/symbol/${this.props.stock}.json`
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    res['messages'].forEach(msg => {
                        tweets.push({
                            user: msg['user']['username'],
                            message: msg['body'],
                            date: msg['created_at'],
                            pic: msg['user']['avatar_url']
                        })
                    })
                    this.setState({ tweets })
                })
                .catch(res => this.setState({ error: res.message }))
        }
    }
    componentDidMount() {
        if (this.props.stock) {
            const tweets = []
            const url = `https://api.stocktwits.com/api/2/streams/symbol/${this.props.stock}.json`
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    res['messages'].forEach(msg => {
                        tweets.push({
                            user: msg['user']['username'],
                            message: msg['body'],
                            date: msg['created_at'],
                            pic: msg['user']['avatar_url'],
                            symbol: this.props.stock,
                        })
                    })
                })
                .catch(res => this.setState({ error: res.message }))

            this.setState({ tweets })
        }
    }
    render() {
        let { tweets } = this.state
        tweets = tweets.map((tweet, ind)=> 
            <Tweet
                key={ind}
                user={tweet.user} 
                message={tweet.message}
                date={tweet.date}
                pic={tweet.pic}
                symbol={tweet.symbol}
            />
        )
        return (
            <section className='col col-3'>
                {tweets.length ? <ul>{tweets}</ul> : 'Search for a stock to get tweets'}
            </section>
        )
    }
}

export default Tweets