const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controller/captain.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post("/register", [
    body("email").isEmail().withMessage("Invalid email address"),
    body("fullname").isLength({min: 2}).withMessage("Full name must be at least 2 characters long"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle").notEmpty().withMessage("Vehicle information is required"),
    body("vehicle.color").notEmpty().withMessage("Vehicle color is required"),
    body("vehicle.plate").notEmpty().withMessage("Vehicle plate is required"),
    body("vehicle.capacity").notEmpty().withMessage("Vehicle capacity is required"),
], 
captainController.registerCaptain)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
], captainController.loginCaptain)  

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);


module.exports = router;