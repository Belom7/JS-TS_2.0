import React from 'react';
import './App.css';
import {Component_06} from "./06_callback, onClick, onChange, onBlur/06";
import {Destructing07} from "./07_destructured_assignment/Destructing_07";

function App() {
  return (
    <div className="App">
        <Component_06/>
        <Destructing07 name={'Maks'} age={30} lessons={[{title:'111'}]} address={{street:{title:'lenina'}}}/>
    </div>
  );
}

export default App;
