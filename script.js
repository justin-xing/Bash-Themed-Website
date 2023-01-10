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

// Returning user to terminal upon clicking header text
const terminalButton = document.querySelector('.headerLink');

function terminalScroll () {
  document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

terminalButton.addEventListener('click', terminalScroll);

// Functions to be called upon input text + enter press
let output = document.querySelector('.output');
const lineOne = document.createElement('div');
lineOne.textContent = 'Use cd to navigate webpages (ex. "cd about").';
const lineTwo = document.createElement('div');
lineTwo.textContent = 'about projects myCat';
lineTwo.style.fontWeight = 'bold';
lineTwo.style.fontSize = '3vw';
lineTwo.style.margin = '10px 0';
const lineThree = document.createElement('div');
lineThree.textContent = 'and click the header text to return to terminal';

function ls () {
  output.textContent = '';
  output.appendChild(lineOne);
  output.appendChild(lineTwo);
  output.appendChild(lineThree);
  search.value = '';
}

function cd (s) {
  if (s === 'about') {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else if (s === 'resume') {
    document.getElementById('resume').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else if (s === 'projects') {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else if (s === 'myCat') {
    document.getElementById('myCat').scrollIntoView({ behavior: 'smooth', block: 'center' });
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