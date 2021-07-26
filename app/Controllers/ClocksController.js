
function _draw() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  document.getElementById('clock').innerText =  h + ":" + m + ":" + s;
} 

export default class ClocksController{
    constructor(){
        setInterval(_draw, 1000)
    }

}
