const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Đăng ký (nên tắt sau khi tạo admin)
router.post('/register', register);
// Đăng nhập
router.post('/login', login);

module.exports = router;
