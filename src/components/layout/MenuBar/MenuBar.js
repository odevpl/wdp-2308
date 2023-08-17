import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row align-items-center ' + styles.menuBarWrapper}>
        <div className={'col ' + styles.ProductSearchWrapper}>
          <ProductSearch />
        </div>
        <input id='dropdown' className={styles.inputBox} type='checkbox' />

        <label htmlFor='dropdown' className={styles.dropdown}>
          <span className={styles.hamburger}>
            <span className={`${styles.iconBar} ${styles.topBar}`}></span>
            <span className={`${styles.iconBar} ${styles.middleBar}`}></span>
            <span className={`${styles.iconBar} ${styles.bottomBar}`}></span>
          </span>
        </label>
        <div className={'col-auto ' + styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <NavLink exact to='/' activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/furniture' activeClassName={styles.active}>
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/chair' activeClassName={styles.active}>
                Chair
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/table' activeClassName={styles.active}>
                Table
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/sofa' activeClassName={styles.active}>
                Sofa
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/bedroom' activeClassName={styles.active}>
                Bedroom
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog' activeClassName={styles.active}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
