import React from 'react';
import Button from '../../../common/Button/Button';
import styles from './LeftButtons.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingBasket,
  faExchangeAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../../redux/productsRedux';
import PropTypes from 'prop-types';

const LeftButtons = ({ isFavorite, id }) => {
  const dispatch = useDispatch();
  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite({ id, isFavorite: !isFavorite }));
  };

  return (
    <div className={clsx(styles.buttons, styles.leftbutton)}>
      <Button
        variant='outline'
        className={isFavorite ? styles.favorite : ''}
        onClick={handleFavorite}
      >
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      </Button>
      <span className={styles.leftbuttontext}>Add to favorite</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
      </Button>
      <span className={styles.leftbuttontext}>Add to compare</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
      </Button>
      <span className={styles.leftbuttontext}> Quick View</span>
      <Button variant='outline'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
      </Button>
      <span className={styles.leftbuttontext}>ADD TO CART</span>
    </div>
  );
};

LeftButtons.propTypes = {
  isFavorite: PropTypes.bool,
  id: PropTypes.string,
};

export default LeftButtons;
