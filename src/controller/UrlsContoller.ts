import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class UrlsController {
    async hello(request: Request, response: Response, next: NextFunction) {
        response.send("Hello World!")
    }

    async listurls(request: Request, response: Response, next: NextFunction){
        response.json(storage.urls)
    }
    async posturl(request: Request, response: Response, next: NextFunction) {
        let url = {
            "id": storage.urls.length + 1,
            "longURL":request.body.longURL
        }
        storage.urls.push(url)


        response.json(url)
        response.json(storage.urls)
    }

    async showurl(request: Request, response: Response, next: NextFunction) {
        let urlId = request.params.urlId
        for(let url of storage.urls){
            if(url.id === parseInt(urlId)){
                response.json(url)
                return
            }
        }
        response.send("URL not found")
    }
}