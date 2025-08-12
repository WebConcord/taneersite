/* 
   Spotted Wren Garden Center
   Filename: script.js

   Author:   
   Date:     
   HTML5 and CSS3 Illustrated Unit M, Independent Challenge 1
 */


var list = document.querySelector (".vocab");
var animation = document.querySelector (".vocab li:first-of-type");
var frames = document.querySelector (".vocab li:nth-of-type(2)");
var extreme = document.querySelector (".vocab li:nth-of-type(3)");
var inbetween = document.querySelector (".vocab li:nth-of-type(4)");
var flipbook = document.querySelector (".vocab li:last-of-type");
var figureImage = document.querySelector ("article figure img");
var figureCaption = document.querySelector ("article figure figcaption");

/* change to show other images*/

function showAnimation() {
	figureImage.src = "media/stickman.gif";
	figureImage.alt = "a single blossom of a blanket flower";
	figureCaption.textContent = "A moving picture";
}

function showFrames() {
	figureImage.src = "images/frames.jpg";
	figureImage.alt = "a sprawling, low hedge rose plant with several flowers";
	figureCaption.textContent = "Drawings that create an animation";
}

function showExtreme() {
	figureImage.src = "images/extreme.jpg";
	figureImage.alt = "a cluster of little bluestem in a field";
	figureCaption.textContent = "First or last frame of an animation";
}
	
function showInbetween() {
	figureImage.src = "images/stickman3.gif";
	figureImage.alt = "a group of foxgloves in a row";
	figureCaption.textContent = "The frame in the middle of an animation";
}

function showFlipbook() {
	figureImage.src = "images/flipbook.jpg";
	figureImage.alt = "a group of foxgloves in a row";
	figureCaption.textContent = "A book of animation frames";
}

animation.addEventListener("click", showAnimation, false);

frames.addEventListener("click", showFrames, false);

extreme.addEventListener("click", showExtreme, false);

inbetween.addEventListener("click", showInbetween, false);

flipbook.addEventListener("click", showFlipbook, false);



/*quiz variables*/

var q1Field = document.querySelector("#q1input");
var feedbackField = document.querySelector("#other-info");
var form = document.querySelector(".quiz-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");

/* add text to prevent section */
function completePreview() {
	feedbackPreview.className = "feedback-preview show";
	
	if (q1Field.textContent() === "frames") {
		feedbackPreview.className = "feedback-preview show";
	}
}

/*
completePreview();
*/

/* create event listener for changes to form */
form.addEventListener("change", completePreview, false);



