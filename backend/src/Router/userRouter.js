const express = require('express');
const {GetNotes,AddNote, DeleteNote, UpdateNote} = require('../Controller/useController');
const router = express.Router();

router.get('/notes',GetNotes);
router.post('/add',AddNote);
router.delete('/delete/:id',DeleteNote);
router.put('/update/:id', UpdateNote)

module.exports = router