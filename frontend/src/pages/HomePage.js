import React, { useState, useEffect } from 'react';
import RoomForm from '../components/RoomForm';
import RoomList from '../components/RoomList';
import axios from '../services/api';

const HomePage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get('/api/rooms');
      setRooms(response.data);
    };

    fetchRooms();
  }, []);

  const addRoom = async (roomData) => {
    const response = await axios.post('/api/rooms', roomData);
    setRooms([...rooms, response.data]);
  };

  const deleteRoom = async (roomId) => {
    await axios.delete(`/api/rooms/${roomId}`);
    setRooms(rooms.filter(room => room._id !== roomId));
  };

  return (
    <div>
      <h1>Room Square Footage Calculator</h1>
      <RoomForm onAddRoom={addRoom} />
      <RoomList rooms={rooms} onDeleteRoom={deleteRoom} />
    </div>
  );
};

export default HomePage;
