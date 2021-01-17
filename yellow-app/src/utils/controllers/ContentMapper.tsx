
export class ContentMapperClass {
    
   static getParameter(path: string, param: string) {
      let url = new URL(path);
      let val = url.searchParams.get(param);
      return val;
    }

   static getId(path:string) {
      const query: string = path.substr(path.lastIndexOf('/') + 1);
      return query;
   }

      
}