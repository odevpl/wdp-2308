import React from 'react';
import styles from './Promo.module.scss';
import PropTypes from 'prop-types';

const Promo = ({ topProduct }) => {
  return (
    <div className={styles.promo}>
      <h3>${`${topProduct[1].price}`}</h3>
      {topProduct[1].oldPrice && <h6>${`${topProduct[1].oldPrice}`}</h6>}
    </div>
  );
};

Promo.propTypes = {
  topProduct: PropTypes.node,
};

export default Promo;
