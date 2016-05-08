// Libraries
import _ from 'lodash';
import $ from 'jquery';

// Classes
import { You } from './classes/you.js';
import { Game } from './classes/game.js';



// variables for DOM
let you = $('.you');
let liftbutton = $('.liftButton');
let img = $('img');


let player1 = new You();

//Create button so that players strength add's 1 each click (done)

liftbutton.on('click', function (event){
  event.preventDefault();
  player1.buildStrength();
  console.log(player1);
  if (img.attr('src') === './images/setup.jpg') {
    img.attr('src', './images/setup2.jpg');
  } else {
    img.attr('src', './images/setup.jpg');
  }
});

// Goals of Game
/* Do You Even???
Has a Player that pushes a button to gain strength
if strength is high enough, he "Even's"
if strength is not high enough, he "Doesn't Even"*/
