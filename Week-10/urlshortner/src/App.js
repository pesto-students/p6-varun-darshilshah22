import './App.css';
import React, { useState } from "react";
import Inputshortner from './InputShortner';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='container'>
      <Inputshortner setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;