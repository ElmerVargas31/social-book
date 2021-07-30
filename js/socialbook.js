//Variables
let settingsMenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");

//Function which increase the height of Settings Menu
function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

//Function which provides a dark theme to the website
darkBtn.onclick = () => {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

//Implementation of JavaScript localStorage
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}else{
    localStorage.setItem("theme", "light");
}