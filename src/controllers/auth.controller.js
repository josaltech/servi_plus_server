const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const config = require('../../config');

const postRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    await User.create({ email, password: hashedPassword });
    res.status(201).json({
      success: true,
      message: 'User created successfully',
    });
  } catch (error) {
    if (error.code === 11000) {
      error.message = 'Email already exists';
    }
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const [user] = await User.find({ email }).select('+password');

    const matchPassword = user
      ? await argon2.verify(user.password, password)
      : undefined;

    if (!user || !matchPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const token = jwt.sign({ user: { email: user.email, id: user.id } }, config.auth.jwtSecret);
    return res.status(200).json({
      success: true,
      data: { token },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  postRegister,
  postLogin,
};
