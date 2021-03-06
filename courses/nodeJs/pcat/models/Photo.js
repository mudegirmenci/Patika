import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//create schema
//Formdan gelecek verilerin veritabanına kayıt şablonu.
const PhotoSchema = new Schema({
    title: String,
    description: String,
    image: String,
    dateCreated: {
        type: Date,
        default: Date.now(),
    }
  });

  //şablona göre veritabanı oluştur.
   export const Photo = mongoose.model('Photo', PhotoSchema);


