

function _draw() {
    document.getElementById("clock").innerText = time
}

export default class clocksController{
    constructor(){
        _draw();
        this.clock()
    }
    
    startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
}
