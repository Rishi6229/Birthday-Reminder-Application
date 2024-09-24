import React, { useEffect, useState } from "react";
import BirthdayForm from "./components/BirthdayForm";
import BirthdayList from "./components/BirthdayList";
import './App.css';

function App() {

  const [birthdays  , setBirthdays] = useState([]);

  const addBirthday = (newBirthday) =>{
    setBirthdays([...birthdays , newBirthday]);
  }

  const clearBirthdays = ()=>{
    setBirthdays([]);
  }
  
  return (
    <div className="app-container">
      <h1>Birthday Reminder</h1>

      {/* add the form for inputting new birthdays */}
      <BirthdayForm addBirthday={addBirthday}/>

      {/* List of birthdays */}
      <BirthdayList birthdays={birthdays}/>


      {/* Button to clear all birthdays */}
      <button onClick={clearBirthdays}>Clear Birthday</button>
    </div>
  );
}
export default App;
