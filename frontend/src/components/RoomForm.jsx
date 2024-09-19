import React, { useState } from 'react';
import axios from 'axios';

const RoomForm = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [savings, setSavings] = useState('');
  const [coinsInRoom, setCoinsInRoom] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const area = length * width;
    const coinsPerSquareFoot = savings / area;

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/room',
        { length, width, savings },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCoinsInRoom(coinsPerSquareFoot);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="Length of room" />
      <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Width of room" />
      <input type="number" value={savings} onChange={(e) => setSavings(e.target.value)} placeholder="Total savings" />
      <button type="submit">Calculate</button>
      {coinsInRoom && <p>Number of coins filling the room: {coinsInRoom}</p>}
    </form>
  );
};

export default RoomForm;
