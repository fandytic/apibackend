const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    email : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = usersSchema;