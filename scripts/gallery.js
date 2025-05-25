function initializeGallery() {
        let allImages = {}; 
    document.getElementById("galFil1").classList.add("actShw");
    fetch("https://destinyart.vercel.app/Files/fetches/gallery.json")
        .then(response => response.json())
        .then(data => {
            allImages = data; // Store the full dataset

            displayGallery("All"); // Load all images grouped by category initially

            // Attach event listeners to filter buttons
            document.querySelectorAll(".galFil").forEach(button => {
                button.addEventListener("click", () => {
        // Remove 'actShw' class from all buttons
                    document.querySelectorAll(".galFil").forEach(btn => btn.classList.remove("actShw"));
                    button.classList.add("actShw");
                    button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }); // Scroll the clicked button into view smoothly
                    
                    // Get the category text
                    const category = button.textContent.trim();
                    displayGallery(category);
                });
            });
        })
        .catch(error => console.error("Error loading gallery:", error));


function displayGallery(category) {
    const galleryContainer = document.getElementById("gallery-container"); // The parent container for all images
    galleryContainer.innerHTML = ""; // Clear previous content

    // Create a spinner while loading
        const spinnerCont = document.createElement("div");
        spinnerCont.classList.add("grid-x", "text-center", "align-center-middle", "spCont");
        const spinner = document.createElement("div");
        spinner.innerHTML = `
           <l-ring 
                    size="60"
                    stroke="5"
                    bg-opacity="0"
                    speed="1.5"
                    color="palegoldenrod">
           </l-ring> 
        `;
        spinnerCont.appendChild(spinner);
        galleryContainer.appendChild(spinnerCont);

    setTimeout(() => {
        galleryContainer.innerHTML = ""; // Remove spinner after loading

        if (category === "All") {
            // Show all images grouped into sections
            for (const key in allImages) {
                const sectionContainer = document.createElement("div");
                sectionContainer.classList.add("category-section");

                const sectionTitle = document.createElement("h1");
                sectionTitle.classList.add("gaH");
                sectionTitle.textContent = key;
                sectionContainer.appendChild(sectionTitle);

                const gridContainer = document.createElement("div");
                gridContainer.classList.add("grid-x", "gaScrCont", "allCat");

                allImages[key].forEach(img => {
                    const imgContainer = createImageElement(img);
                    gridContainer.appendChild(imgContainer);
                });

                sectionContainer.appendChild(gridContainer);
                galleryContainer.appendChild(sectionContainer);
            }
        } else {
            // Show only selected category
            if (allImages[category]) {
                    const imgsBoxes = document.createElement("div");
                    imgsBoxes.classList.add("grid-x", "grid-margin-x", "small-up-12", "medium-up-2", "large-up-3", "gaPortrait");
                    allImages[category].forEach(img => {
                            const imgContainer = createImageElement(img);
                            imgContainer.style.marginTop="2%";
                            imgContainer.classList.add("cell", "small-12")
                            imgsBoxes.appendChild(imgContainer);
                            galleryContainer.appendChild(imgsBoxes);
                    });
            }
        }
    }, 1000); // Add delay for better UX
}

// Helper function to create image elements
function createImageElement(img) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("cell", "small-10", "medium-4", "large-4", "gaImgii", "allCat"); // Adjusts size per screen

    const imgElement = document.createElement("img");
    imgElement.src = `https://alabiohio.github.io/DestinyArt/Files/img/${img}`;
    imgElement.alt = "drawing";
    imgElement.classList.add("responsive-img", "lazyload", "gaDraImgs", "fullScreen");

    imgContainer.appendChild(imgElement);
    return imgContainer;
}
        
}
initializeGallery();

document.querySelector(".top-btn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


