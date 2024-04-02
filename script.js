
function handleSubmit() {
    var user = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var cont = document.getElementById("content").value;

    if (user && title && cont) {
        var pageOne = document.querySelector(".pageOne");
        pageOne.classList.add("hide");
        var pageTwo = document.querySelector(".pageTwo");
        pageTwo.classList.remove("hide");

        var blog = document.createElement("div");
        blog.setAttribute("class", "blog");
        var text = document.createTextNode(`${title} ${user}: ${cont}`);
        blog.appendChild(text);
        var blogList = document.querySelector(".blogs");
        blogList.appendChild(blog);
    } else {
        alert("Please fill out all on this page pretty please.");
    }
}

function handleBack() {
    var user = document.getElementById("username");
    var title = document.getElementById("title");
    var cont = document.getElementById("content");
    var pageOne = document.querySelector(".pageOne");
    pageOne.classList.remove("hide");
    var pageTwo = document.querySelector(".pageTwo");
    pageTwo.classList.add("hide");
    user.value = "";
    title.value = "";
    cont.value = "";
}
let toggle = true
function colorChange() {

    if (toggle === true) {
        var buton = document.querySelector(".dayNight")
        buton.textContent = "🌝"
        var theme = document.querySelector(".background")
        theme.style.backgroundColor = "black"
        theme.style.color = "white"
        toggle = false
    } else if (toggle === false) {
        var buton = document.querySelector(".dayNight")
        buton.textContent = "🌚"
        var theme = document.querySelector(".background")
        theme.style.backgroundColor = "white"
        theme.style.color = "black"
        toggle = true
    }



}
function handleSubmit() {
    var user = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var cont = document.getElementById("content").value;

    if (user && title && cont) {
        // Create blog post object
        var post = {
            username: user,
            title: title,
            content: cont
        };

        // Retrieve existing posts from localStorage
        var existingPosts = localStorage.getItem('posts');
        existingPosts = existingPosts ? JSON.parse(existingPosts) : [];

        // Add the new post to the existing posts array
        existingPosts.push(post);

        // Save the updated posts array back to localStorage
        localStorage.setItem('posts', JSON.stringify(existingPosts));

        // Hide page one and show page two
        var pageOne = document.querySelector(".pageOne");
        pageOne.classList.add("hide");
        var pageTwo = document.querySelector(".pageTwo");
        pageTwo.classList.remove("hide");

        // Create blog post element and append to list
        var blog = document.createElement("div");
        blog.setAttribute("class", "blog");
        var text = document.createTextNode(`${title} created by ${user}: ${cont}`);
        blog.appendChild(text);
        var blogList = document.querySelector(".blogs");
        blogList.appendChild(blog);
    } else {
        alert("Please fill out all fields on this page.");
    }
}
