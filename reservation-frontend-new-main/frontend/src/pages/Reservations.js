import React, { useState } from 'react';

function Reservations() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(1);

  const handleReservation = () => {
    fetch('http://localhost:5000/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, time, partySize })
    })
      .then((res) => res.json())
      .then((data) => alert('Reservation confirmed!'))
      .catch((err) => console.error('Error making reservation:', err));
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">Make a Reservation</h1>
      <div className="flex flex-col space-y-4 mt-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          min="1"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          placeholder="Party Size"
          className="border p-2 rounded"
        />
        <button
          onClick={handleReservation}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}

export default Reservations;
