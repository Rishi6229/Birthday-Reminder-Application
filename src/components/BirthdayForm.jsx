import React, { useState } from "react";

function BirthdayForm({addBirthday}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function addUserBirthday(e){
    e.preventDefault();

    const addNewBirthday = {
        id: Date.now(),
        name: name,
        birthday: date
    };

    addBirthday(addNewBirthday);
    setName("");
    setDate("");
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={addUserBirthday}>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Date:</label>
          <input
            type="date"
            name="Date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button type="submit">Add Birthdaty</button>
        </form>
      </div>
    </div>
  );
}

export default BirthdayForm;
