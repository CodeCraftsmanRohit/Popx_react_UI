import express from 'express';
import {
  register,
  login,
  isAuthenticated,

} from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();


authRouter.post('/register', register);
authRouter.post('/login', login);


authRouter.post('/is-auth', userAuth, isAuthenticated);
authRouter.get('/is-auth', userAuth, isAuthenticated); // ✅ added GET route


export default authRouter;