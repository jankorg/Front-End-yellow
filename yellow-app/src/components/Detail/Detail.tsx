import React, {useEffect, useState} from 'react';
import './Detail.scss';
import {ContentMapperClass as CntMap}  from '../../utils/controllers/ContentMapper';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository';
import { Row, Col } from 'react-flexbox-grid';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

let ApiRepo = new ApiRepositoryClass();
interface pageType {
  path: string
}
const Detail: React.FC<pageType> = (pType) => {
  const [detailResult, setDetailResult] = useState<any>({});
  const [breacCrumb, setBreadCrumb] = useState<any>({categories: ['cat1', "cat2", "cat3"]})
  useEffect(() => {
    let query  = CntMap.getId(pType.path);
    console.log(query);
    ApiRepo.getDetailById(query)
    .then((res: any) => {
      console.log(res);
      setDetailResult(res.data);
    }).catch((err: any)=>{
      console.log(`error servicio getListResults ${err}`);
    });
  }, []);
  return(
    <div>
      <BreadCrumb {...breacCrumb}/>
      <div className="Detail" data-testid="Detail">
        <Row className="section" start="xs">
            <Col xs={8}>
              <div className="image-container">
                  <img width="680" height="468" src= {detailResult.thumbnail} alt={detailResult.title}></img>
              </div>
            </Col>
            <Col xs={4}>
                  <div className="detail-info">
                  {
                    detailResult.condition ? (<p>Nuevo</p>): (<p>Usado</p>)
                  }
                    <div className="title">
                      <h2>{detailResult.title}</h2>
                    </div>
                    <div className="price">
                    <p>${detailResult.price}</p>
                    </div>
                    <div className="btn-comprar">
                    <button type="submit" className="nav-search-btn">Comprar</button>
                    </div>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col className="description" xs={9}>
              <h1>Detalle del Producto</h1>
              <p>
                {detailResult.description}
              </p>
            </Col>
          </Row>
      </div>
    </div>
  
)};

export default Detail;
