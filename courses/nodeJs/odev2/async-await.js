
let posts = [
    { title: "Title 1", text: "Text 1", author: "Author 1"},
    { title: "Title 2", text: "Text 2", author: "Author 2"},
    { title: "Title 3", text: "Text 3", author: "Author 3"},
    { title: "Title 4", text: "Text 4", author: "Author 4"},
    { title: "Title 5", text: "Text 5", author: "Author 5"}
];


const postCreate = (newPost) => {
    return new Promise( (resolve, reject) => {
        
        if(newPost) {
            posts.push(newPost)
            resolve("Yeni post eklendi")
            console.log(newPost)
        } else {
            reject("Hata oluştu")
        }
    })
}

const postList = (posts) => {
    return new Promise( (resolve,reject) => {
        console.log("Postlar listeleniyor...")

        if(posts) {
            resolve("Listeleme başarılı")
            console.log(posts)
        } else {
            console.log("Listeleme başarısız")
        }
    })
}

async function postSort(post) {
    try {
        let sortedPost = await postList(post)
        console.log(sortedPost)

        let addedPost = await postCreate(post)
        console.log(addedPost)

        sortedPost = await postList(posts)
        console.log(sortedPost)
    } catch (err) {
        console.log(err)
    }
}


let newPost = { title: "Title 6", text: "Text 6", author: "Author 6"}

postSort(newPost)