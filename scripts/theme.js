const themeToggle = document.getElementById("themeToggle");

function updateLoaderColor() {
  const isLightMode = document.body.classList.contains("light"); // "light" class = light mode
  document.querySelectorAll('l-ring').forEach(ring => {
    ring.setAttribute('color', isLightMode ? 'maroon' : 'palegoldenrod');
  });
}

if (themeToggle) { 
  const icon = themeToggle.querySelector("i");

  // Apply saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("light");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Update loader color on load
  updateLoaderColor();

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");

    // Change the icon
    if (document.body.classList.contains("light")) {
      icon.classList.replace("fa-moon", "fa-sun"); // Switch to sun
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("fa-sun", "fa-moon"); // Switch to moon
      localStorage.setItem("theme", "light");
    }

    updateLoaderColor(); // Update loader color on theme toggle
  });
}