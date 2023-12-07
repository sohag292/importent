const express = require("express");
const HelloController = require("../controllers/HelloController")
const router = express.Router();

router.get("/hello-get", HelloController.Helloget);
router.get("/demo1/:name/:city", HelloController.demoget)
router.get("/demo2", HelloController.demoget2)
router.get("/demo3", HelloController.demoget3)
router.get("/demo4", HelloController.demoget4)
router.post("/hello-post", HelloController.Hellopost);

module.exports= router;