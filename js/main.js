class Stopwatch{
  constructor(){}
  duration = 0;
  initial = 0;
  initialM = 0;
  finalM = 0;
  final = 0;
  startFlag = false;
  stopFlag = false;

  start(){
    if(!this.startFlag){
      let date = new Date();
      console.log(date);
      this.initial = date.getSeconds() + (date.getMilliseconds()*0.001);
      this.initialM = date.getMinutes();
      console.log(this.initial);
      this.startFlag = true;
      this.stopFlag = true;
    }
    else throw new Error('The stopwatch has already started')
  }

  stop(){
    if(this.stopFlag){
      let date = new Date();
      console.log(date);
      this.final = date.getSeconds() + (date.getMilliseconds()*0.001);
      this.finalM = date.getMinutes();
      console.log(this.final);
      if(this.final < this.initial){
        this.duration += (this.finalM-this.initialM-1)*60 + (60-this.initial) + (this.final);
      }
      else this.duration += this.final - this.initial;
      this.startFlag = false;
      this.stopFlag = false;
    }
    else throw new Error('The stopwatch needs to be started first!');
  }

  reset(){
    this.duration = 0;
    this.startFlag = false;
    this.stopFlag = false;
  }
}