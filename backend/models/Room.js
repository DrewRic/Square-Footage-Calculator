const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  squareFootage: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', roomSchema);
