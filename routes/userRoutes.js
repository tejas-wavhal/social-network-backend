import express from "express";
import { getAllUsers, getMyProfile, login, logout, register, updateProfile } from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

// Login
router.route("/login").post(login)

// Register
router.route("/register").post(register)

// Logout
router.route("/logout").post(logout)

// Get my Profile
router.route("/me").get(isAuthenticated, getMyProfile)

// Update Profile
router.route("/updateprofile").put(isAuthenticated, updateProfile)

// Get all Users
router.route("/getallusers").get(isAuthenticated, getAllUsers)

export default router;