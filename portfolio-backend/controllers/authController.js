const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Đăng ký admin (nên gọi 1 lần, sau đó tắt route này)
exports.register = [
    body('username').notEmpty(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

        try {
        const { username, password } = req.body;
        const exists = await User.findOne({ username });
        if (exists)
            return res.status(400).json({ message: 'User already exists' });

        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'Admin created' });
        } catch (err) {
        res.status(500).json({ message: 'Server error' });
        }
    }
];

// Đăng nhập
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch)
        return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
