import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './routes/Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        StockTwits Search
      </header>
      <Search />
      <section className='col col-2'>
        col-2
      </section>
      <section className='col col-3'>
        col-3
      </section>
    </div>
  );
}

export default App;
