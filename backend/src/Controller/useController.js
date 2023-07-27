const repo = require('../Repository/userRepo');

function GetNotes(req, res) {
    repo.getNotes().then(data => {
        res.status(200).send(data)
    })
}

function AddNote(req, res) {
    repo.addNote(req.body).then(data => {
        res.status(201).send(data);
    })

}

function DeleteNote(req, res) {
    repo.deleteNote(req.params.id).then(data => {
        res.status(200).send(data);
    })
}

function UpdateNote(req, res) {
    repo.updateNote(req.params.id, req.body).then(data => {
        res.status(200).send(data)
    })
}
module.exports = { GetNotes, AddNote, DeleteNote, UpdateNote }