
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
        var text = document.createTextNode(`${title} created by ${user}: ${cont}`);
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