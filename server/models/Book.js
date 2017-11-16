import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  auteur: { type: String, required: true },
  annee_de_publication: Number,
  pages: Number,
  date_de_creation: Number
}, { versionKey: false });

export default mongoose.model('Book', BookSchema);