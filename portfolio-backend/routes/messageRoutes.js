const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createMessage, listMessages } = require('../controllers/messageController');

router.post('/', createMessage);
router.get('/', auth, listMessages);

module.exports = router;
