
let nextButton = document.getElementById("nextbutton");
let prevButton  = document.getElementById("prevbutton");
var modal = document.getElementById("myModal");
var modalContainer = document.getElementById("modal-container");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("modal-img");
let header = document.querySelector('#caption h1');
let desc = document.querySelector('#caption p');
var span = document.getElementsByClassName("close")[0];
let links = document.getElementById("links");
let hamburgerOptions = document.querySelector(".hamburger-options");
console.log(hamburgerOptions)



// console.log(container)
// console.log(links);

let slides = " ";

let slideIndex = 0;

// let animatedHead = document.getElementsByClassName("head-animation") ;
// let headFrames = document.getElementsByClassName("head-frames")[0] ;

// let headFrames = [
//     "images/taneerHead1.webp",
//     "images/taneerHead2.jpg",
// ]

// let headFrames = document.querySelectorAll(".head-frames");


// let frameIndex = -1;

// let displayFrame = document.getElementById("display-frame");



// slide variables

let designPrinciples = {
    designPrinciplesThumbnail: document.getElementById("designprinciples-thumbnail"),
    designPrinciplesSlides: document.querySelectorAll(".designprinciples-slides img"),
    designPrinciplesHeader: "Design Principles",
    designPrinciplesDesc: "collection of work I did for design principles, including purchase flag redesigns and type explorations"
}

let pauseMenu = {
    pauseMenuThumbnail: document.getElementById("pausemenu-thumbnail"),
    pauseMenuSlides: document.querySelectorAll(".pausemenu-slides img"),
    pauseMenuHeader: "pause menu",
    pauseMenuDesc: "collection of work I did for design principles, including purchase flag redesigns and type explorations"
}

let etsyBranding = {
    etsyBrandingThumbnail: document.getElementById("etsybranding-thumbnail"),
    etsyBrandingSlides: document.querySelectorAll(".etsybranding-slides img"),
    etsyBrandingHeader: "Etsy Store Branding",
    etsyBrandingDesc: "Branding assets I created for the etsy store All About Florals, Wreaths & Bows."
}

let typeSpecimen = {
    typeSpecimenThumbnail: document.getElementById("typespecimen-thumbnail"),
    typeSpecimenSlides: document.querySelectorAll(".typespecimen-slides img"),
    typeSpecimenHeader: "Reimagined Campus Interactive Map",
    typeSpecimenDesc: "Current Spring 2025 senior project. Images include mapping of campus based on Image of the City, site visits to currently unmapped locations on campus, and a user research survey.",
    links: "<a target='blank' href='assets/work/typespecimen/typespecimenwebsite/index.html'>To Companion Webpage</a>"
}


let bridgeToHaiti = {
    bridgeToHaitiThumbnail: document.getElementById("bridgetohaiti-thumbnail"),
    bridgeToHaitiSlides: document.querySelectorAll(".bridgetohaiti-slides img"),
    bridgeToHaitiHeader: "Reimagined Campus Interactive Map",
    bridgeToHaitiDesc: "Current Spring 2025 senior project. Images include mapping of campus based on Image of the City, site visits to currently unmapped locations on campus, and a user research survey.",
    links: "<a target='blank' href='assets/work/bridgetohaiti/bridgetohaitiwebsite/index.html'>To Website</a>"
} 

let advocacyPoster = {
    advocacyPosterThumbnail: document.getElementById("advocacyposter-thumbnail"),
    advocacyPosterSlides: document.querySelectorAll(".advocacyposter-slides img, .advocacyposter-slides video"),
    advocacyPosterHeader: "Advocacy Poster",
    advocacyPosterDesc: "A poster created"
}

let worldOfAction = {
    worldOfActionThumbnail: document.getElementById("worldofaction-thumbnail"),
    worldOfActionSlides: document.querySelectorAll(".worldofaction-slides img"),
    worldOfActionHeader: "WORLD OF ACTION",
    worldOfActionDesc: "World of Action is a narrative based series of posters that unfold in a sequential manner, featuring an ever expanding cast of characters such as superheroes, robot armies, viking warriors and eldritch abominations. Similar to comic books, each arc is mostly self isolated, exploring the happenings of a particular conflict or event. While some storylines are created as the result of events happening in other ones, many of the poster series can be collected and enjoyed without getting the ones that come before it."
}

let interactiveMap = {
    interactiveMapThumbnail: document.getElementById("interactivemap-thumbnail"),
    interactiveMapSlides: document.querySelectorAll(".interactivemap-slides img"),
    interactiveMapHeader: "Campus Interactive Map",
    interactiveMapDesc: "Current Spring 2025 senior project. Images include mapping of campus based on Image of the City, rough mappping after site visits to currently unmapped locations on campus, and a flier and data for a user research survey." ,
        links: "<a target='blank' href='https://drive.google.com/file/d/1pEYKka2VBU5UiIIArlrHR7HIOH7NHpK2/view'>To Research Survey</a>" 
}


let interactiveMapCont  = {
    interactiveMapContThumbnail: document.getElementById("interactivemapcont-thumbnail"),
    interactiveMapContSlides: document.querySelectorAll(".interactivemapcont-slides img"),
    interactiveMapContHeader: "Campus Interactive Map",
    interactiveMapContDesc: "Current Spring 2025 senior project. Images include mapping of campus based on Image of the City, rough mappping after site visits to currently unmapped locations on campus, and a flier and data for a user research survey.",
    links: "<a target='blank' href='assets/work/interactivemapcont/interactivemapcontwebsite/index.html'>To Interactive Map</a> <a target='blank' href='https://soar.suny.edu/handle/20.500.12648/16760'>To Senior Thesis</a>" 

}

console.log(interactiveMapCont)

let sandersMusuem = {
    sandersMusuemThumbnail: document.getElementById("sandersmusuem-thumbnail"),
    sandersMusuemSlides: document.querySelectorAll(".sandersmusuem-slides img"),
    sandersMusuemHeader: "Sanders' Comic Conservation Musuem Website",
    sandersMusuemDesc: "Website created for a hypothetical comic book musuem in Vermont. Includes a working form, and accesible and responsive design.",
    links: "<a target='blank' href='assets/work/sandersmusuem/sandersmusuemwebsite/index.html'>To Website</a>"
}

//slide onclicks

worldOfAction.worldOfActionThumbnail.onclick = function() {
    slides = worldOfAction.worldOfActionSlides
    modalImg.src = worldOfAction.worldOfActionSlides[0].src
    header.textContent = worldOfAction.worldOfActionHeader
    desc.textContent = worldOfAction.worldOfActionDesc
    openGallery()
}



advocacyPoster.advocacyPosterThumbnail.onclick = function() {
    slides = advocacyPoster.advocacyPosterSlides
    modalImg.src = advocacyPoster.advocacyPosterSlides[0].src
    header.textContent = advocacyPoster.advocacyPosterHeader
    desc.textContent = advocacyPoster.advocacyPosterDesc
    openGallery()
}

typeSpecimen.typeSpecimenThumbnail.onclick = function(){
    slides = typeSpecimen.typeSpecimenSlides;
    modalImg.src = typeSpecimen.typeSpecimenSlides[0].src;
    header.textContent = typeSpecimen.typeSpecimenHeader;
    desc.textContent = typeSpecimen.typeSpecimenDesc;
    links.innerHTML = typeSpecimen.links;
    openGallery();

    // if (slides = typeSpecimen.typeSpecimenSlides) {
       modalImg.onclick = function() {
        window.open("assets/work/typespecimen/typespecimenwebsite/index.html");
    }
// }
}

designPrinciples.designPrinciplesThumbnail.onclick = function() {
    slides = designPrinciples.designPrinciplesSlides
    modalImg.src = designPrinciples.designPrinciplesSlides[0].src
    header.textContent = designPrinciples.designPrinciplesHeader
    desc.textContent = designPrinciples.designPrinciplesDesc
    openGallery()
}

pauseMenu.pauseMenuThumbnail.onclick = function() {
    slides = pauseMenu.pauseMenuSlides
    modalImg.src = pauseMenu.pauseMenuSlides[0].src
    header.textContent = pauseMenu.pauseMenuHeader
    desc.textContent = pauseMenu.pauseMenuDesc
    openGallery()
}

etsyBranding.etsyBrandingThumbnail.onclick = function() {
    slides = etsyBranding.etsyBrandingSlides
    modalImg.src = etsyBranding.etsyBrandingSlides[0].src
    header.textContent = etsyBranding.etsyBrandingHeader
    desc.textContent = etsyBranding.etsyBrandingDesc
    openGallery()
}


bridgeToHaiti.bridgeToHaitiThumbnail.onclick = function() {
    slides = bridgeToHaiti.bridgeToHaitiSlides
    modalImg.src = bridgeToHaiti.bridgeToHaitiSlides[0].src
    header.textContent = bridgeToHaiti.bridgeToHaitiHeader
    desc.textContent = bridgeToHaiti.bridgeToHaitiDesc
        links.innerHTML = bridgeToHaiti.links;

    openGallery()
}

interactiveMap.interactiveMapThumbnail.onclick = function() {
    slides = interactiveMap.interactiveMapSlides
    modalImg.src = interactiveMap.interactiveMapSlides[0].src
    header.textContent = interactiveMap.interactiveMapHeader
    desc.textContent = interactiveMap.interactiveMapDesc
        links.innerHTML = interactiveMap.links;

    openGallery()
}

interactiveMapCont.interactiveMapContThumbnail.onclick = function() {
    slides = interactiveMapCont.interactiveMapContSlides
    modalImg.src = interactiveMapCont.interactiveMapContSlides[0].src
    header.textContent = interactiveMapCont.interactiveMapContHeader
    desc.textContent = interactiveMapCont.interactiveMapDesc
    links.innerHTML = interactiveMapCont.links;

    openGallery()
}


sandersMusuem.sandersMusuemThumbnail.onclick = function() {
    slides = sandersMusuem.sandersMusuemSlides
    modalImg.src = sandersMusuem.sandersMusuemSlides[0].src
    header.textContent = sandersMusuem.sandersMusuemHeader
    desc.textContent = sandersMusuem.sandersMusuemDesc
    links.innerHTML = sandersMusuem.links;

    openGallery()

// if (slides = sandersMusuem.sandersMusuemSlides){
    modalImg.onclick = function() {
        window.open("assets/work/sandersmusuem/sandersmusuemwebsite/index.html");
    }
// }
}
// S

//makes modal and button visible  
function openGallery(){
    modal.style.display = "flex"
    // document.body.style.overflow = 'hidden'; // Hides both vertical and horizontal scrollbars


//gives current slide that will be shown the class of displaySlide, which ensure only one slide appears at a time
    
    slides[slideIndex].classList.add("displaySlide");

// if and else statment that determines if buttons should be shown depending if there is a sufficient amount of slides to go through

    if (slides.length === 1) {
        prevButton.style.display = "none"
        nextButton.style.display = "none"
    } else {
        nextButton.style.display = "block"
        prevButton.style.display = "block"
}

if (links.innerHTML === ""){
    links.style.display = "none"
} else {
    links.style.display = "block"
}

}


// enables the "X" at the corner of the modal to close the modal
span.onclick = function() {
  modal.style.display = "none";
  links.innerHTML = "";
  links.style.display = "none";

        // document.body.style.overflow = 'visible'; // Hides both vertical and horizontal scrollbars

}


// ensures that slides will cycle through eachother when reaching beginning or end of slides.length

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

// removes the displaySlide class from previous slide and gives it to next slide, upon clicking buttons
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
    modalImg.src = slides[slideIndex].src

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    modalImg.src = slides[slideIndex].src
}


//upon initialization, a functions runs to alter the location of #nextbutton and #prevbutton to better suit mobile ui
window.onload = function ()
    {
      if (window.innerWidth < 1199) {

        const modalButtons = document.createElement("div");
        modalButtons.setAttribute("class", "modal-buttons");

        modalContainer.appendChild(modalButtons)

        modalButtons.appendChild(prevButton);
        modalButtons.appendChild(nextButton);

        modalButtons.style.display = "inline-flex"
        modalButtons.style.justifyContent = "space-evenly"
        // modalButtons.style.width = "100%"
        modalButtons.style.gap = "16px"
        // modalButtons.style.marginTop = "24px"
      }
  }

function toggleHamburgerOptions(){

  if (hamburgerOptions.style.display === "flex") {
    hamburgerOptions.style.display = "none";
  } else {
    hamburgerOptions.style.display = "flex";
  }
}




// command the change styling of work section when phone size

// let galleryRow = document.getElementsByClassName("gallery-row")

// let mq = window.matchMedia( "(max-width: 500px)" );


// if (mq.matches) { 
//     console.log(galleryRow);

//       galleryRows.forEach(galleryRow => {
//         galleryRows.classList.remove("gallery-row");
//         // console.log(galleryRow);
//     })
// } 


//"animated" Taneer head on landing page\


// function headAnimation() {

// displayFrame.src = headFrames[frameIndex].src

// frameIndex++

// // console.log(displayFrame).src

// console.log("I was clicked!")

// console.log(displayFrame.src)

// }