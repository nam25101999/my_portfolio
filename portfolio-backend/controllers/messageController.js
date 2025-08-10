const Message = require('../models/Message');
const { sendContactEmail } = require('../utils/mailer');

// Tạo tin nhắn liên hệ (public)
exports.createMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const msg = new Message({ name, email, subject, message });
        await msg.save();

        // Gửi email (nếu cấu hình)
        try {
        await sendContactEmail({ name, email, subject, message });
        } catch (err) {
        console.warn('Failed to send email:', err.message);
        }

        res.status(201).json({ message: 'Message sent' });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// Lấy danh sách tin nhắn (Admin)
exports.listMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};
