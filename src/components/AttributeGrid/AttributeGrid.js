import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Group-176271.svg"   // taruh file di folder public/free-ongkir.png
      alt="Free Ongkir"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Free Ongkir"
  subtitle="Klik untuk info lebih lanjut"
/>


<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Group-176276.svg"   // taruh file di folder public/free-ongkir.png
      alt="Free Ongkir"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Free Ongkir"
  subtitle="Klik untuk info lebih lanjut"
/>

      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Return goods in 30 days'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
