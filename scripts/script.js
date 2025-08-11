const menuButton = document.getElementById('menuBut');
const menuBody = document.getElementById('responsive-menu');
const dynaCont = document.querySelector(".dynaCont");
const servicesPart = document.getElementById('services');
const yCDABox = document.getElementById('yCDA');
const hmLnk = document.getElementById('liHm');
const hmLnks = document.querySelectorAll(".hmA");
const gaLnks = document.querySelectorAll(".gaA");
const title = document.querySelector("title");


if (hmLnks && gaLnks) {
    
document.addEventListener("DOMContentLoaded", function () {
    hmLnks.forEach(hmLnks => {
        hmLnks.classList.add('act')
    });
});
    
} 

//AUTOMOTIC SCRELLING PICS
const homScrImg = document.querySelector('.scroll-wrapper');
const scrollSpeed = 1; 
let scrollPosition = 0;

fetch("https://destinyart.vercel.app/Files/fetches/gallery.json")
  .then(response => response.json())
  .then(data => {
    const allImages = Object.values(data).flat();

    function createScrollingImages() {
      homScrImg.innerHTML = "";
      for (let i = 0; i < 2; i++) {
        allImages.forEach(img => {
          const imgElement = document.createElement("img");
          imgElement.src = `Files/img/${img}`;
          imgElement.alt = "Destiny Art drawing";
          imgElement.classList.add("scroll-img");
          homScrImg.appendChild(imgElement);
        });
      }
    }

    createScrollingImages();

    setInterval(() => {
      scrollPosition += scrollSpeed;
      homScrImg.style.transform = `translateX(-${scrollPosition}px)`;

      if (scrollPosition >= homScrImg.scrollWidth / 2) {
        scrollPosition = 0;
      }
    }, 16); 
  })
  .catch(error => console.error("Error loading images:", error));



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
function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// FETCHING GALLERY CONTENT
// FETCHING GALLERY CONTENT
// FETCHING GALLERY CONTENT
// FETCHING GALLERY CONTENT

/*window.onpopstate = function(event) {
  if (event.state && event.state.page === 'gallery') {
    // If the user navigates back to the gallery page, do nothing
    // But if they navigate back further, you might want to handle that case
  } else {
    // If the user navigates back to the index page, update the content accordingly
    // You might want to reload the index content or handle it differently
    window.location.href = 'index.html'; // or some other logic to load index content
  }
}; */

async function fetchDesArtHome() {
    try {
        // Show loading spinner
        dynaCont.innerHTML = `
        <div class="grid-x text-center align-center-middle" style="height: 100vh">
            <l-ring 
                    size="65"
                    stroke="5"
                    bg-opacity="0"
                    speed="1.5">
           </l-ring>
        </div>
        `;

        updateLoaderColor();
        
        await delay(2000);

        // Fetch page content
        let dynaVResponse = await fetch(dynaContUrl);
        if (!dynaVResponse.ok) {
            throw new Error(`HTTP Error: ${dynaVResponse.status}`);
        }
        let pageDisp = await dynaVResponse.text();
        
        // Update content
        dynaCont.innerHTML = pageDisp;
        
        // When loading gallery.html dynamically
        //history.replaceState({ page: 'gallery' }, 'Gallery', 'gallery.html');

        // Call script loading function
        loadGalleryScript();

        // Update navigation button styles
        gaLnks.forEach(gaLnks => {
            gaLnks.classList.add('act');
            gaLnks.disabled = true;
            hmLnks.forEach(hmLnks => {
                hmLnks.classList.remove('act');
            });
        });

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Store the new state in history
        //history.pushState({ page: "DesArtHome", content: pageDisp }, "Destiny Art Home", "?page=desart");

    } catch (error) {
        console.error("Something went wrong", error);
    }
}



function loadGalleryScript() {
    let script = document.createElement("script");
    script.src = "scripts/gallery.js";  
    script.defer = true;
    document.body.appendChild(script);
}


function loadGalleryScript() {
    let script = document.createElement("script");
    script.src = "scripts/gallery.js";  // Ensure this is the correct path to your script
    script.type = "text/javascript";
    script.defer = true;
    document.body.appendChild(script);
}

const viewGallery = document.querySelectorAll('.gaView');


if (viewGallery) {
    viewGallery.forEach(viewGallery => {
        viewGallery.addEventListener('click', () => {
            dynaContUrl = "https://destinyart.vercel.app/gallery.html"
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

