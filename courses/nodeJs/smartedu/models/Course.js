import mongoose from 'mongoose';
import slugify from 'slugify';
import Category from './Category.js';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true
  },
  category :{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'

  }
});

CourseSchema.pre('validate', function (next) {
  this.slug = slugify(this.name, { //schema içindeki name alanını slug haline getir
    lower: true,  //küçük
    strict:true   //: ? gibi karakterleri yok say
  })
  next() //sonraki middleware e geç
})

const Course = mongoose.model('Course',CourseSchema)

export default Course;