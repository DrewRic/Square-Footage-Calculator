import React from 'react';

const RoomList = ({ rooms, onDeleteRoom }) => {
  return (
    <div>
      <h2>Room List</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            {`Length: ${room.length}, Width: ${room.width}, Square Footage: ${room.squareFootage}`}
            <button onClick={() => onDeleteRoom(room._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
