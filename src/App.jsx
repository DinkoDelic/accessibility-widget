import React from 'react';
import './App.css';
import OptionsList from './components/OptionsList';
import ResetButton from './components/ResetButton.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: false };

    this.resetAll = this.resetAll.bind(this);
  }
  resetAll(resetChange) {
    this.setState({ reset: resetChange });
  }
  render() {
    return (
      <>
        <div className=" bg-gray-50 z-50 w-100 h-auto fixed top-3 left-6 p-3 rounded-lg border-solid border-4 border-blue-300">
          <OptionsList reset={this.state.reset} resetAll={this.resetAll} />
          <ResetButton reset={this.state.reset} resetAll={this.resetAll} />
        </div>
      </>
    );
  }
}

export default App;
