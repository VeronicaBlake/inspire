import { ProxyState } from "../AppState.js"
import  Quote   from "../Models/Quote.js"
import { sandbox } from './AxiosService.js'

class QuotesService{
    constructor(){
        this.getAllQuotes()
    }
    async getAllQuotes(){
        let res = await sandbox.get('/quotes')
        ProxyState.quotes = new Quote(res.data);
    }
}

export const quotesService = new QuotesService()
