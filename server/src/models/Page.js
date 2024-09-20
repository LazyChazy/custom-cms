const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  slug: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('Page', pageSchema);