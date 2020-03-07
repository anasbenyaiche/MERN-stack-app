const Mongoose = require('mongoose');

const Schema = Mongoose.Schema

const exerciceSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
});

const Exercice = Mongoose.model('Exercice', exerciceSchema);

module.exports = Exercice;