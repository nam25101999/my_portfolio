const Profile = require('../models/Profile');

// Lấy thông tin profile
exports.getProfile = async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) return res.json({});
        res.json(profile);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// Cập nhật profile (Admin)
exports.updateProfile = async (req, res) => {
    try {
        const data = req.body;
        const profile = await Profile.findOneAndUpdate({}, data, {
        new: true,
        upsert: true,
        });
        res.json(profile);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};
