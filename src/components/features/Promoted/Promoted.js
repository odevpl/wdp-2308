import React from 'react';
import styles from './Promoted.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useSelector } from 'react-redux';
import { getAll, getPromoted } from '../../../redux/productsRedux';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const Promoted = () => {
  /* This selector is only to display picture for presentation into right column */
  const picForPresentation = useSelector(getAll);

  const [promotedProd] = useSelector(getPromoted);

  return (
    <div>
      <div className='container mt-4'>
        <div className='row text-center'>
          <div className='col-4 position-relative '>
            <div className={'row ' + styles.hotDiv}>
              <div className='col text-left'>
                <p>HOT DEALS</p>
              </div>
              <div className={'col text-right ' + styles.dots}>
                <ul>
                  <li>
                    <a>page</a>
                    <a>page</a>
                    <a>page</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.timer}>
              <div>
                <Button variant='outline' className={styles.cartBut}>
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className={'mr-2 ' + styles.butIcon}
                  ></FontAwesomeIcon>
                  ADD TO CART
                </Button>
              </div>
              <div className='row justify-content-center mt-5'>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>25 DAYS</p>
                </div>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>10 HR</p>
                </div>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>45 MIN</p>
                </div>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>30 SEC</p>
                </div>
              </div>
            </div>

            <ProductBox {...promotedProd} />
          </div>
          <div className='col-8 position-relative p-0'>
            <img
              className={styles.promPic}
              src={picForPresentation[7].imgSrc}
              alt='armchair'
            />
            <div className={styles.innerBelt}>
              <h1 className={styles.beltTitl}>
                INDOOR <strong>FURNITURE</strong>
              </h1>
              <h5 className={styles.beltTitl}>SAVE UP TO 50% OF ALL FURNITURE</h5>
            </div>
            <Button variant='outline' className={styles.promButt}>
              SHOP NOW
            </Button>
            <div className='row'>
              <div className='col pr-0 '>
                <Button noHover variant='outline' className={styles.arrLe}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={styles.butIcon}
                  ></FontAwesomeIcon>
                </Button>
              </div>
              <div className='col pl-0'>
                <Button noHover variant='outline' className={styles.arrLe}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={styles.butIcon}
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;

Promoted.propTypes = {
  products: PropTypes.array,
};
