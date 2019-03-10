import React, { Component } from 'react';
import appStyles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={appStyles.App}>
        <header className={appStyles.header}>
          <h1 className={appStyles.headerTitle}>Task runner</h1>

          <div className={appStyles.copyright}>
            &copy; 2019 Web application coded by {` `}
            <a href="http://frandieguez.com/"
              title="Go to website"
              target="_blank" rel="noopener noreferrer">
              Fran Dieguez
            </a> {` `} using React.
          </div>
        </header>

        <section className={appStyles.runnerWrapper}>

        </section>
      </div>
    );
  }
}

export default App;
