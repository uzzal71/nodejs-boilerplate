const Admin = require('../models/Admin');

// Function for registering a new admin user
exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Create new admin user
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    return res.status(201).json({ message: 'Admin user created' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// Function for deleting an admin user
exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if admin user exists
    const existingAdmin = await Admin.findById(id);
    if (!existingAdmin) {
      return res.status(404).json({ error: 'Admin user not found' });
    }

    // Delete admin user
    await Admin.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Admin user deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
};