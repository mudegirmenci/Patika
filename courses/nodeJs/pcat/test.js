import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//connect  DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/*
Photo.create({
  title: 'Photo title 2',
  description: 'Lorem ipsum',
});
*/
/*
Photo.find({}, (err, data) => console.log(data));
*/

/* const id = '6260bca147711b1b42b1f4db';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 1 Updated',
    description: 'Photo description 1 updated',
  },
  {
      new:true
  },
  (err, data) => {
    console.log(data);
  }
);
 */

//delete a photo
const id="6260bc58ca4aec67112fad8c"
Photo.findByIdAndDelete(id,(err,data) => {
    console.log("Photo is removed")
})