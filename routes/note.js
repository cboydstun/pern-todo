const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
} = require('../controllers/noteController');

router.route('/').get(getNotes).post(createNotes);
router.route('/:id').put(updateNotes).delete(deleteNotes);

module.exports = router;