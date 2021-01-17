import React, { useEffect, useState } from 'react';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository';
import styles from './Footer.module.scss';
let ApiRepo = new ApiRepositoryClass();

const Footer: React.FC = () => {
  const [footer, setFooter] = useState(Object);
  useEffect(() => {
    ApiRepo.getFooter()
    .then((response: any) => {
      setFooter(response.data);
    });
  }, []);
  return(
  <div className={styles.footer} data-testid="Footer">
   <p>{footer.text}</p> 
  </div>
)};

export default Footer;
