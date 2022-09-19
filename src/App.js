import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/home";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import CreateAccount from "./components/createaccount";
import Deposit from "./components/deposit";
import UserContext from "./context";

function App() {
  
  const user ={
    name:'kieran dillon',
    email: 'kieran@mit.edu',
    password: 'S3cr3t',
    balance: 100
  };
  
  return (
   <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[user]}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/createaccount/" element={<CreateAccount/>}/>
          <Route path="/deposit/" element={<Deposit/>}/>
          <Route path="/withdraw/" element={<Withdraw/>}/>
          <Route path="/alldata/" element={<AllData/>}/>
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
