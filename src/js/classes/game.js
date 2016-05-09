export class Game {

  constructor () {
    this.doYouEven = 'checking if You Even'
  }

  checkIfHeEven(you) {

    if (you.strengthLevel <= 0) {
    this.doYouEven = "wow you're horrible";
    alert(this.doYouEven);
    } else if (you.strengthLevel >= 10 && you.strengthLevel <= 20) {
    this.doYouEven = "ok";
    alert(this.doYouEven);
    } else if (you.strengthLevel > 21 && you.strengthLevel <= 30) {
    this.doYouEven = "ok1";
    alert(this.doYouEven);
    } else if(you.strengthLevel > 31 && you.strengthLevel <= 40) {
    this.doYouEven = "ok2";
    alert(this.doYouEven);
    } else if(you.strengthLevel > 40) {
    this.doYouEven = "WOO";
    alert(this.doYouEven);
    }
  }

}
