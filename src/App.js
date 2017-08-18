import React, { Component } from 'react';
import Banner160x600 from './components/Banner160x600';
import Banner300x600 from './components/Banner300x600';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner160x600 />
        <Banner300x600 />
      </div>
    );
  }
}

export default App;
