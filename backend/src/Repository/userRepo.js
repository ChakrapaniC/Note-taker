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
                                isFav: note.body.isFav,
                                isArcheive: note.body.isArcheive,
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
                        isFav: note.body.isFav,
                        isArcheive: note.body.isArcheive,
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
        NoteModel.findOneAndUpdate({ _id: note.body._id }, { $pull: { Notes: { _id: note.body.NoteId } } })
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err); 
            });
    });
}

function updateNote(note) {
    return new Promise((resole,reject)=>{
        NoteModel.findOneAndUpdate({_id :note.body._id },{ $set: { "Notes.$[elem].title": note.body.title,"Notes.$[elem].description": note.body.description } },
        { arrayFilters: [{ "elem._id": note.params.id }], new: true })
        .then((data)=>{
            resole(data);
        })
        .catch((err)=>{
            reject(err)
        })
    });
}

function updateFav(note) {
    return new Promise((resolve,reject)=>{
        NoteModel.findOneAndUpdate({_id :note.body._id },{ $set: { "Notes.$[elem].isFav" : note.body.isFav } },
        { arrayFilters: [{ "elem._id": note.params.id }], new: true })
        .then((data)=>{
            resolve(data);
        })
        .catch((err)=>{
            reject(err)
        })
    });
}

function setArcheive(note) {
    return new Promise((resolve,reject)=>{
        console.log(note.body)
        NoteModel.findOneAndUpdate({_id :note.body._id },{ $set: { "Notes.$[elem].isArcheive" : note.body.isArcheive } },
        { arrayFilters: [{ "elem._id": note.params.id }], new: true })
        .then((data)=>{
            resolve(data);
        })
        .catch((err)=>{
            reject(err)
        })
    });
}

module.exports = { getNotes, addNote, deleteNote, updateNote, updateFav,setArcheive };