const menuButton = document.getElementById('menuBut');
const menuBody = document.getElementById('responsive-menu');
const dynaCont = document.querySelector(".dynaCont");
const servicesPart = document.getElementById('services');
const yCDABox = document.getElementById('yCDA');
const hmLnk = document.getElementById('liHm');
const hmLnks = document.querySelectorAll(".hmA");
const gaLnks = document.querySelectorAll(".gaA");



if (hmLnks && gaLnks) {
    
document.addEventListener("DOMContentLoaded", function () {
    hmLnks.forEach(hmLnks => {
        hmLnks.classList.add('act')
    });
});
    
} 


// ANIMATION 

let lastScrollTop = 0;
document.addEventListener('scroll', scrAnime);

    function scrAnime() {
        const elements = document.querySelectorAll(".animeImgCont");
        const currentScrollTop = window.scrollY;
            
            elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

   if (inViewport && !el.classList.contains('animated')) {
       el.classList.add('animeImg');
       el.classList.add('animated');
   }
});

    lastScrollTop = currentScrollTop;
}






function hid() {
        servicesPart.style.display="block";
}

// FETCHING GALLERY CONTENT
// FETCHING GALLERY CONTENT
// FETCHING GALLERY CONTENT
// FETCHING GALLERY CONTENT

async function fetchDesArtHome() {
        try {
                
                let dynaVResponse = await fetch(dynaContUrl);
                if (!dynaVResponse.ok) {
                    throw new Error(`HTTP Error: ${dynaVResponse.status}`);
        }
                let pageDisp = await dynaVResponse.text();
                
                dynaCont.innerHTML= pageDisp;
            
            gaLnks.forEach(gaLnks => {
                gaLnks.classList.add('act');
                hmLnks.forEach(hmLnks => {
                    hmLnks.classList.remove('act')
                });
        });
                
                window.scrollTo({ top: 0, behavior: "smooth" });

                
        } catch (error) {
                console.error("Something went wrong", error);
        }
        
}

const viewGallery = document.querySelectorAll('.gaView');

if (viewGallery) {
    viewGallery.forEach(viewGallery => {
        viewGallery.addEventListener('click', () => {
                dynaContUrl = "http://127.0.0.1:8080/gallery.html"
                fetchDesArtHome();
                servicesPart.style.display="none";
                yCDABox.style.display="none";
            
            
            
    });
});
}


//GALLERY

const scrollsImg = document.querySelector(".gaScrCont");

if (scrollsImg) {
        
        document.addEventListener("DOMContentLoaded", () => {
               // scrollsImg.scrollLeft = 200
        })

}


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuBut");
    const menu = document.getElementById("responsive-menu");
    const menuItems = menu.querySelectorAll("a");
    const menuIcon = document.getElementById("menuIc");

    menuButton.addEventListener("click", () => {
        const isOpen = menu.classList.contains("show-menu");

        if (isOpen) {
            menu.classList.remove("show-menu");
            menuButton.setAttribute("aria-expanded", "false");
            setTimeout(() =>{
                menuButton.innerHTML = `<span class="material-symbols-outlined mNIc" id="menuIc">&#xe5d2</span>`; // Close icon// Menu icon
            }, 200);
        } else {
            menu.classList.add("show-menu");
            menuButton.setAttribute("aria-expanded", "true");
            setTimeout(() =>{
            menuButton.innerHTML = `<span class="material-symbols-outlined mNIc" id="menuIci">&#xe5cd</span>`; // Close icon
        }, 200);
        }
    });

    // Close menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("show-menu");
            menuButton.setAttribute("aria-expanded", "false");
                  setTimeout(() =>{
                menuButton.innerHTML = `<span class="material-symbols-outlined mNIc" id="menuIc">&#xe5d2</span>`; // Close icon// Menu icon
            }, 200);
        });
    });
});



