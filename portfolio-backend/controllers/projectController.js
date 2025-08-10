const Project = require('../models/Project');

// Lấy danh sách dự án
exports.listProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// Lấy dự án theo ID
exports.getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Not found' });
        res.json(project);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// Tạo dự án mới (Admin)
exports.createProject = async (req, res) => {
    try {
        const payload = req.body;
        if (req.file) payload.image = `/uploads/${req.file.filename}`;
        const project = new Project(payload);
        await project.save();
        res.status(201).json(project);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// Cập nhật dự án (Admin)
exports.updateProject = async (req, res) => {
    try {
        const payload = req.body;
        if (req.file) payload.image = `/uploads/${req.file.filename}`;
        const project = await Project.findByIdAndUpdate(req.params.id, payload, {
        new: true,
        });
        if (!project) return res.status(404).json({ message: 'Not found' });
        res.json(project);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// Xóa dự án (Admin)
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted' });
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};
