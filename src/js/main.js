// Libraries
import _ from 'lodash';
import $ from 'jquery';

// Classes
import { You } from './classes/you.js';
import { Game } from './classes/game.js';


let player1 = new You();
console.log(player1);


// variables for DOM
let you = $('you');
let liftbutton = $('liftButton');


// Goals of Game
/* Do You Even???
Has a Player that pushes a button to gain strength
if strength is high enough, he "Even's"
if strength is not high enough, he "Doesn't Even"*/
