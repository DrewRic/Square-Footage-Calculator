import React, { useState } from 'react';

const RoomForm = ({ onAddRoom }) => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRoom({ length, width });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Length:</label>
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} required />
      </div>
      <div>
        <label>Width:</label>
        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} required />
      </div>
      <button type="submit">Calculate Square Footage</button>
    </form>
  );
};

export default RoomForm;
