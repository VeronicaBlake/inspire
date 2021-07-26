
function _draw() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  document.getElementById('clock').innerText =  h + ":" + m ;
} 

export default class ClocksController{
    constructor(){
        setInterval(_draw, 1000)
    }

}
