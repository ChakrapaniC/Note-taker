const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    _id:{
        type : String,
        require: true
    },
    title:{
        type:  String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('NoteModel', noteSchema,'Notes');