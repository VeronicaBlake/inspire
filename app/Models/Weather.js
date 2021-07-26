export default class Weather {
    constructor({main, weather, name}){
        this.name = name
        this.description = weather[0].main
        this.temp = main.temp
        this.c = Math.floor(this.temp - 273)
        this.f = Math.floor(1.8*(this.temp - 273) + 32)
    }

    get Template(){
        return `
        <div class="quoteBody">
            <h3>Weather for ${this.name}: ${this.description}</h3>
            <h4 id = "f" onclick="app.weathersController.toggle()">${this.f}° Fahrenheit </h4>
            <h4 id = "c" onclick="app.weathersController.toggle()" style="display:none">${this.c}° Celsius </h4>
        </div>
        `
    }
}