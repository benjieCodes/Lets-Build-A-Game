export class Timer {

  constructor (time) {
    this.secondsLeft = 15


  }

  countdownSeconds () {
    setInterval(function (){
      this.secondsLeft - 1
    }, 1000);

  }

}
