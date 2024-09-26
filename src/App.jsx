import React, { useEffect, useState } from "react";
import BirthdayForm from "./components/BirthdayForm";
import BirthdayList from "./components/BirthdayList";
import "./App.css";

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
    <div className="app-container">
      <h1>Birthday Reminder</h1>

          <BirthdayForm addBirthday={addBirthday} />
          <BirthdayList birthdays={birthdays} />
          <button onClick={clearBirthdays}>Clear Birthday</button>
    </div>
  );
}
export default App;
