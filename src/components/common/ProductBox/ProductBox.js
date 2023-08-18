import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { addProductToCompare } from '../../../redux/comparableProductsRedux';
import { toggleFavorite } from '../../../redux/productsRedux';
import StarRating from '../StarRating/StarRating';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  userRating,
  imgSrc,
  oldPrice,
  isFavorite,
  id,
  promoted,
}) => {
  const [popupIsOpen, setpopupIsOpen] = useState(false);

  const dispatch = useDispatch();

  function onAddToCompare(product) {
    dispatch(addProductToCompare(product));
  }

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite({ id, isFavorite: !isFavorite }));
  };

  const handlePopup = e => {
    e.preventDefault();
    setpopupIsOpen(!popupIsOpen);
  };

  const handlePopupClose = () => {
    setpopupIsOpen(false);
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.popupContainer} ${popupIsOpen ? styles.active : ''}`}>
        <div className={styles.popupBox}>
          <img src={imgSrc} alt={name} />
          <div className={styles.popupDetailsContainer}>
            <div className={styles.detailName}>{name}</div>
            <div className={styles.detailId}>id: {id}</div>
            <div className={styles.detilPrice}>${price}</div>
            <div className={styles.detilOldPrice}>OLD PRICE: ${oldPrice}</div>
            <div className={styles.detilPromo}>PROMOTION: {promo}</div>
            <div className={styles.detilStars}>NUMBER OF STARS: {stars}</div>
          </div>
          <button className={styles.xButton} onClick={handlePopupClose}>
            X
          </button>
        </div>
      </div>
      <Link to={`product/${id}`} style={{ textDecoration: 'none' }}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <img src={imgSrc} alt={name} />
          <div className={styles.buttons}>
            <Button variant='small' onClick={e => e.preventDefault()}>
              Quick View
            </Button>
            <Button variant='small' onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </Link>
      <div className={styles.content}>
        <Link to={`product/${id}`} style={{ textDecoration: 'none' }}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.starsWrapper}>
          <StarRating stars={stars} userRating={userRating} id={id} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={isFavorite ? styles.favorite : ''}
            onClick={handleFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={e => {
              e.preventDefault();
              onAddToCompare({
                name,
                price,
                promo,
                stars,
                imgSrc,
                oldPrice,
                isFavorite,
                id,
              });
            }}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={clsx(!promoted && styles.promoted)}>
            <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {// show discounted old price if it is given as a prop
            oldPrice ? <span className={styles.oldPrice}>${oldPrice}</span> : ''}
          <Button noHover variant='small' className={styles.priceContainer}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  imgSrc: PropTypes.string,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
  promoted: PropTypes.bool,
};

export default ProductBox;
