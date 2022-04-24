import Post from '../models/Post.js';
import path from 'path';

export const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id) 
    res.render('post', { post });
    
}

export const createPost =async (req, res) => {
    //gelen verileri veritabanına işlemesi için Post modeline gönder. 
    //await ile veiler veritabanına işlenene kadar bekle
    await Post.create(req.body)
    //veri yükleme işlemi bitince yönlendir.
    res.redirect('/')
 }

export const updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.subtitle = req.body.subtitle;
    post.author = req.body.author;
    post.post = req.body.post;
    post.save();
    
    res.redirect(`/posts/${req.params.id}`);
  }

export const deletePost = async (req, res) => {
    const __dirname = path.resolve();
    const post = await Post.findOne({ _id: req.params.id });
    //let deletedImage = __dirname + '/public' + photo.image;
    //fs.unlinkSync(deletedImage);
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
  }