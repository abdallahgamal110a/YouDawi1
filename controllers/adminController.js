require('dotenv').config();
const Admin = require('../models/adminModel');
const asyncHandler = require('../middlewares/asyncHandler');
const httpStatusText = require('../utils/httpStatusText');
const appError = require('../utils/appError');
const bcrypt = require('bcryptjs');
const generateJWT = require("../utils/generateJWT").default;
const userRoles = require('../utils/userRoles');


async function addAdmin() {
  try {
    const adminCount = await Admin.countDocuments({ userName: 'admin' });

    if (adminCount < 1) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(process.env.PASSWORD_ADMIN, salt);

      const newAdmin = new Admin({
        userName: process.env.USERNAME_ADMIN,
        password: hashedPassword,
        role: userRoles.ADMIN
      });
      await newAdmin.save();
      console.log('Admin added successfully');
    } else {
      console.log('Admin already exists. No need to add another one.');
    }
  } catch (error) {
    console.error('Error adding admin:', error.message);
  }
}
addAdmin();

const HandelData = asyncHandler(async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newAdmin = new Admin({
    userName,
    password: hashedPassword,
    role,
  });

  try {
    const token = await generateJWT({ userName: newAdmin.userName, id: newAdmin._id, role: newAdmin.role });
    newAdmin.token = token;
    console.log('Generated Token:', token);
    await newAdmin.save();
  } catch (err) {
    const error = appError.create('Failed to Handle Data', 500, httpStatusText.ERROR);
    return next(error);
  }

});

const login = asyncHandler(async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    const error = appError.create('UserName and Password are required', 400, httpStatusText.FAIL);
    return next(error);
  }
  const admin = Admin.findOne({ userName: userName });
  if (!admin) {
    const error = appError.create('Admin not found', 404, httpStatusText.FAIL);
    return next(error);
  }
  const matchedPassword = await bcrypt.compare(password, admin.password);
  if (matchedPassword) {
    const token = await generateJWT({ userName: admin.userName, id: admin._id, role: admin.role });
    return res.status(200).json({ status: httpStatusText.SUCCESS, data: { token } });
  } else {
    const error = appError.create('Invalid credentials', 401, httpStatusText.FAIL);
    return next(error);
  }
});


module.exports = {
  login
}
