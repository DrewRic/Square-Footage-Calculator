const express = require('express');
const { getRooms, addRoom, deleteRoom } = require('../controllers/roomController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getRooms);
router.post('/', authMiddleware, addRoom);
router.delete('/:id', authMiddleware, deleteRoom);

module.exports = router;
