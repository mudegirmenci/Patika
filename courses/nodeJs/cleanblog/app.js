import express from "express";

const app = new express();

app.get('/', (req,res) => {
    const blog = {id:1, title: "Blog Title", description: "Blog Description"}

    res.send(blog)
})


const port =5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})