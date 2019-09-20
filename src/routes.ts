import {TestController} from "./controller/TestController";
import {UrlsController} from "./controller/UrlsContoller";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},
{
    method: "get",
    route: "/urls",
    controller: UrlsController,
    action: "listurls"
},
{
    method: "post",
    route: "/urls",
    controller: UrlsController,
    action: "posturl"
},
{
    method: "get",
    route: "/urls/:urlId",
    controller: UrlsController,
    action: "showurl"
},

];