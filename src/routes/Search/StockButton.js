import React from 'react'

class StockButton extends React.Component {
    render() {
        const { title } = this.props
        return (
            <div className='stock-button'>
                {title}
                <button onClick={() => this.props.delete()}>X</button>
            </div>
        )
    }
}

export default StockButton