// Declarations
let search = document.querySelector('.search');
let inputText = search.value;

// When the user scrolls the page, execute stickyHeader
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.querySelector("#myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Functions to be called upon input text + enter press
let output = document.querySelector('.output');
const lineOne = document.createElement('div');
lineOne.textContent = 'Use cd to navigate webpages (ex. "cd about").';
const lineTwo = document.createElement('div');
lineTwo.textContent = 'Webpages: about resume projects interests myCat';
const lineThree = document.createElement('div');
lineThree.textContent = 'Note: Go back to the terminal by clicking the header.'

function ls () {
  output.textContent = '';
  output.appendChild(lineOne);
  output.appendChild(lineTwo);
  output.appendChild(lineThree);
  search.value = '';
}

function cd (s) {
  if (s === 'about') {
    window.location.href = "pages/about.html";
  } else if (s === 'resume') {
    window.location.href = "pages/resume.html";
  } else if (s === 'projects') {
    window.location.href = "pages/projects.html";
  } else if (s === 'myCat') {
    window.location.href = "pages/myCat.html";
  }
  search.value = '';
}

function clear() {
  output.textContent = '';
  search.value = '';
}

// Executing functions upon text input + enter press

function readTextInput () {
  if (inputText.substring(0, 2) === 'cd') {
    cd(inputText.substring(3));
  } else if (inputText.substring(0, 2) === 'ls') {
    ls();
  } else if (inputText.substring(0, 5) === 'clear') {
    clear();
  }else {
    output.textContent = 'Enter a valid input! Try ls!'
  }
}

search.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    inputText = search.value;
    readTextInput();
  }
})