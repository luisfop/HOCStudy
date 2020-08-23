import React from 'react';
import './App.css';



import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';




function App() {
  return (
    <div className="App">
      <h1>HOC - EXAMPLE</h1>

      <HoverCounter />


      <hr/>
      <ClickCounter />

    </div>
  );
}

export default App;
