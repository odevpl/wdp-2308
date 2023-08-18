import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../views/Swipeable/Swipeable';
import { useSelector } from 'react-redux';

import { getMode } from '../../../redux/rwdRedux';

const NewFurniture = props => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');

  const responsiveMode = useSelector(getMode);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const leftAction = () => {
    if (activePage !== pagesCount - 1) {
      setActivePage(activePage + 1);
    }
  };

  const rightAction = () => {
    if (activePage !== 0) {
      setActivePage(activePage - 1);
    }
  };

  let productsPerPage = 8;
  if (responsiveMode.mode === 'tablet') {
    productsPerPage = 2;
  } else if (responsiveMode.mode === 'mobile') {
    productsPerPage = 1;
  }

  const { categories, products } = props;

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={`dot-${i}`}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>New furniture</h3>
            </div>
            <div className={'col ' + styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a
                      className={item.id === activeCategory && styles.active}
                      onClick={() => handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <Swipeable leftAction={leftAction} rightAction={rightAction}>
          <div className='row'>
            {categoryProducts
              .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
              .map(item => (
                <div key={item.id} className='col-12 col-sm-6 col-md-4 col-xl-3'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
