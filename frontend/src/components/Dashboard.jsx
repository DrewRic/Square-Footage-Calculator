import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/room', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Your Rooms</h2>
      {rooms.map((room) => (
        <div key={room._id}>
          <p>Length: {room.length}</p>
          <p>Width: {room.width}</p>
          <p>Savings: {room.savings}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
