const { Router } = require('express');
const {
  postLogin,
  postRegister,
} = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post("/login", postLogin);
authRouter.post("/register", postRegister);


module.exports = authRouter;