import React from 'react';
import './App.css';
import Interface from './components/Interface'
import YourFeedback from './components/YourFeedback'

function yourFeedback() {
  var element = document.getElementById("your-feedback")
  element.classList.remove("your-feedback")
}

function interfaceFun() {
  var element = document.getElementById("interface")
  element.classList.remove("your-feedback")
}


function App() {
  return (

    <div className="App">

      <button onClick={interfaceFun}>Interface</button>
      <button onClick={yourFeedback}>Your feedback</button>

      <div className="your-feedback" id="interface">
      <Interface 
        totalReviews="20"
        agreements="14"
        disagreements="6"
        accuracy="70%"
      />
      </div>

      <div className="your-feedback" id="your-feedback">
        <YourFeedback/>
      </div>
      
    </div>
  );
}

export default App;
 