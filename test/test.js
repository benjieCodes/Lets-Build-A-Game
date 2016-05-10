// Import Chai
import chai from 'chai';

// Import Any Files to Test
import '../src/js/main';
import { You } from '../src/js/classes/you.js'
import { Game } from '../src/js/classes/game.js'

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Something', function () {

    it('should be in an instance of a player when created', function () {
      let player = new You;
      expect(player).to.be.an.instanceof(You);
    });

    it('should be an instance of a game when created'), function () {
      let game = new Game;
      expect(game).to.be.an.instanceof(Gane);
    });
  });


});
