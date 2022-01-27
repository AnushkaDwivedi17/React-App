import './App.css';
import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <Counter />
      <HelloWorld name="Anushka Dwivedi"/>
    </div>
  );
}

export default App;
