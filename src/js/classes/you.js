export class You {

  constructor(player) {
    this.player = player;
    this.strengthLevel = 0;
    this.ifYouEven = false;
  }

  buildStrength (you, strength) {
    you.strength.val(you.strengthlevel);
  }

}
