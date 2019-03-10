import React, { Component } from 'react';
import appStyles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={appStyles.App}>
        <header className={appStyles.AppHeader}>
          <a
            className={appStyles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
