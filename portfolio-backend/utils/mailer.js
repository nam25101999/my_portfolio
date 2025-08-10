const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,      // ví dụ: 'smtp.gmail.com'
    port: process.env.SMTP_PORT || 587,
    secure: false,                    // true nếu port 465, false với 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Hàm gửi email liên hệ
async function sendContactEmail({ name, email, subject, message }) {
    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: subject || `New contact message from ${name}`,
        text: `
        You have a new message from your portfolio website:

        Name: ${name}
        Email: ${email}
        Subject: ${subject || '(No subject)'}
        Message: ${message}
        `,
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendContactEmail };
