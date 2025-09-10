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
      alt="Cicilan 0%"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Cicilan 0%"
  subtitle="Dapatkan kasur impian tanpa beban anggaran dengan cicilan 0% dengan kartu kredit."
/>


<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Group-176272-1.svg"   // taruh file di folder public/free-ongkir.png
      alt="Sales Ahli Berpengalaman"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Sales Ahli Berpengalaman"
  subtitle="Tim ORTO Experts kami siap membantu Anda menemukan kasur terbaik."
/>

<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Group-176276.svg"   // taruh file di folder public/free-ongkir.png
      alt="Sales Ahli Berpengalaman"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Gratis Pengiriman"
  subtitle="Nikmati pengiriman ke rumah Anda secara gratis atau dengan harga terjangkau."
/>
<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Group-176275-1.svg"   // taruh file di folder public/free-ongkir.png
      alt="Sales Ahli Berpengalaman"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Koleksi Premium"
  subtitle="ORTOPEDIC. hanya menghadirkan brand‐brand tidur premium terpilih untuk memastikan setiap produk menawarkan kualitas terbaik."
/>
<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Group-176274-1.svg"   // taruh file di folder public/free-ongkir.png
      alt="Sales Ahli Berpengalaman"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Garansi 10 Tahun"
  subtitle="Kami siap memberikan garansi 10 tahun jika ada masalah dengan produk Anda."
/>
<Attribute
  icon={
    <img
      src="https://sleepandco.id/wp-content/uploads/2024/12/Frame-1000003942.svg"   // taruh file di folder public/free-ongkir.png
      alt="Sales Ahli Berpengalaman"
      style={{ width: 50, height: 50 }}
    />
  }
  title="Jaminan Kualitas Terbaik"
  subtitle="Setiap matras dan bedding ORTOPEDIC. terkurasi dengan baik untuk menjamin kenyamanan."
/>
    </div>
  );
};

export default AttributeGrid;
