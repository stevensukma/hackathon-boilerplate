import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import Foo from '../../components/Foo';
import Bar from '../../components/Bar';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('/api/huyu')
      .then((res) => {
        console.log(res.data)
      })
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Switch>
            <Route path='/foo' component={Foo}/>
            <Route path='/bar' component={Bar}/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
