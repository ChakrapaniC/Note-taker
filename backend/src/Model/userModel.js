const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    Notes: [
        {
            type: new mongoose.Schema({

                _id: String,
                tittle: String,
                notebody: String
            }
            , { timestamps: true }
            )
        }
    ]

}, { timestamps: true });


module.exports = mongoose.model('NoteModel', noteSchema, 'Notes');