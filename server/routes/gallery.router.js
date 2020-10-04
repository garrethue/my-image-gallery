const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require("../database/db");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", async (req, res) => {
  try {
    const allImages = await pool.query("SELECT * FROM gallery");
    res.json(allImages.rows);
  } catch (err) {
    console.error(err.message);
  }
}); // END GET Route

module.exports = router;
