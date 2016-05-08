export class Game {

  constructor () {
    this.doYouEven = 'checking if You Even'
  }

  checkIfHeEven(you) {

    if (you.strengthLevel < 2) {
    this.doYouEven = "nope";
    alert(this.doYouEven);
  } else {
    this.doYouEven = 'wow'
  }
  }
}
