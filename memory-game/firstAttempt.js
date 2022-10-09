const gameContainer = document.getElementById('game');

const COLORS = ['red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple'];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  count = -1;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement('div');
    count++;
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.setAttribute('data-class', `${newDiv.className}`);
    newDiv.style.backgroundColor = 'white';
    newDiv.id = `${count}`;
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener('click', handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
// const div = document.querySelector('div');
// TODO: Implement this function!

const clickClassArr = [];
const clickIdArr = [];
const start = document.getElementById('restart');
const points = document.getElementById('points');
let pointCounter = 0;
const allDivs = document.getElementsByName('div');

function handleCardClick(event) {
  pointTrack();
  gameEnder();
  colorToClass(event);
  //   CHANGE CLASS AND TRY CHANGING CLASSES INSTEAD OF BACKGROUND COLORS
  changeClass(event);
  saveData(event);
  print(event);

  if (clickClassArr.length > 1) {
    compare();
  }

  if (clickClassArr.length === 2) {
    setTimeout(clearArrays, 1005);
  }
}
// when the DOM loads
function pointTrack() {
  points.innerText = `Points: ${pointCounter / 2}`;
}
function gameEnder() {
  if (pointCounter >= 5) {
    // Could add some code to add things all over page or take off of page, like an animation when the game is won.
  }
}
function colorToClass(event) {
  event.target.style.backgroundColor = event.target.className;
}
function changeClass(event) {
  console.log(event.target.classList, "'event.target.classList'");
}
function saveData(event) {
  clickClassArr.push(event.target.className);
  clickIdArr.push(event.target.id);
}
function print(event) {
  console.log(clickClassArr, 'clickClassArr', clickIdArr, 'clickIdArr');
  console.log(event.target, '"event.target"');
}
function compare(event) {
  if (clickClassArr[0] === clickClassArr[1] && clickIdArr[0] !== clickIdArr[1]) {
    pointCounter += 1;
    setTimeout(match, 1000);
    console.log('MATCHY MATCHY');
  } else setTimeout(noMatch, 1000);
  console.log('NO SOUP FOR YOU');
}
function clearArrays() {
  if (clickClassArr.length >= 2) {
    console.log('arrays cleared');
    clickClassArr.shift();
    clickClassArr.shift();
    clickIdArr.shift();
    clickIdArr.shift();
  }
}
function noMatch(event) {
  document.getElementById(clickIdArr[0]).style.backgroundColor = 'white';
  document.getElementById(clickIdArr[1]).style.backgroundColor = 'white';
}
function match(event) {
  pointCounter += 1;
  pointTrack();
  document.getElementById(clickIdArr[0]).style.backgroundColor = clickClassArr[0];
  document.getElementById(clickIdArr[1]).style.backgroundColor = clickClassArr[1];
}

createDivsForColors(shuffledColors);
