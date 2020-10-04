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
router.post("/add-to-gallery", async (req, res) => {
  try {
    const { path, description } = req.body;
    const addPost = await pool.query(
      "INSERT INTO gallery (path, description) VALUES ($1, $2) RETURNING *",
      [path, description]
    );
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
}); // END POST Route

//DELETE Route
router.delete("/delete-an-item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query("DELETE FROM gallery WHERE id=$1", [
      id,
    ]);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err.message);
  }
});

// END DELETE Route

module.exports = router;
