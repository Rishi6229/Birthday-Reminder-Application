import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BirthdayForm from "./components/BirthdayForm";
import BirthdayList from "./components/BirthdayList";
import BirthdayReminder from "./components/BirthdayReminder";
import Login from "./components/Login";
import "./App.css";


const  PrivateRoute = ({children})=>{
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  return username && password ? children : <Navigate to="/"/>
}



function App() {
  const [birthdays, setBirthdays] = useState([]);

  const addBirthday = (newBirthday) => {
    setBirthdays([...birthdays, newBirthday]);
  };

  const clearBirthdays = () => {
    setBirthdays([]);
  };

  // const handleLogin = () => {
  //   setUserLoggedIn(true);
  //   localStorage.setItem("isUserLoggedIn", true);
  // };

  // const handleLogout = () => {
  //   setUserLoggedIn(false);
  //   localStorage.removeItem("isUserLoggedIn");
  // };

  // const handleRegistration = () => {
  //   setUserRegistered(true);
  // };

  return (
    <Router>
      <Routes>
         <Route path = "/" element={<Login/>}/>

     
      <Route
        path="/birthday-reminder"
        element={
          <PrivateRoute>
            <BirthdayReminder/>
          </PrivateRoute>
        }
       /> 
       </Routes>
    </Router>
    // <div className="app-container">
    //   <h1>Birthday Reminder</h1>

    //       <BirthdayForm addBirthday={addBirthday} />
    //       <BirthdayList birthdays={birthdays} />
    //       <button onClick={clearBirthdays}>Clear Birthday</button>
    // </div>
  );
}
export default App;
