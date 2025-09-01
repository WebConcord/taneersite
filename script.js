
let nextButton = document.getElementById("nextbutton");
let prevButton  = document.getElementById("prevbutton");
let descButton = document.getElementById("descbutton");
var modal = document.getElementById("myModal");
var modalContainer = document.getElementById("modal-container");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("modal-img");
let caption = document.getElementById("caption");
let header = document.querySelector('#caption h1');
let desc = document.querySelector('#caption p');
var span = document.getElementsByClassName("close")[0];
// let links = document.getElementById("links");
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
    designPrinciplesDesc: "collection of work I did for design principles, including Purchase College flag redesigns and various type explorations."
}

let pauseMenu = {
    pauseMenuThumbnail: document.getElementById("pausemenu-thumbnail"),
    pauseMenuSlides: document.querySelectorAll(".pausemenu-slides img"),
    pauseMenuHeader: "pause menu",
    pauseMenuDesc: "<i>Pause Menu</i> is a personal journal that gives one the power to freeze time. It prompts the user to introspect and explore their memories, goals, and relationships. Activities include prompt based writing or drawing, or free association mind-mapping. Pause Menu allows the user to acquire a familiar feature and apply it to their real lives."
}

let etsyBranding = {
    etsyBrandingThumbnail: document.getElementById("etsybranding-thumbnail"),
    etsyBrandingSlides: document.querySelectorAll(".etsybranding-slides img"),
    etsyBrandingHeader: "Etsy Store Branding",
    etsyBrandingDesc: "Branding assets created for the Etsy store <a target='blank' href='https://www.etsy.com/shop/floralwreathsnbows/?etsrc=sdt#items'><i>Designs By Tenisha</i></a>."
}

let typeSpecimen = {
    typeSpecimenThumbnail: document.getElementById("typespecimen-thumbnail"),
    typeSpecimenSlides: document.querySelectorAll(".typespecimen-slides img"),
    typeSpecimenHeader: "Blacker Type Specimen",
    typeSpecimenDesc: "Type Specimen book for the <i>Blacker</i> typeface, released by <i>Zeta Fonts</i>. Includes a <a target='blank' href='assets/work/typespecimen/typespecimenwebsite/index.html'>companion webpage</a> with process presentation.",
    // links: "<a target='blank' href='assets/work/typespecimen/typespecimenwebsite/index.html'>To Companion Webpage</a>"
}


let bridgeToHaiti = {
    bridgeToHaitiThumbnail: document.getElementById("bridgetohaiti-thumbnail"),
    bridgeToHaitiSlides: document.querySelectorAll(".bridgetohaiti-slides img"),
    bridgeToHaitiHeader: "Bridge to Haiti webpage",
    bridgeToHaitiDesc: "An <a target='blank' href='assets/work/bridgetohaiti/bridgetohaitiwebsite/index.html'>educational website</a> created for SUNY Broome’s Bridge to Haiti program, which aims to improve tech literacy in rural areas. Includes embedded media and a working quiz to encourage retention.",
    // links: "<a target='blank' href='assets/work/bridgetohaiti/bridgetohaitiwebsite/index.html'>To Website</a>"
} 

let advocacyPoster = {
    advocacyPosterThumbnail: document.getElementById("advocacyposter-thumbnail"),
    advocacyPosterSlides: document.querySelectorAll(".advocacyposter-slides img, .advocacyposter-slides video"),
    advocacyPosterHeader: "Advocacy Poster",
    advocacyPosterDesc: "An advocacy poster for the technology gap, otherwise known as the digital divide. "
}

let worldOfAction = {
    worldOfActionThumbnail: document.getElementById("worldofaction-thumbnail"),
    worldOfActionSlides: document.querySelectorAll(".worldofaction-slides img"),
    worldOfActionHeader: "WORLD OF ACTION",
    worldOfActionDesc: "<i>World of Action</i> is a narrative based series of posters that unfold in a sequential manner, featuring an ever expanding cast of characters. Similar to comic books, each arc is self isolated, but often converges with or completely begins other arcs.  Buyers are encouraged to purchase the posters to unveil each storyline whilst decorating their spaces with graphic posters."
}

let interactiveMap = {
    interactiveMapThumbnail: document.getElementById("interactivemap-thumbnail"),
    interactiveMapSlides: document.querySelectorAll(".interactivemap-slides img"),
    interactiveMapHeader: "Campus Interactive Map",
    interactiveMapDesc: "Class of 2025 senior project. Images include mapping of campus based on Image of the City, rough mappping after site visits to currently unmapped locations on campus, and flyer and data for a <a target='blank' href='https://drive.google.com/file/d/1pEYKka2VBU5UiIIArlrHR7HIOH7NHpK2/view'>user research survey</a>." ,
        // links: "<a target='blank' href='https://drive.google.com/file/d/1pEYKka2VBU5UiIIArlrHR7HIOH7NHpK2/view'>To Research Survey</a>" 
}


let interactiveMapCont  = {
    interactiveMapContThumbnail: document.getElementById("interactivemapcont-thumbnail"),
    interactiveMapContSlides: document.querySelectorAll(".interactivemapcont-slides img"),
    interactiveMapContHeader: "Campus Interactive Map Cont.",
    interactiveMapContDesc: "Continuation of senior project. Includes development of a <a target='blank' href='assets/work/interactivemapcont/interactivemapcontwebsite/index.html'>web application</a> with Leaflet.js deployed on a touch-screen monitor. Features include responsive UI, live GPS, inclusion of campus amenities such as the bus loop. <a target='blank' href='https://soar.suny.edu/handle/20.500.12648/16760'>Written thesis</a> also included.",
    // links: "<a target='blank' href='assets/work/interactivemapcont/interactivemapcontwebsite/index.html'>To Interactive Map</a> <a target='blank' href='https://soar.suny.edu/handle/20.500.12648/16760'>To Senior Thesis</a>" 

}

console.log(interactiveMapCont)

let sandersMusuem = {
    sandersMusuemThumbnail: document.getElementById("sandersmusuem-thumbnail"),
    sandersMusuemSlides: document.querySelectorAll(".sandersmusuem-slides img"),
    sandersMusuemHeader: "Sanders' Comic Conservation Musuem Website",
    sandersMusuemDesc: "<a target='blank' href='assets/work/sandersmusuem/sandersmusuemwebsite/index.html'>Website</a> created for a hypothetical comic book musuem in Vermont. Includes a working form, and accesible and responsive design.",
    // links: "<a target='blank' href='assets/work/sandersmusuem/sandersmusuemwebsite/index.html'>To Website</a>"
}

//slide onclicks

worldOfAction.worldOfActionThumbnail.onclick = function() {
    slides = worldOfAction.worldOfActionSlides
    modalImg.src = worldOfAction.worldOfActionSlides[0].src
    header.innerHTML = worldOfAction.worldOfActionHeader
    desc.innerHTML = worldOfAction.worldOfActionDesc
    openGallery()
}



advocacyPoster.advocacyPosterThumbnail.onclick = function() {
    slides = advocacyPoster.advocacyPosterSlides
    modalImg.src = advocacyPoster.advocacyPosterSlides[0].src
    header.innerHTML = advocacyPoster.advocacyPosterHeader
    desc.innerHTML = advocacyPoster.advocacyPosterDesc
    openGallery()
}

typeSpecimen.typeSpecimenThumbnail.onclick = function(){
    slides = typeSpecimen.typeSpecimenSlides;
    modalImg.src = typeSpecimen.typeSpecimenSlides[0].src;
    header.innerHTML = typeSpecimen.typeSpecimenHeader;
    desc.innerHTML = typeSpecimen.typeSpecimenDesc;
    // links.innerHTML = typeSpecimen.links;
    openGallery();
// }
}

designPrinciples.designPrinciplesThumbnail.onclick = function() {
    slides = designPrinciples.designPrinciplesSlides
    modalImg.src = designPrinciples.designPrinciplesSlides[0].src
    header.innerHTML = designPrinciples.designPrinciplesHeader
    desc.innerHTML = designPrinciples.designPrinciplesDesc
    openGallery()
}

pauseMenu.pauseMenuThumbnail.onclick = function() {
    slides = pauseMenu.pauseMenuSlides
    modalImg.src = pauseMenu.pauseMenuSlides[0].src
    header.innerHTML = pauseMenu.pauseMenuHeader
    desc.innerHTML = pauseMenu.pauseMenuDesc
    openGallery()
}

etsyBranding.etsyBrandingThumbnail.onclick = function() {
    slides = etsyBranding.etsyBrandingSlides
    modalImg.src = etsyBranding.etsyBrandingSlides[0].src
    header.innerHTML = etsyBranding.etsyBrandingHeader
    desc.innerHTML = etsyBranding.etsyBrandingDesc
    openGallery()
}


bridgeToHaiti.bridgeToHaitiThumbnail.onclick = function() {
    slides = bridgeToHaiti.bridgeToHaitiSlides
    modalImg.src = bridgeToHaiti.bridgeToHaitiSlides[0].src
    header.innerHTML = bridgeToHaiti.bridgeToHaitiHeader
    desc.innerHTML = bridgeToHaiti.bridgeToHaitiDesc
        // links.innerHTML = bridgeToHaiti.links;

    openGallery()
}

interactiveMap.interactiveMapThumbnail.onclick = function() {
    slides = interactiveMap.interactiveMapSlides
    modalImg.src = interactiveMap.interactiveMapSlides[0].src
    header.innerHTML = interactiveMap.interactiveMapHeader
    desc.innerHTML  = interactiveMap.interactiveMapDesc
        // links.innerHTML = interactiveMap.links;

    openGallery()
}

interactiveMapCont.interactiveMapContThumbnail.onclick = function() {
    slides = interactiveMapCont.interactiveMapContSlides
    modalImg.src = interactiveMapCont.interactiveMapContSlides[0].src
    header.innerHTML = interactiveMapCont.interactiveMapContHeader
    desc.innerHTML = interactiveMapCont.interactiveMapContDesc
    // links.innerHTML = interactiveMapCont.links;

    openGallery()
}


sandersMusuem.sandersMusuemThumbnail.onclick = function() {
    slides = sandersMusuem.sandersMusuemSlides
    modalImg.src = sandersMusuem.sandersMusuemSlides[0].src
    header.innerHTML = sandersMusuem.sandersMusuemHeader
    desc.innerHTML = sandersMusuem.sandersMusuemDesc
    // links.innerHTML = sandersMusuem.links;

    openGallery()
}
// S

//makes modal and button visible  
function openGallery(){
    modal.style.display = "flex" 
    descButton.style.display = "block"

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

// if (links.innerHTML === ""){
//     links.style.display = "none"
// } else {
//     links.style.display = "block"
// }

}


// enables the "X" at the corner of the modal to close the modal
span.onclick = function() {
  modal.style.display = "none";
  // links.innerHTML = "";
  // links.style.display = "none";
  caption.style.display = "none";
    modalImg.style.display = "block"

  console.log("PoooopY")

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
// window.onload = function ()
//     {
//       if (window.innerWidth < 1199) {

//         const modalButtons = document.createElement("div");
//         modalButtons.setAttribute("class", "modal-buttons");

//         modalContainer.appendChild(modalButtons)

//         modalButtons.appendChild(prevButton);
//         modalButtons.appendChild(nextButton);

//         modalButtons.style.display = "inline-flex"
//         modalButtons.style.justifyContent = "space-evenly"
//         // modalButtons.style.width = "100%"
//         modalButtons.style.gap = "16px"
//         // modalButtons.style.marginTop = "24px"
//       }
//   }

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


// showDescfunction

// function showDesc(){
// // caption.style.display = "none";

// //desktop function
//   if (window.innerWidth > 1199) {

//     if (caption.style.display === "none"){
//         caption.style.display = "block"
//         modalImg.style.maxWidth = "750"
//         modalImg.style.maxHeight = "500"

//     } else {
//         caption.style.display = "none"
//         modalImg.style.maxWidth = "1000"
//         modalImg.style.maxHeight = "550"

//         console.log("go off, king!!!")

//     }
// }

// // mobile function

//   if (window.innerWidth < 551) {

//     if (caption.style.display === "none"){
//         modalImg.style.display = "none"
//         caption.style.display = "block"
//         modalImg.style.maxWidth = "356"
//         modalImg.style.maxHeight = "290"

//     } else {
//         caption.style.display = "none"
//         modalImg.style.display = "block"
//         modalImg.style.maxHeight = "354"

//         console.log("go off, king!!!")

//     }
// }

// // tablet function

// //   if (window.innerWidth < 1199) {

// //     if (caption.style.display === "none"){
// //         caption.style.display = "block"
// //         modalImg.style.maxWidth = "667"
// //         modalImg.style.maxHeight = "545"

// //     } else {
// //         caption.style.display = "none"

// //                 modalImg.style.maxHeight = "863"
// //                 modalImg.style.maxWidth = "667"

// //         console.log("go off, king!!!")

// //     }
// // }

// }


function showDesc(){
// caption.style.display = "none";

  if (window.innerWidth < 551) {

    if (caption.style.display === "none"){
        modalImg.style.display = "none"
        caption.style.display = "block"
        modalImg.style.maxWidth = "356"
        modalImg.style.maxHeight = "290"

    } else {
        caption.style.display = "none"
        modalImg.style.display = "block"
        modalImg.style.maxHeight = "354"

        console.log("go off, king!!!")

    }
} else if (window.innerWidth < 1199) {

    if (caption.style.display === "none"){
        caption.style.display = "block"
        modalImg.style.maxWidth = "667"
        modalImg.style.maxHeight = "545"

    } else {
        caption.style.display = "none"

                modalImg.style.maxHeight = "863"
                modalImg.style.maxWidth = "667"

        console.log("go off, king!!!")

    }
} else if (window.innerWidth > 1199) {

    if (caption.style.display === "none"){
        caption.style.display = "block"
        modalImg.style.maxWidth = "750"
        modalImg.style.maxHeight = "500"

    } else {
        caption.style.display = "none"
        modalImg.style.maxWidth = "1000"
        modalImg.style.maxHeight = "550"

        console.log("go off, king!!!")

    }
}

}