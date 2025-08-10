const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) return res.status(401).json({ message: 'Invalid token' });
        next();
    } catch {
        res.status(401).json({ message: 'Token invalid' });
    }
};

module.exports = auth;
