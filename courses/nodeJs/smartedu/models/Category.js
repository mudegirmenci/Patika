import mongoose from 'mongoose';
import slugify from 'slugify';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true
  }
});

CategorySchema.pre('validate', function (next) {
  this.slug = slugify(this.name, { //schema içindeki name alanını slug haline getir
    lower: true,  //küçük
    strict:true   //: ? gibi karakterleri yok say
  })
  next() //sonraki middleware e geç
})

const Category = mongoose.model('Category',CategorySchema)

export default Category;
