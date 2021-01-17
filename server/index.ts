import { SearchRepository } from './repository/SearchRepository'
import { SearchMapper } from './mappers/SearchMapper'

export class ServerClass {
    getHeader(req: any,res: any){
           const list = {
             text:"Mercado libre."
           };
           res.json(list);
    }

    getMenu(req: any,res: any){
    const list = ["item 1","item 2","item 3","item 4"];
    res.json(list);
    }

    getFooter(req: any,res: any){
      const list = {
        text:"Challenge made by Juan Camilo Rodriguez, juan.rodriguez@hazclic.com."
      };
      res.json(list);
      }

    getSearchResults(req: any,res: any) {
        const query = req.query.q || 'empty';
        const searchMapper = new SearchMapper();
        SearchRepository.getResultsByName(query)
        .then((x) => {
            const source = searchMapper.getListResults(x.data);
            source.subscribe(val =>  res.json(val));
        }).catch((error) => {
            res.json({text:"error"});
        })
    }

    getDetailedResults(req: any,res: any) {
        const query = req.baseUrl.substr(req.baseUrl.lastIndexOf('/') + 1);
        const searchMapper = new SearchMapper();
        SearchRepository.getResultsById(query)
        .then((x) => {
          const source = searchMapper.getDetailResults(x.data);
          SearchRepository.getResultsById(query, true)
          .then((des: any)=>{
            source.description = des.data.plain_text;
            res.json(source)
          })


        }).catch((error) => {
            res.json({text:"error"});
        })
    }
  }