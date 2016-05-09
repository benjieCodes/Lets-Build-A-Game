export class Game {

  constructor () {
    this.doYouEven = 'checking if You Even'
  }

  checkIfHeEven(you) {

    if (you.strengthLevel <= 0) {
    this.doYouEven = "wow you're horrible";
    alert(this.doYouEven);
    } else if (you.strengthLevel >= 10 && you.strengthLevel <= 20) {
    this.doYouEven = "ehh";
    alert(this.doYouEven);
    } else if (you.strengthLevel > 21 && you.strengthLevel <= 30) {
    this.doYouEven = "bush league";
    alert(this.doYouEven);
    } else if(you.strengthLevel > 31 && you.strengthLevel <= 40) {
    this.doYouEven = "beginner's luck";
    alert(this.doYouEven);
    } else if(you.strengthLevel > 40) {
    this.doYouEven = "Woah. You definitely even, bro.";
    alert(this.doYouEven);
    }
  }

}
