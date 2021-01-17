import React,{useState, useEffect} from 'react';
import './BreadCrumb.scss';
interface BreadCrubI {
  categories: string[];
}
const BreadCrumb: React.FC<BreadCrubI> = (breadC) => {
  const [breadCrumbList, setDetailResult] = useState({categories: breadC.categories });
  return (
    <div className="BreadCrumb" data-testid="BreadCrumb">
      <ul>
        {breadCrumbList.categories.map((b)=> <li>{`${b} | `}</li>)}
      </ul>
    </div>
  );
}


export default BreadCrumb;
