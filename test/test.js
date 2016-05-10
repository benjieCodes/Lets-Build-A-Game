// Import Chai
import chai from 'chai';

// Import Any Files to Test
import '../src/js/main';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Something', function () {

    let game;
    beforeEach( function (){
      game = new You();
    });

    it('should be in an instance of a player', function () {
      let x = new You();
      expect(game).to.be.an.instanceof(You);
    });

  });


});
