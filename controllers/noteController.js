const asyncHandler = require('express-async-handler');

// connect DB
const db = require('../config/db');

// @route    GET /api/note
// @desc     Get all notes
// @access   Public
const getNotes = asyncHandler(async (req, res) => {
  const queryString = 'SELECT * FROM notes';
  const { rows } = await db.query(queryString);
  res.status(200).json(rows);
});

// @route    POST /api/note
// @desc     Add a note
// @access   Public
const createNotes = asyncHandler(async (req, res) => {
  const { note } = req.body;
  if (!note) {
    res.status(400);
    throw new Error('Please add a note');
  }
  const queryString = 'INSERT INTO notes (note) VALUES ($1) RETURNING *';
  const { rows } = await db.query(queryString, [note]);
  res.status(200).json(rows);
});

// @route    PUT /api/note
// @desc     Update the note
// @access   Public
const updateNotes = asyncHandler(async (req, res) => {
  const { note , done} = req.body;
  const { id } = req.params;

  if (!note) {
    res.status(400);
    throw new Error('Please add a note');
  }
  const queryString = 'UPDATE notes SET note = $1 , done= $2 WHERE id = $3 RETURNING *';
  const { rows } = await db.query(queryString, [note, done,id]);
  res.status(200).json(rows);
});

// @route    DELETE /api/note
// @desc     Delete Notes
// @access   Public
const deleteNotes = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const queryString = 'DELETE FROM notes WHERE id = $1 RETURNING *';
  const { rows } = await db.query(queryString, [id]);
  res.status(200).json({ msg: 'Delete was successful' });
});

module.exports = {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
};