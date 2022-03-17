const express = require("express");
const router = express.Router();

//gets all notes
router.get("/", (req, res) => {
  res.send("gets all notes");
});

//create a note
router.post("/", (req, res) => {
    console.log(req.body);
    res.send("creates a note");
});

//edit a note
router.put("/:id", (req, res) => {
    console.log(req.body);
    res.send("edits a note");
});

//delete a note
router.delete("/:id", (req, res) => {
    console.log(req.body);
    res.send("deletes a note");
});

module.exports = router;
