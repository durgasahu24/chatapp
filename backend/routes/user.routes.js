import exporess from 'express'
import { getOtherUser, login, logout, register } from '../controller/userControler.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
const router = exporess.Router();


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/otherUser").get(isAuthenticated, getOtherUser)


export default router;