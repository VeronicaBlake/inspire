import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js"
import { sandbox } from "./AxiosService.js"


class WeathersService {
    async getWeather() {
        let res = await sandbox.get('/weather');
        console.log(res.data)
        ProxyState.weathers = new Weather(res.data)
    }
}

export const weathersService = new WeathersService()