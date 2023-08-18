import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { setResponsiveMode } from '../../../redux/rwdRedux';
import { useDispatch } from 'react-redux';

const MainLayout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      let modeToUpdateState = 'laptop';
      if (newWindowWidth <= 360) {
        modeToUpdateState = 'mobile';
      } else if (newWindowWidth >= 361 && newWindowWidth <= 768) {
        modeToUpdateState = 'tablet';
      }
      dispatch(setResponsiveMode(modeToUpdateState));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
