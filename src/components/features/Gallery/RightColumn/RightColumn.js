import React from 'react';
import styles from './RightColumn.module.scss';

const RightColumn = () => {
  return (
    <div className={styles.photo}>
      <img
        className={styles.image}
        src='https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1965.jpg?w=826&t=st=1692306511~exp=1692307111~hmac=514c80e8035ee4e33080901407fec30b9ca2e44716c73ddef04a29f438e914c4'
        alt='bed'
      />
      <div className={styles.photoInfo}>
        <div className={styles.bedPrice}>
          <h5>From</h5>
          <h1>$50.80</h1>
        </div>
        <h1 className={styles.name}>Bedroom Bed</h1>
        <button className={styles.btnPhoto}>Shop now</button>
      </div>
    </div>
  );
};

export default RightColumn;
