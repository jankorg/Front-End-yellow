import React, {
  useEffect, 
  useState
  } from 'react';
import './Results.scss';
import { Row, Col } from 'react-flexbox-grid';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository';

import {ContentMapperClass as CntMap}  from '../../utils/controllers/ContentMapper';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
let ApiRepo = new ApiRepositoryClass();
interface pageType {
  path: string
}
const Results: React.FC<pageType> = (pType) => {
  
  const [listResults, setLitsResult] = useState<JSX.Element[]>([]);
  const [breadCrumb, setBreadCrumb] = useState<any>({categories: ["cat1","cat2"]})
  useEffect(() => {
      let query  = CntMap.getParameter(pType.path, "search");
      console.log(query);
      ApiRepo.getListResults(query)
      .then((response: any) => {

        setBreadCrumb({categories: response.data.categories[0]});
        let resp = response.data.items.slice(0, 4).map((x: any) => {
          return <Row className="section" start="xs">
                  <Col xs={3}>
                    <div className="image-container">
                      <a href={`items/${x.id}`} title={x.title}>
                        <img width="160" height="160" src= {x.thumbnail} alt={x.title}></img>
                      </a>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="detail-info">
                      <div className="price">
                        <p>${x.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                      </div>
                      <div className="title">
                      <a href={`items/${x.id}`} title={x.title}>
                        <h2>{x.title}</h2>
                      </a>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="shipping">
                      <p>{x.shipping.free_shipping?(<span>Envio grátis</span>):(<span>Sin Envio grátis</span>)}</p>
                    </div>
                        
                  </Col>
                </Row>
        })
        setLitsResult(resp);
      }).catch((err: any)=>{
        console.log(`error servicio getListResults ${err}`);
      });
   
  }, []);
  
return (
  <div>
    <BreadCrumb {...breadCrumb}/>
    <div className="Results" data-testid="Results">  
      {listResults.map((x: any)=>x)}
    </div>
  </div>
  
)};

export default Results;
