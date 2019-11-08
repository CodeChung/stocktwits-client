import React from 'react'
import './Tweets.css'

class Tweet extends React.Component { 
    render() {
        return (
            <li className='tweet-card'>
                <div className='tweet-header'>
                    <img src={this.props.pic} alt='avatar' />
                    <h3>@{this.props.user}</h3>
                </div>
                <p>{this.props.message}</p>
                <div className='tweet-date'>
                    {this.props.date}
                </div>
            </li>
        )
    }
}

export default Tweet