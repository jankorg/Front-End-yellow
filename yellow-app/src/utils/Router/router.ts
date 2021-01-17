export class Router {
    static getPage(path: string) {
        let pagina: string = "detalle";
        if(path.includes("search")){
            pagina= "lista";
        }
        return pagina;
    }
}