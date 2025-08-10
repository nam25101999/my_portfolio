const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, updateProfile } = require('../controllers/profileController');

router.get('/', getProfile);
router.put('/', auth, updateProfile);

module.exports = router;
