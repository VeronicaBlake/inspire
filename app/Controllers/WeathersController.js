import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _draw() {
    document.getElementById('weather').innerHTML = ProxyState.weathers.Template
}

export default class WeathersController {
    constructor(){
        ProxyState.on('weathers', _draw);
        this.getWeather()
    }
    async getWeather(){
        try {
            await weathersService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    async toggle(){
        try {
            weathersService.toggle()
        } catch (error) {
            console.error(error)
        }
    }
}
