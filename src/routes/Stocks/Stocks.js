import React from 'react'
import './Stocks.css'

class Stocks extends React.Component {
    state = {
        
    }
    componentDidMount() {
        const { stocks } = this.props
    }
    render() {
        return (
            <section className='col col-2'>
                <ul className='stocks'>
                    
                </ul>
            </section>
        )
    }
}

export default Stocks