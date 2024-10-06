// components/BirthdayForm.js
import React, { useState } from 'react';

const BirthdayForm = ({ addBirthday }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      alert('Please fill in both fields');
      return;
    }

    addBirthday({ name, date });
    setName('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        required
      />
      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default BirthdayForm;
