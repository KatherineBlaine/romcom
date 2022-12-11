// Create variables targetting the relevant DOM elements here 👇

var defaultTitle = document.querySelector(".cover-title");     //sets the cover-title html by class to a variable in the home-view main-cover section
var defaultTagLine1 = document.querySelector(".tagline-1");    //the skeleton of the cover display- the distinct elements that make up the "current cover"
var defaultTagLine2 = document.querySelector(".tagline-2");     //used in the displayNewCover() function, helps us display the generated covers
var defaultImage = document.querySelector(".cover-image");



var randomCoverButton = document.querySelector('.random-cover-button'); //button variables - points to the html of the buttons on the page
var formViewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeMyBookButton = document.querySelector('.create-new-book-button')

var homeView = document.querySelector('.home-view');  //variables for the html sections of various views
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');


var userCover = document.querySelector('.user-cover');  //variables for the input fields of the form
var userTitle = document.querySelector('.user-title');
var userDescriptor1 = document.querySelector('.user-desc1');
var userDescriptor2 = document.querySelector('.user-desc2');

// We've provided a few variables below
var savedCovers = [    //stores the saved instances of the Cover class in an array
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];
var currentCover;   //this variable was extremely useful in creating, storing, and displaying the various instances of the cover class. We use it all over the place!


// Add your event listeners here 👇

randomCoverButton.addEventListener('click', function() {       //sets EL to the random cover button, creates new cover, and displays it
  createNewCover()
  displayNewCover(currentCover)}); 

window.addEventListener('load', function() {      //sets EL to whole window, on page load/refresh, creates new cover and displays it
  createNewCover()
  displayNewCover(currentCover)});

homeButton.addEventListener('click', showHomeView);       //these three ELs allows the navigation buttons to be functional, creates a unique page view for each section of the application

formViewButton.addEventListener('click', showFormView);

viewSavedCoversButton.addEventListener('click', function() {
  showSavedCovers(currentCover)
});

makeMyBookButton.addEventListener('click', preventDefault);     //stops the default action of the form button (make my book) which is to refresh the page. Refresh was causing all of our functionality to reset making it inoperable

makeMyBookButton.addEventListener('click', function() {         //adding EL to makeMyBookButton - defines the event as 'click', and declares our event handler as an anonymous function that holds our other functions/event handlers so they run together. We wanted to be sure we didn't store the following values until the user clicked the makeMyBook button.
  storeInput(covers, userCover.value);                          //this takes the covers array from the data.js file as its first argument, and the value that the user put into the cover field in the form view as its second argument. It stores that value in the covers array. See function declaration below
  storeInput(titles, userTitle.value);
  storeInput(descriptors, userDescriptor1.value);
  storeInput(descriptors, userDescriptor2.value);
  createUserCover();
  showHomeView();
  displayNewCover(currentCover);
});

saveCoverButton.addEventListener('click', function() {
    saveCurrentCover(currentCover)
});

savedView.addEventListener('dblclick', deleteCover);


// Create your event handlers and other functions here 👇

function createNewCover() {                 //this function's job is to generate a random new instance of the cover class
    var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];         //uses getRandomIndex to generate index value for data.js arrays
    var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
    var randomCover = covers[getRandomIndex(covers)];
    var randomTitle = titles[getRandomIndex(titles)];
  currentCover = new Cover(randomCover, randomTitle, randomDescriptor1, randomDescriptor2);
};

function createUserCover() {                //this function's job is to create a new instance of the cover class with the user input
  currentCover = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
};


function displayNewCover(currentCover) {         //sets default main-cover html info to our randomly generated cover. It takes a parameter. We used currentCover here as a parameter and an argument later because it kept the lines of logic clear for this application.                     //sets default main-cover html info to our randomly generated cover
  defaultTitle.innerText = currentCover.title;
  defaultTagLine1.innerText = currentCover.tagline1;
  defaultTagLine2.innerText = currentCover.tagline2;
  defaultImage.src = currentCover.cover;
};

function showHomeView() {        //this function's job is to hide or display various html elements depending on what we want to show on the homepage using the hide() and show() functions defined below.          
  show(homeView);
  show(randomCoverButton);
  show(saveCoverButton);
  hide(formView);
  hide(homeButton);  
  hide(savedView);
};

function showSavedCovers(currentCover) {          //this function's job is to hide or display various html elements depending on what we want to show on the saved covers page using the hide() and show() functions defined below. It also has the ability to insert html elements into the saved covers view using a for loop that iterates through the savedCovers array and interpolates the properties necessary to display the class instance. 
  show(homeButton);
  show(savedView);
  hide(homeView);
  hide(randomCoverButton);
  hide(saveCoverButton);
  hide(formView);
  savedView.innerHTML = '';                         //this line resets the innerhtml so that the saved cover page works properly. Without it, the dblclick event causes more mini covers to be added to the page and other odd functionality.
  for (var i = 0; i < savedCovers.length; i++) {
    savedView.innerHTML +=                         //line 68: div class sets the mini cover class to this section, adding id helps to identify the saved cover later to delete it.
     `<div class='mini-cover' id=${savedCovers[i].id}>           
      <img class='cover-image' src= ${savedCovers[i].cover}>
      <h2 class='cover-title'> ${savedCovers[i].title}</h2>
      <h3 class='tagline'>A tale of <span class='tagline-1'>${savedCovers[i].tagline1}</span> and <span class='tagline-2'>${savedCovers[i].tagline2}</span></h3>
      <img class='price-tag' src='./assets/price.png'>
      <img class='overlay' src='./assets/overlay.png'>`
    };
};

function showFormView() { 
  show(formView);
  show(homeButton); 
  hide(homeView);       
  hide(randomCoverButton);
  hide(saveCoverButton);
  hide(savedView);
};

function preventDefault(event) {          //this function's job is to prevent the default functionality of the event listener it is working with. It passes in the argument in the event listener automatically as its 'event' argument here. We used it on the Make My Book button to prevent the page from refreshing and losing the user input.
  event.preventDefault();
};

function storeInput(array, input) {       //this function's job is to store the user input from the form into the arrays in the data.js file (but on the DOM) so it can be used in later randomizations. 
  array.push(input)
  return array
};

function saveCurrentCover(currentCover) {     //this function's job is to save the current cover visible to the savedCovers array and checks to make sure it doesn't save duplicates. It asks if it's true that the savedCovers array DOESN'T include the current cover, then go ahead and use .push() to add it to the array.
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

function deleteCover() {                    //this function's job is to help the eventListener to delete the minicover that is double clicked on in the saved covers view from the savedCovers array.
  for (var i = 0; i < savedCovers.length; i++) {
    var savedCoverId = savedCovers[i].id.toString();      //we noticed that the two ids were the same, but they were in different data types. The DOM's version was a string, and the Date.now() method returned a number. 'event.target.parentNode.id' refers to a DOM element, which we noticed was coming up as a string. 'savedCovers[i].id' refers to the id of the class instance as it is set up in our Cover class.
    if (event.target.parentNode.id === savedCoverId) {    //this is saying if the two ids are identical then delete that element that the user clicked on using .splice() at the index value i. Using the id property helps us access the exact instance/object, even when some of its individual elements (like the cover, title, descriptors) might be used in other random covers.
      savedCovers.splice(i, 1)
    }
  }
  showSavedCovers();          //this displays our newly mutated savedCovers array
};

function getRandomIndex(array) {              //this function generates a random index number of an array passed in as an argument
  return Math.floor(Math.random() * array.length);
};

function show(elements) {              //this function takes in html elements and edits their classList to remove the 'hidden' property so that we can control what the guest sees after each button click
  elements.classList.remove("hidden");
};

function hide(elements) {             //this function is the sibling to our show() function, hide()takes in html elements and edits their classList to add the 'hidden' property so that we can control what the guest sees after each button click
  elements.classList.add("hidden");
};
