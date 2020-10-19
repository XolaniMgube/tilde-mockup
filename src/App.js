import React from 'react';
import './App.css';
import Interface from './components/Interface'
import YourFeedback from './components/YourFeedback'

function App() {
  return (
    <div className="App">
      <Interface 
        totalReviews="20"
        agreements="14"
        disagreements="6"
        accuracy="70%"
      />

      <YourFeedback />
    </div>
  );
}

export default App;
 