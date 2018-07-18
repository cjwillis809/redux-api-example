import * as React from 'react';
import { fetchProducts } from './actions/actions';
import './App.css';

import logo from './logo.svg';
import store from './store';

class App extends React.Component {
  public getProducts() {
    store.dispatch(fetchProducts())
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.getProducts}>PRODUCTS</button>
      </div>
    );
  }
}

export default App;
