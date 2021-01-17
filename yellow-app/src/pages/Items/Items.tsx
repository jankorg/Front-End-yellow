import React, {useEffect, useState} from 'react';
import './Items.scss';
import Results from '../../components/Results/Results'
import Detail from '../../components/Detail/Detail'
import {Router} from '../../utils/Router/router';

const Items: React.FC = () =>{
  let path: string= window.location.href;
  const [pagePath, setPath] = useState({path:path});
  const [pageType, SetPageType] = useState('');
  
  useEffect(() => {
    const enrutador: string = Router.getPage(path);
    if(enrutador === "lista"){
      SetPageType('lista');
    } else {
      SetPageType('detalle');
    }
  },[]);
  return(
    <div className="Items" data-testid="Items">
      {pageType==='lista'?
        (<Results {...pagePath}/>):
        (<Detail {...pagePath}/>)
      }
    </div>
  )
} ;

export default Items;
