// Libraries
import _ from 'lodash';
import $ from 'jquery';

// Classes
import { You } from './classes/you.js';
import { Game } from './classes/game.js';




// variables for DOM 
let you = $('.you');
let liftbutton = $('.liftButton');
let timerbutton = $('.timerButton');
let img = $('img');
let countdown = $('.countdown');
let progressStrength = $('progress');
let menubutton = $('.startGame');
let gamecontainer = $('.container');
let gamemenu = $('.gameMenu');
let parent = $('html');


// variables for instances
let player1 = new You();
let game = new Game();

menubutton.on('click', function (event){
  event.preventDefault();
  gamecontainer.removeClass('hidden');
  gamemenu.addClass('hidden');
  parent.addClass('secret');
});


//Create button so that players strength add's 1 each click (donfe)

liftbutton.on('click', function (event){
  event.preventDefault();
  player1.buildStrength();
  console.log(player1);
  if (img.attr('src') === './images/setup.jpg') {
    img.attr('src', './images/setup2.jpg');
  } else {
    img.attr('src', './images/setup.jpg');
  }
  // progressStrength.attr('value') = progressStrength++

});

// Create a countdown to display on html when button is clicked
timerbutton.on('click', function (event) {
  event.preventDefault()
  console.log('clicked');

  let seconds = 11;
  let subtractSeconds = setInterval(countSecondsDown, 1000);

  function countSecondsDown() {
    seconds = seconds - 1;

    if (seconds <= -1) {
      clearInterval(subtractSeconds);
      return;
    }

    if (seconds === 0) {
      alert("TIME IS UP");
    }

  countdown.html(seconds);
  }

  setTimeout( function () {
  game.checkIfHeEven(player1);
  console.log(game.checkIfHeEven);
}, 12000);
});





// Goals of Game
/* Do You Even???
Has a Player that pushes a button to gain strength
if strength is high enough, he "Even's"
if strength is not high enough, he "Doesn't Even"*/
