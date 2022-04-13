const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Please provide a name for your character',
            minlength: 1,
            unique: true,
            trim: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Character = model('Character', characterSchema);

module.exports = Character; 
