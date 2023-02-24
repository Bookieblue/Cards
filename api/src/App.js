
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import List from './Components/List';


const App = () => {
  //const [toDolist setToDoList] = useState[List]

  return (
    <>
    <div className='container'>
    <Header />
    <List />
    </div>
    </>
  );
}



export default App;
