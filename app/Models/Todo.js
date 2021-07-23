export default class Todo {
    constructor({ }){
        //we refer to it as img, and it's sprites in the API
        
    }

//      "todo": {
//     "completed": {
//       "type": "Boolean",
//       "required": true,
//       "default": false
//     },
//     "description": {
//       "type": "String",
//       "required": true
//     },
//     "user": {
//       "type": "String",
//       "required": true
//     }
//   },

    get Template(){
        return`
         <div class="col mx-5 p-5">
            <div class="card mt-5" style="width: 50vh;">
                <img class="" src="${this.img}" alt="${this.name}">
                <div class="card-body">
                    <h3 class="card-title display-flex text-center">${this.name}</h3>
                    <span class="card-text">
                        <p>height: ${this.height}</p>
                        <p>weight: ${this.weight}</p>
                        <p>type: ${this.types}</p>
                    </span>
                    <button type="button" class="btn btn-success">Catch</button>
                </div>
                </div>
        </div>`
    }
}