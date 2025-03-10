const themeToggle = document.getElementById("themeToggle");

if (themeToggle) { 
const icon = themeToggle.querySelector("i");
    

// Check saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("light");
    icon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");

    // Change the icon when toggling
    if (document.body.classList.contains("light")) {
        icon.classList.replace("fa-moon", "fa-sun"); // Change to sun
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("fa-sun", "fa-moon"); // Change to moon
        localStorage.setItem("theme", "light");
    }
});

}

