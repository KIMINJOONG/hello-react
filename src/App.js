import React, { Component } from 'react';
import './App.css';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBoxComponenet=ref} />
        <button onClick={() => this.ScrollBoxComponenet.scrollToBottom()}>
        맨밑으로
        </button>
      </div>
    );
  }
}

export default App;
