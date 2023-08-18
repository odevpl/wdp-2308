import React from 'react';
import styles from './GalleryComponent.module.scss';

import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import LeftButtons from './LeftButtons/LeftButtons';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import MainProduct from './MainProduct/MainProduct';
import ProductSlider from './ProductSlider/ProductSlider';
import Promo from './Promo/Promo';
import ProductInfo from './ProductInfo/ProductInfo';

const GallerySlider = () => {
  const topProduct = useSelector(getAll);

  return (
    <div className={styles.root}>
      <CategoryButtons />
      <LeftButtons />
      <MainProduct topProduct={topProduct} />
      <Promo topProduct={topProduct} />
      <ProductInfo topProduct={topProduct} />
      <ProductSlider topProduct={topProduct} />
    </div>
  );
};

export default GallerySlider;
