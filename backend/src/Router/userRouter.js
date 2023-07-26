const express = require('express');
const {GetNotes,AddNote, DeleteNote} = require('../Controller/useController');
const router = express.Router();

router.get('/',GetNotes);
router.post('/add',AddNote);
router.delete('/delete/:id',DeleteNote);

module.exports = router