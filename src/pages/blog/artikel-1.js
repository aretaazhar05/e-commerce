import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              title={'TIPS MEMILIH KASUR YANG NYAMAN AGAR TIDUR LEBIH BERKUALITAS'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              {/* paragraf pembuka */}
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  Tidur yang nyenyak adalah kunci untuk menjaga kesehatan tubuh dan pikiran.
                  Namun, kualitas tidur tidak hanya ditentukan oleh lamanya waktu istirahat,
                  tetapi juga oleh kenyamanan kasur yang digunakan. Kasur yang tepat dapat
                  membantu tubuh lebih rileks, mengurangi rasa pegal, dan membuat tidur terasa
                  lebih pulas. Agar tidak salah pilih, berikut beberapa tips memilih kasur yang
                  nyaman untuk menunjang tidur Anda.
                </p>
              </div>

              {/* gambar */}
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cloth.png')} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/collections/collection1.png')} alt={'sample2'} />
                </div>
              </div>

              {/* konten tips */}
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>1. Sesuaikan dengan Kebutuhan Tubuh</h2>
                <p className={styles.blogParagraph}>
                  Setiap orang memiliki preferensi tidur yang berbeda. Ada yang lebih nyaman
                  menggunakan kasur empuk, ada pula yang menyukai kasur sedikit keras untuk
                  menopang tulang belakang. Jika Anda sering mengalami sakit punggung, pilihlah
                  kasur dengan tingkat kekerasan medium agar tetap nyaman sekaligus memberikan
                  support yang baik.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Perhatikan Ukuran Kasur</h2>
                <p className={styles.blogParagraph}>
                  Ukuran kasur sangat memengaruhi kenyamanan tidur. Jika tidur sendirian, kasur
                  ukuran single atau twin sudah cukup. Namun, untuk pasangan atau keluarga kecil,
                  kasur ukuran queen atau king lebih ideal agar ruang gerak tidak terbatas.
                  Pastikan juga ukuran kasur sesuai dengan luas kamar tidur.
                </p>
              </div>
                            <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>3. Pilih Bahan dan Kualitas Kasur</h2>
                <p className={styles.blogParagraph}>
                  Material kasur juga sangat memengaruhi kenyamanan tidur. Kasur busa memberikan
                  rasa empuk, sementara kasur pegas (spring bed) biasanya lebih awet dan memiliki
                  daya pantul yang baik. Untuk pilihan yang lebih sehat, pertimbangkan kasur lateks
                  alami yang tahan lama serta anti tungau.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>4. Coba Kasur Sebelum Membeli</h2>
                <p className={styles.blogParagraph}>
                  Jangan ragu untuk mencoba berbaring di kasur sebelum membelinya. Luangkan waktu
                  beberapa menit untuk merasakan apakah kasur tersebut nyaman dan sesuai dengan
                  postur tubuh Anda. Hal ini penting agar tidak menyesal setelah membeli.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>5. Perhatikan Sirkulasi Udara</h2>
                <p className={styles.blogParagraph}>
                  Kasur yang baik seharusnya memiliki sirkulasi udara yang baik sehingga tidak
                  membuat tubuh gerah saat tidur. Beberapa kasur modern dilengkapi dengan teknologi
                  cooling foam atau lapisan khusus yang membantu menjaga suhu tetap sejuk.
                </p>
              </div>

              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>6. Sesuaikan dengan Anggaran</h2>
                <p className={styles.blogParagraph}>
                  Kasur berkualitas memang merupakan investasi jangka panjang untuk kesehatan Anda.
                  Namun, pilihlah kasur yang sesuai dengan kemampuan finansial. Jangan hanya
                  tergiur harga mahal, pastikan kualitasnya sebanding dengan kebutuhan dan budget
                  Anda.
                </p>
              </div>

            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;