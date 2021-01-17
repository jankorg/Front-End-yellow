import React, { useEffect, useState } from 'react';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import { Row, Col } from 'react-flexbox-grid';
let ApiRepo = new ApiRepositoryClass();

const Header: React.FC = () => {
  const [header, setHeader] = useState(Object);
  useEffect(() => {
    ApiRepo.getHeader()
    .then((response: any) => {
      setHeader(response.data);
    });
  }, []);
  return (
    <header className="Header" data-testid="Header">
      <Row>
        <Col xs={2}>
          <a className="nav-logo" href='/'>Mercado Libre Colombia - Donde comprar y vender de todo</a>
        </Col>
        <Col xs={10}>
          <SearchForm/>
        </Col>
      </Row>
    </header>
)};

export default Header;
