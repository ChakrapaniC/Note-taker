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
        NoteModel.findOne({ _id: note.body._id }).then((data) => {
            console.log(note.body._id);
            if (data) {
                NoteModel.findOneAndUpdate(
                    { _id: note.body._id },
                    {
                        $push: {
                            Notes: {
                                _id: uuidv4(),
                                title: note.body.title,
                                description: note.body.description
                            }
                        }
                    }
                ).then((data) => {
                    if (data) {
                        resolve('note added');
                    } else {
                        reject('error occurred');
                    }
                }).catch((err) => {
                    reject(err);
                });
            } else {
                let newnote = new NoteModel({
                    _id: note.body._id,
                    Notes: [{
                        _id: uuidv4(),
                        title: note.body.title,
                        description: note.body.description,
                    }]
                });

                newnote.save().then(() => {
                    resolve('new note created successfully');
                }).catch((err) => {
                    reject(err);
                });
            }
        }).catch((err) => {
            reject(err);
        });
    });
}








function deleteNote(note) {
    return new Promise((resolve, reject) => {
        console.log(note.params.id)
        NoteModel.findOneAndUpdate({ _id: note.body._id }, { $pull: { Notes: { _id: note.params.id } } })
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err); 
            });
    });
}

function updateNote( note) {
    return new Promise((resolve, reject) => {
      //working on it
    })
}

module.exports = { getNotes, addNote, deleteNote, updateNote };