const express = require('express');
const Room = require('../models/Room');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

// Save room dimensions and savings
router.post('/', authenticateToken, async (req, res) => {
  const { length, width, savings } = req.body;
  try {
    const newRoom = new Room({
      user: req.user,
      length,
      width,
      savings,
    });
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all rooms for authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const rooms = await Room.find({ user: req.user });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
