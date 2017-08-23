import React, { Component } from 'react';
import Banner160x600 from './components/Banner160x600';
import Banner300x600 from './components/Banner300x600';
import Banner250x250 from './components/Banner250x250';
import DynamicInput from './containers/DynamicInput';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicInput />
        {/* <Banner160x600 /> */}
        <Banner300x600 />
        <Banner250x250 />

      </div>
    );
  }
}

export default App;
