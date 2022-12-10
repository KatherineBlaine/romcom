// Create variables targetting the relevant DOM elements here 👇

var defaultTitle = document.querySelector(".cover-title");     //sets the cover-title html by class to a variable
var defaultTagLine1 = document.querySelector(".tagline-1");
var defaultTagLine2 = document.querySelector(".tagline-2");
var defaultImage = document.querySelector(".cover-image");

var randomCoverButton = document.querySelector('.random-cover-button');
var formViewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var saveCoversButton = document.querySelector('.save-cover-button');

var homeview = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;

// Add your event listeners here 👇

randomCoverButton.addEventListener('click', function() {          //sets EL to the random cover button, creates new cover, and displays it
  createNewCover()
  displayNewCover(currentCover)}); 

window.addEventListener('load', function() {                      //sets EL to window, on load, creates new cover and displays it
  createNewCover()
  displayNewCover(currentCover)});

homeButton.addEventListener('click', )

formViewButton.addEventListener('click', )

var savedView = document.querySelector('.saved-view')

savedCoversViewButton.addEventListener('click', )





// function showSavedCovers() {
//   document.querySelector('.saved-cover-section').classList.add('saved-view', 'saved-covers-section')
//   document.querySelector('.cover-image2').classList.add('mini-cover') 
//   //'mini-cover' > 'cover-title', 'mini-cover' > 'cover-title::first-letter', 'mini-cover' > 'tagline')
// }



// savedView.innerText = savedCovers[0].title.style.add('cover-title')

  // for (var i = 0; i < savedCovers.length; i ++) {
  //   savedView.innerText = savedCovers[i]
  // }
//  savedView.classList.add('saved-covers-section')
// document.querySelector('.saved-view').style.add(savedCovers)
console.log(savedView);


// Create your event handlers and other functions here 👇
function createNewCover() {
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];         //uses getRandomIndex to generate index value for data.js arrays
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
    var randomCover = covers[getRandomIndex(covers)];
    var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
};

function showHomeView () {                  
  document.querySelector('.home-view').classList.remove(".hidden")          
  document.querySelector('.form-view').classList.remove(".hidden") 
  // document.querySelector('.home-button').hidden = true;        
  document.querySelector('.random-cover-button').style.display = "block";
  document.querySelector('.save-cover-button').classList.add(".hidden")
}

function showSavedCovers() {
  document.querySelector('.home-view').hidden = true; 
  document.querySelector('.random-cover-button').hidden = true;
  document.querySelector('.save-cover-button').hidden = true;
  document.querySelector('.home-button').style.display = "block";
  document.querySelector('.saved-view').style.display = "block";
  document.querySelector('.form-view').hidden = true;
//   savedView.innerHTML = 
// `<section class='main-cover'>
// <img class='cover-image' src= ${savedCovers[0].cover}>
// <h2 class='cover-title'> ${savedCovers[0].title}</h2>
// <h3 class='tagline'>A tale of <span class='tagline-1'>${savedCovers[0].tagline1}</span> and <span class='tagline-2'>${savedCovers[0].tagline2}</span></h3>
// <img class='price-tag' src='./assets/price.png'>
// <img class='overlay' src='./assets/overlay.png'>
// </section>`
}

function showFormView() {
  document.querySelector('.home-view').hidden = true;           //this uses the .hidden property to hide the homeview 
  document.querySelector('.form-view').style.display = "block"; //this uses the .style.display properties to show the form view
  document.querySelector('.home-button').style.display = "block";        
  document.querySelector('.random-cover-button').hidden = true;
  document.querySelector('.save-cover-button').hidden = true;
}

function displayNewCover(currentCover) {                            //sets default main-cover html info to our randomly generated cover
  defaultTitle.innerText = currentCover.title;
  defaultTagLine1.innerText = currentCover.tagline1;
  defaultTagLine2.innerText = currentCover.tagline2;
  defaultImage.src = currentCover.cover;
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(elements) {
  elements.classList.remove("hidden");
}

function hide(elements) {
  elements.classList.add("hidden");
}

