const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Room', RoomSchema);
