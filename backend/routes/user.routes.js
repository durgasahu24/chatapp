import exporess from 'express'
import { getOtherUser, login, logout, register } from '../controller/user.controler.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
const router = exporess.Router();


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/").get(isAuthenticated, getOtherUser)


export default router;