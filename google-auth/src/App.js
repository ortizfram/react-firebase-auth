import React from "react";
import Account from './components/Account';
import Signin from './components/Signin';
import  Home from './components/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    </div>
  );
}

export default App;
