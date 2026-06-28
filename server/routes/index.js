const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Blog Platform API is running!");
});

module.exports = router;