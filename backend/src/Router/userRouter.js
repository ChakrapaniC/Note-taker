const express = require('express');
const {GetNotes,AddNote, DeleteNote, UpdateNote, UpdateFav,SetArchive} = require('../Controller/useController');
const {registerUser} = require('../Controller/userController')
const router = express.Router();
//User Router
router.post('/signup', registerUser)
//Notes router
router.get('/notes',GetNotes);
router.post('/add',AddNote);
router.delete('/delete/:id',DeleteNote);
router.put('/update/:id', UpdateNote);
router.put('/updateFav/:id',UpdateFav);
router.put('/updateArchive/:id', SetArchive);

module.exports = router