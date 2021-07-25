import { ProxyState } from "../AppState.js"
import  Image   from "../Models/Image.js"
import { sandbox } from './AxiosService.js'

class ImagesService{
    constructor(){
        this.getImage()
    }
    async getImage(){
        let res = await sandbox.get('/images')
        ProxyState.images = new Image(res.data);
    }
}

export const imagesService = new ImagesService()