import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//create schema
//Formdan gelecek verilerin veritabanına kayıt şablonu.
const PostSchema = new Schema({
    title: String,
    subtitle: String,
    author: String,
    post: String,
    image: String,
    dateCreated: {
        type: Date,
        default: Date.now(),
    }
  });

  //şablona göre veritabanı oluştur.
  const Post = mongoose.model('Post', PostSchema);

 export  default Post 
