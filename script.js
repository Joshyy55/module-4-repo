
function handleSubmit() {

    var user = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var cont = document.getElementById("content").value;
    if (user && title && cont) {
        var pageOne = document.querySelector(".pageOne");
        pageOne.classList.add("hide");
        var pageTwo = document.querySelector(".pageTwo");
        pageTwo.classList.remove("hide");

    } else {
        alert("please fill everything out in the page pretty please")
    }
    var blog = document.createElement("div");
    
    
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