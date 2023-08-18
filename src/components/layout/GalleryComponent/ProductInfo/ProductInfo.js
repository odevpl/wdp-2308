import React from 'react';
import styles from './ProductInfo.module.scss';
import StarRating from '../../../common/StarRating/StarRating';

import PropTypes from 'prop-types';

const ProductInfo = ({ topProduct, stars, userRating, id }) => {
  return (
    <div className={styles.productinfo}>
      <h5>{`${topProduct[0].name}`}</h5>
      <div>
        <StarRating stars={stars} userRating={userRating} id={id} />
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  topProduct: PropTypes.node,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  id: PropTypes.string,
};

export default ProductInfo;
