// Select some stuff I'll be using to customize meme's and appending them to the page
const allInputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const imgLocation = '/Users/ryan/portfolio/memeGenerator/imagePop/imagePop';
const removeButton = document.querySelector('.remove');
const allButtons = document.getElementsByTagName('button');
const newMemeDiv = document.getElementById('new');
// When form submits execute these functions
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (allInputs[2].value.length < 1) {
    turnOnDivs();
    setText();
    shuffleMemePics();
  }
  if (allInputs[2].value.length > 1) {
    customImage();
    createCustomMeme();
  }
  clearInputs();
});
removeButton.addEventListener('click', function (event) {
  turnOffDivs();
});
// function to clear text inputs
function clearInputs() {
  let inputs = document.querySelectorAll(`input[type='text']`);
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}
// function to select the image I pre positioned  in HTML and set it's src to the custom image input value.
function customImage() {
  let img = document.querySelector('img');
  img.setAttribute('src', `${allInputs[2].value}`);
}
// This is a little messy but set's the ID once the form is submitted
function turnOnDivs() {
  let mainContainer = document.getElementById('blank');
  mainContainer.parentElement.setAttribute('id', 'mainContainer');
}
//This gets a little messy because i'm trying to both update an existing element to be visible and creating and appending new elements.
function turnOffDivs() {
  let mainContainer = document.getElementById('mainContainer');
  mainContainer.setAttribute('class', 'hidden');
}
// this sets the text to the input value's and changes the text color based on the color input selector
function setText() {
  let topText = document.querySelector('.topText');
  let bottomText = document.querySelector('.bottomText');
  topText.innerText = allInputs[0].value;
  bottomText.innerText = allInputs[1].value;
  topText.style.color = allInputs[3].value;
  bottomText.style.color = allInputs[3].value;
}
// This generates a random number between 0-20. Based on that number it sets the source attribute to an image address+ that random number thereby selecting one of 20 images I preselected and saved in a file.
function shuffleMemePics() {
  let img = document.querySelector('img');
  let imgSelector = Math.floor(Math.random() * 20);
  img.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);
}
// function to create new elements including a div container, two paragraphs, an image and a button.
// function will update each of those newly created elements attributes/content based on user input
// function will then append the elements to
function createCustomMeme() {
  // Create elements
  let customContainer = document.createElement('div');
  let customMemeTopText = document.createElement('p');
  let customMemeImage = document.createElement('img');
  let customMemeBottomText = document.createElement('p');
  let customMemeButton = document.createElement('button');
  //   update elements inner text and attributes
  customMemeTopText.innerText = allInputs[0].value;
  customMemeBottomText.innerText = allInputs[1].value;
  customMemeImage.setAttribute('src', `${allInputs[2].value}`);
  //   update elements color styling based on user selection
  customMemeTopText.style.color = `${allInputs[3].value}`;
  customMemeBottomText.style.color = `${allInputs[3].value}`;

  customContainer.classList.add('customContainer');
  customMemeBottomText.classList.add('bottomText');
  customMemeTopText.classList.add('topText');

  customMemeButton.setAttribute('class', 'remove');
  customMemeButton.innerText = 'Remove';
  customMemeButton.addEventListener('click', function (event) {
    event.target.parentElement.remove();
  });
  customContainer.prepend(customMemeTopText);
  customContainer.prepend(customMemeImage);
  customContainer.prepend(customMemeBottomText);
  customContainer.append(customMemeButton);
  newMemeDiv.appendChild(customContainer);
  //   document.body.appendChild(customContainer);
}
// function to remove the parent element / div / p / img all together removed when a button is clicked.
function removeMeme(event) {
  event.target.parentElement.remove();
}
