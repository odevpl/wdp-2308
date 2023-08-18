import React from 'react';
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import styles from './DealsBanner.module.scss';

const DealsBanner = () => {
  // change these product IDs to change products visible in Deals banner
  const bigBannerItemId = 'aenean-ru-bristique-1';
  const secondBannerItemId = 'aenean-ru-bristique-3';
  const thirdBannerItemId = 'aenean-ru-bristique-6';

  const bigBannerItem = useSelector(state => getProductById(state, bigBannerItemId));
  const secondBannerItem = useSelector(state =>
    getProductById(state, secondBannerItemId)
  );
  const thirdBannerItem = useSelector(state =>
    getProductById(state, thirdBannerItemId)
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.bannerWrapper}>
          <div className={styles.bigTile}>
            <a href='#' className={styles.overlay}>
              <img src={bigBannerItem.imgSrc} alt='furniture on sale' />
              <div className={styles.textContainer}>
                <span className={styles.bannerItemTitle}>
                  LUXURY LIVING ROOM
                  <br />
                  <span className={styles.highlight}>CHAIR</span>
                </span>
                <div className={styles.discountBox}>
                  <span>-20%</span>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.smallTilesWrapper}>
            <a href='#' className={`${styles.smallTile} ${styles.upperTile}`}>
              <img src={secondBannerItem.imgSrc} alt='furniture collection on sale' />
              <div className={styles.textContainer}>
                <span className={styles.bannerItemTitle}>
                  <span className={styles.highlight}>COFFEE </span>
                  TABLES
                  <br />
                  <span className={styles.subtitle}>COLLECTION</span>
                  <br />
                  <span className={styles.priceHighlight}>$200.00</span>
                </span>
              </div>
            </a>
            <a href='#' className={`${styles.smallTile} ${styles.lowerTile}`}>
              <img src={thirdBannerItem.imgSrc} alt='furniture collection on sale' />
              <div className={styles.textContainer}>
                <span className={styles.bannerItemTitle}>
                  <span className={styles.highlight}>SPECIAL </span>
                  COLLECTION
                  <br />
                  <span className={styles.subtitle}>SAVE UP TO 45% ON FURNITURE</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsBanner;
