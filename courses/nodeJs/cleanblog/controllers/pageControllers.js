import Post from "../models/Post.js";

export const getRootPage = async (req, res) => {
    const posts = await Post.find( {})
    res.render('index', { posts });
  }
  
export const getAboutPage = (req, res) => {
    res.render('about');
  }

export const getAddPage = (req, res) => {
    res.render('add_post');
  }

export const getPostPage = async (req, res) => {
    //  const post = await Post.find( {}) veritabanından single post çek
      res.render('post');
}

export const getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', { post, });
}