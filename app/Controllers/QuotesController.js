import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawAll(){
    const quotes = ProxyState.quotes
    let template = ''
    quotes.forEach(t => template += t.Template)
    document.getElementById('quote').innerHTML = template
}

export default class quotesController{
    constructor(){
        ProxyState.on('quotes', _drawAll)
        quotesService.getAllQuotes()
    }

    async getAllQuotes(){
        try {
            await todosService.getAllQuotes()
        } catch (error) {
            console.error(error)
        }
    }
}