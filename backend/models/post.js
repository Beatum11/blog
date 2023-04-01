const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    text: String
});

module.exports = new mongoose.model('posts', postSchema);