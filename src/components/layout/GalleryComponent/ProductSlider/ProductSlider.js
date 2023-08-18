import React from 'react';
import styles from './ProductSlider.module.scss';
import Button from '../../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ProductSlider = ({ topProduct }) => {
  return (
    <div className={'row no-gutters ' + styles.sliderColumn}>
      <Button variant='small' className={styles.rightButton}>
        <FontAwesomeIcon icon={faLessThan} className={styles.brandIcon} />
      </Button>

      {topProduct.slice(0, 6).map(img => (
        <div className={'col ' + styles.product} key={img.image}></div>
      ))}
      <Button variant='small' className={styles.rightButton}>
        <FontAwesomeIcon icon={faGreaterThan} className={styles.brandIcon} />
      </Button>
    </div>
  );
};

ProductSlider.propTypes = {
  topProduct: PropTypes.node,
};

export default ProductSlider;
