import React from 'react';
import styles from './MainProduct.module.scss';

const MainProduct = () => {
  return (
    <img
      className={styles.image}
      src='https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?w=826&t=st=1692307065~exp=1692307665~hmac=95deecddeffd1631abb91388e55bba543a7ac412e925ebb6227eaf008e058e2c'
      alt='chair'
    />
  );
};

export default MainProduct;
