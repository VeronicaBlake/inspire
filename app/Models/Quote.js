
export default class Quote {
    constructor({author, content}){
        this.author = author
        this.content = content 
    }

    get Template(){
        return`
          <span class = "quote  quoteBody">
            <h1>"${this.content}"</h1>
          </span>
          <span class = "hidden">
            <h5><em>"- ${this.author}"</em></h5>
          </span>
        `
    }
}