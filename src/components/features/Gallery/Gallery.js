import React from 'react';
import GalleryComponent from '../../layout/GalleryComponent/GalleryComponent';
import styles from './Gallery.module.scss';
import RightColumn from './RightColumn/RightColumn';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className={styles.FurnitureBar}>
              <div className='row no-gutters'>
                <div className={'col ' + styles.heading}>
                  <h3>Furniture gallery</h3>
                </div>
              </div>
            </div>
            <GalleryComponent />
          </div>
          <div className='col-sm-6 d-none d-sm-block'>
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
