import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js"
import { sandbox } from "./AxiosService.js"


class WeathersService {
    async getWeather() {
        let res = await sandbox.get('/weather');
        console.log(res.data)
        ProxyState.weathers = new Weather(res.data)
    }

    toggle(){
        var f = document.getElementById('f');
        var c = document.getElementById('c')
        if (f.style.display === "none") {
            f.style.display = "block";
        } else {
            f.style.display = "none";
        }
        if (c.style.display === "block"){
            c.style.display = "none";
        } else {
            c.style.display = "block"
        }
    }
    //REVIEW this function can be cleaned up. if we send through a variable onclick will that work?
}

export const weathersService = new WeathersService()