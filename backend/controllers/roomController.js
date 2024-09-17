const Room = require('../models/Room');

// Get all rooms for a user
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ user: req.user.id });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a room
exports.addRoom = async (req, res) => {
  const { length, width } = req.body;
  const squareFootage = length * width;
  try {
    const room = new Room({ length, width, squareFootage, user: req.user.id });
    await room.save();
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    if (room.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await room.remove();
    res.json({ message: 'Room deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
