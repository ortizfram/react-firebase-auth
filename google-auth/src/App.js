import React from "react";
import Account from './components/Account';
import Signin from './components/Signin';
import  Home from './components/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
