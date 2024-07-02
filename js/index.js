//  https://mysite.itvarsity.org/api/mini-blog

let rootPath;

function init() {
    rootPath = "https://mysite.itvarsity.org/api/mini-blog";

    document.getElementById("getAll").addEventListener('click', getAllPosts);
}

function getAllPosts() {
    category = "getAll";
    console.log(category);
    //fetch all posts
    //set the "All" to active
}