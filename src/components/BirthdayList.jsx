// components/BirthdayList.js
import React from 'react';

const BirthdayList = ({ birthdays }) => {
  return (
    <div>
      <h2>Upcoming Birthdays:</h2>
      {birthdays.length === 0 ? (
        <p>No birthdays added yet.</p>
      ) : (
        <ul>
          {birthdays.map((birthday, index) => (
            <li key={index}>
              {birthday.name} - {new Date(birthday.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BirthdayList;
