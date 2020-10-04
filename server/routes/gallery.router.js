const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require("../database/db");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let { likes } = req.body;
    likes += 1;
    const incrementLike = await pool.query(
      "UPDATE gallery SET likes = $1 WHERE id = $2",
      [likes, id]
    );
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.error(err.message);
  }
}); // END PUT Route

// GET Route
router.get("/", async (req, res) => {
  try {
    const allImages = await pool.query("SELECT * FROM gallery ORDER BY id");
    res.json(allImages.rows);
  } catch (err) {
    res.sendStatus(500);
    console.error(err.message);
  }
}); // END GET Route

//POST Route
router.post("/add-an-image", async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
