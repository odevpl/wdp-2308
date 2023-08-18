import React from 'react';
import styles from './CategoryButtons.module.scss';

const CategoryButtons = () => {
  return (
    <div className={styles.categories}>
      <a href='#'>Featured</a>
      <a href='#' className={styles.active}>
        Top seller
      </a>
      <a href='#'>Sale off</a>
      <a href='#'>Top rated</a>
    </div>
  );
};

export default CategoryButtons;
