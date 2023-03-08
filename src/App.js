import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';

function App() {
  return (
    <div className="App">
      <h1 
      className='text-center text-3xl font-bold'>
        Firebase Auth & Context.
      </h1>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
