const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post("/register", [
    body("email").isEmail().withMessage("Invalid email address"),
    // body("fullname").isLength({min: 2}).withMessage("Full name must be at least 2 characters long"),
    body("fullname.firstname")
        .isLength({ min: 2 })
        .withMessage("First name must be at least 2 characters long"),

    body("fullname.lastname")
        .isLength({ min: 2 })
        .withMessage("Last name must be at least 2 characters long"),

    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], userController.registerUser)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], userController.loginUser)


router.get("/profile", authMiddleware.authUser, userController.getUserProfile)

router.get("/logout", authMiddleware.authUser, userController.logoutUser)
module.exports = router;