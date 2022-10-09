// Attempt 2, create elements and append to the page
// Listen for the form to submit, when it does run functions to
// 1 select items on page
// 2 create items
// 3 define or modify items
// 4 attach or append items to page or parent element
// ATTEMPT 2
// grab values using ID from form input's, given #id of #top-text and #bottom-text.

const body = document.getElementsByName('body');
const p = document.getElementsByName('p');
const allInputs = document.querySelectorAll('input');
const form = document.querySelector('form');
// Create array from image's saved in folder
let memeArray = [];
const imgLocation = '/Users/ryan/USF Course/projectsInProgress/memeGenerator/imagePop/imagePop';
for (let i = 0; i < 20; i++) {
  memeArray.push(`${imgLocation}${i}`);
}
// Add event listener to form listening for a submit
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(allInputs);
  shuffleMemePics();
  createMemeText(event);
  clearInputs();
});
// when form submits this function wlil clear the inputs
function clearInputs() {
  let inputs = document.querySelectorAll(`input[type='text']`);
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}
// Function to randomly select one of 20 images I selected for the MemeGenerator
function shuffleMemePics() {
  let memeImg = document.createElement('img');
  let imgSelector = Math.floor(Math.random() * 20);
  memeImg.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);
}
// function to create the meme text and append to each other then the body
function createMemeText(event) {
  let container = document.createElement('div');
  let memeImgDiv = document.createElement('div');
  let memeImg = document.createElement('img');
  let topText = document.createElement('div');
  let imgSelector = Math.floor(Math.random() * 20);
  let button = document.createElement('button');
  let imgSource = `${imgLocation}${imgSelector}.jpeg`;
  let topTextValue = allInputs[0].value;
  let bottomTextValue = allInputs[1].value;

  memeImg.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);
  memeImg.classList.add('.memeImg');
  // container.setAttribute('background-image', `url(${imgSource})`);
  memeImgDiv.append(memeImg);
  container.append(memeImgDiv);
  topText.classList.add('.top-left');
  memeImg.prepend(topText);

  topText.innerText = topTextValue;

  let bottomText = document.createElement('p');
  bottomText.innerText = bottomTextValue;
  bottomText.classList.add('.bottom-right');

  container.classList.add('.container');
  container.prepend(button);
  container.appendChild(memeImg);

  container.append(bottomText);
  container.prepend(topText);
  document.body.append(container);

  button.innerText = 'Remove Meme';
  button.classList.add('#remove');
  button.addEventListener('click', function (event) {
    event.target.parentElement.remove();
  });
}

// ATTEMPT 1
// // grab values using ID from form input's, given #id of #top-text and #bottom-text.
// const body = document.getElementsByName('body');
// const p = document.getElementsByName('p');
// const allInputs = document.querySelectorAll('input');
// const form = document.querySelector('form');

// // Listen for the form to submit, when it does run functions
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log(allInputs);
//   shuffleMemePics(event);
//   createMemeText(event);
// });
// //
// let memeArray = [];
// const imgLocation = '/Users/ryan/USF Course/projectsInProgress/memeGenerator/imagePop/imagePop';
// for (let i = 0; i < 20; i++) {
//   memeArray.push(`${imgLocation}${i}`);
// }
// // Function to randomly select one of 20 images I selected for the MemeGenerator
// function shuffleMemePics() {
//   let memeImg = document.createElement('img');
//   let imgSelector = Math.floor(Math.random() * 20);
//   memeImg.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);

//   // memeImg.setAttribute('position', 'relative');
//   // memeImg.setAttribute('width', '200px');
//   // memeImg.setAttribute('height', '200px');
//   memeImg.classList.add('.memeImg');
//   document.body.appendChild(memeImg);
//   console.log(memeImg.classList);
// }

// function createMemeText(event) {
//   let memeImg = document.createElement('img');
//   let topTextValue = allInputs[0].value;
//   let bottomText = allInputs[1].value;
//   let container = document.createElement('div');
//   let topText = document.createElement('div');

//   memeImg.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);
//   topText.classList.add('.top-left');
//   topText.innerText = topTextValue;

//   container.prepend(topText);

//   let bottomText = document.createElement('div');
//   bottomText.innerText = bottomText;
//   bottomText.classList.add('.bottom-right');
//   container.append(bottomText);

//   container.classList.add('newMeme');
//   container.appendChild(button);
//   container.appendChild(memeImg);
//   document.body.append(container);

//   let button = document.createElement('button');
//   button.innerText = 'Remove';
//   button.addEventListener('click', function (event) {
//     event.target.parentElement.remove();
//   });
// }

// Attempt 3;
// create HTML page and turn classes of elements or display property to on and off/ hidden not hidden

// const body = document.getElementsByName('body');
// const p = document.getElementsByName('p');
// const allInputs = document.querySelectorAll('input');
// const form = document.querySelector('form');
// // Create array from image's saved in folder
// let memeArray = [];
// const imgLocation = '/Users/ryan/USF Course/projectsInProgress/memeGenerator/imagePop/imagePop';
// for (let i = 0; i < 20; i++) {
//   memeArray.push(`${imgLocation}${i}`);
// }
// // Add event listener to form listening for a submit
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log(allInputs);
//   shuffleMemePics();
//   createMemeText(event);
//   clearInputs();
// });
// // when form submits this function wlil clear the inputs
// function clearInputs() {
//   let inputs = document.querySelectorAll(`input[type='text']`);
//   for (let i = 0; i < inputs.length; i++) {
//     inputs[i].value = '';
//   }
// }
// // Function to randomly select one of 20 images I selected for the MemeGenerator
// function shuffleMemePics() {
//   let memeImg = document.createElement('img');
//   let imgSelector = Math.floor(Math.random() * 20);
//   memeImg.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);
//   return memeImg;
// }
// // function to create the meme text and append to each other then the body
// function createMemeText(event) {
//   let button = document.createElement('button');
//   let container = document.createElement('div');
//   let memeImgDiv = document.createElement('div');
//   let memeImg = document.createElement('img');
//   let topText = document.createElement('div');
//   let imgSelector = Math.floor(Math.random() * 20);

//   let imgSource = `${imgLocation}${imgSelector}.jpeg`;
//   let topTextValue = allInputs[0].value;
//   let bottomTextValue = allInputs[1].value;

//   memeImg.setAttribute('src', `${imgLocation}${imgSelector}.jpeg`);
//   memeImg.classList.add('.memeImg');
//   // container.setAttribute('background-image', `url(${imgSource})`);
//   memeImgDiv.append(memeImg);
//   container.append(memeImgDiv);
//   topText.classList.add('.top-left');
//   memeImg.prepend(topText);

//   topText.innerText = topTextValue;

//   let bottomText = document.createElement('p');
//   bottomText.innerText = bottomTextValue;
//   bottomText.classList.add('.bottom-right');

//   container.classList.add('.container');
//   container.prepend(button);
//   container.appendChild(memeImg);

//   container.append(bottomText);
//   container.prepend(topText);
//   document.body.append(container);

//   button.innerText = 'Remove';
//   button.classList.add('#remove');
//   button.addEventListener('click', function (event) {
//     event.target.parentElement.remove();
//   });
// }
