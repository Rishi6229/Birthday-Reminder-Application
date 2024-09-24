import React from 'react'

function BirthdayList({birthdays}) {
  return (
    <div className='birthday-list'>
       {birthdays.length > 0 ? (
        birthdays.map((birthday)=>(
            <div key={birthday.id} className='birthday-item'>
                <p> {birthday.name} {birthday.birthday}</p>
            </div>
        ))
       ):(
        <p>No birthdays to display</p>
       )}
    </div>
  )
}

export default BirthdayList