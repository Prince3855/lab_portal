const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
	title: {
        type: String,
        required: true
    },
    image : { path: String , filename: String },
	description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    mentor: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);


// Project title
// image
// Description
// Tags
// Mentor Name
// Mentor's email
// joining Link