const NoteModel = require('../Model/userModel');
const { v4: uuidv4 } = require('uuid');
function getNotes() {
    return new Promise((resolve, reject) => {
        NoteModel.find().then((data) => {
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}

function addNote(note) {
    return new Promise((resolve, reject) => {
        const newnote = new NoteModel({
            _id: uuidv4(),
            title: note.title,
            description: note.description

        });

        newnote.save().then(() => {
            resolve('new note crerated successfully')
        }).catch((err) => {
            reject(err)
        })
    })
}

function deleteNote(id) {
    return new Promise((resolve, reject) => {
        NoteModel.deleteOne({ _id: id }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function updateNote(id, note) {
    return new Promise((resolve, reject) => {
        let newnote = new NoteModel({
            title: note.title,
            description: note.description
        });

        NoteModel.findOneAndUpdate({ _id: id }, newnote).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = { getNotes, addNote, deleteNote, updateNote };