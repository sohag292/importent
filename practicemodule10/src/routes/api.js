const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleWare = require("../middleware/AuthVerifyMiddleware")
const router = express.Router();


router.post("/CreateProfile", ProfileController.CreateProfile);
router.get("/UserLogin", ProfileController.UserLogin);
router.get("/SelectProfile", AuthVerifyMiddleWare, ProfileController.SelectProfile);

module.exports= router;