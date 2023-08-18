import styles from './Brands.module.scss';
import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Brands = () => {
  const products = useSelector(state => state.products);

  const brandImages = products.map(product =>
    product.brand ? product.brand.img : null
  );

  const filteredBrandImages = brandImages.filter(imgSrc => imgSrc !== null);

  return (
    <div className={styles.root}>
      <div className='container'>
        <p className={styles.brandsLine}></p>
        <div className={styles.brandImages}>
          <Button variant='small' className={styles.leftButton}>
            <FontAwesomeIcon icon={faLessThan} className={styles.brandIcon} />
          </Button>{' '}
          {filteredBrandImages.map((img, index) => (
            <img key={index} src={img} alt={`Brand ${index}`} />
          ))}
          <Button variant='small' className={styles.rightButton}>
            <FontAwesomeIcon icon={faGreaterThan} className={styles.brandIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Brands;
