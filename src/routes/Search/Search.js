import React from 'react'
import './Search.css'

class Search extends React.Component {
    render() {
        return (
            <section className='col col-1'>
                <form>      
                    <input placeholder='$AAPL, $BABA, $BAC' name='stock-search' id='stock-search' />    
                    <button>Add</button>
                    <label for='stock-search'>Search For A Stock By Its Symbol <br /> Or Search Multiple Stocks Separated By Commas</label>
                </form>
            </section>
        )
    }
}

export default Search