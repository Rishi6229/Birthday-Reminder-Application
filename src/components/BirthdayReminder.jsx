// components/BirthdayReminder.js
import React, { useState } from 'react';
import BirthdayForm from './BirthdayForm';
import BirthdayList from './BirthdayList';

const BirthdayReminder = () => {
  const [birthdays, setBirthdays] = useState([]);

  const addBirthday = (birthday) => {
    setBirthdays([...birthdays, birthday]);
  };

  const clearBirthdays = () => {
    setBirthdays([]);
  };

  return (
    <div>
      <h1>Birthday Reminder</h1>
      <BirthdayForm addBirthday={addBirthday} />
      <BirthdayList birthdays={birthdays} />
      <button onClick={clearBirthdays}>Clear All Birthdays</button>
    </div>
  );
};

export default BirthdayReminder;
