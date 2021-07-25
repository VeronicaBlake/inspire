export default class Quote {
    constructor({author, content}){
        this.author = author
        this.content = content 
    }

    get Template(){
        return `
        <h1>"${this.content}"</h1>
        <h5><em>"- ${this.author}"</em></h5>
        `
         
    }

}


// "quote": {
//     "quote": {
//       "body": {
        
//       },
//       "author": {
        
//       },
//       "tags": [
//         {
          
//         }
//       ]
//     }