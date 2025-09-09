import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Kebijakan Privasi</h3>
        <p>
          Website Sleep & Co dimiliki oleh PT. Duta Abadi Primantara yang akan menjadi pengontrol atas data pribadi Anda. Kami telah mengadopsi Kebijakan Privasi ini untuk menjelaskan bagaimana kami memproses informasi yang dikumpulkan oleh Sleep & Co, yang juga menjelaskan alasan mengapa kami perlu mengumpulkan data pribadi tertentu tentang Anda. Oleh karena itu, Anda harus membaca Kebijakan Privasi ini sebelum menggunakan website Sleep & Co. Kami menjaga data pribadi Anda dan berjanji untuk menjamin kerahasiaan dan keamanannya..
        </p>
      </div>

      <div className={styles.section}>
        <h3>Informasi pribadi yang kami kumpulkan :</h3>
        <p>
Saat Anda mengunjungi Sleep & Co, kami secara otomatis mengumpulkan informasi tertentu mengenai perangkat Anda, termasuk informasi tentang browser web, alamat IP, zona waktu, dan sejumlah cookie yang terinstal di perangkat Anda. Selain itu, selama Anda menjelajahi Website, kami mengumpulkan informasi tentang setiap halaman web atau produk yang Anda lihat, website atau istilah pencarian apa yang mengarahkan Anda ke Website, dan cara Anda berinteraksi dengan Website. Kami menyebut informasi yang dikumpulkan secara otomatis ini sebagai “Informasi Perangkat”. Kemudian, kami mungkin akan mengumpulkan data pribadi yang Anda berikan kepada kami (termasuk pada, Nama, Nama belakang, Alamat, informasi pembayaran, dll.) selama pendaftaran untuk dapat memenuhi perjanjian.
        </p>
      </div>

      <div className={styles.section}>
        <h3>Mengapa kami memproses data Anda ?</h3>
        <p>
          You must only use our Services in accordance with this Privacy Policy
          and any applicable law or regulations. You agree to refrain from
          undertaking any prohibited acts as set out in this Clause 3. You must
          not (or attempt to):{' '}
        </p>
        <p>
          (a) interfere with or disrupt the use of Services or the website, in
          any manner including but not limited to the servicers or networks that
          host the website;{' '}
        </p>
        <p>(b) stalk, harass, threaten, intimidate or harm another; </p>
        <p>
          (c) pretend to be anyone, or any entity, you are not, you will not
          impersonate or misrepresent yourself as another person (including
          celebrities), entity, a The Upside employee, or a civic or government
          leader, or otherwise misrepresent your affiliation with a person or
          entity. The Upside reserves the right to reject or block any user
          which could be deemed to be an impersonation or misrepresentation of
          your identity, or a misappropriation of another person's name or
          identity;{' '}
        </p>
        <p>
          (d) engage in any copyright infringement or other intellectual
          property infringement, or disclose any trade secret or confidential
          information in violation of a confidentiality, employment, or
          non-disclosure agreement or otherwise;{' '}
        </p>
        <p>
          (e) use, distribute, reproduce or commercialize any content from the
          Website or The Upside service except as permitted by this Policy, by
          law, and with prior written agreement from The Upside;{' '}
        </p>
        <p>
          (f) transmit any unsolicited advertising, promotional material or
          other forms of solicitation in connection with your use of the Service
          without the prior written agreement of The Upside;{' '}
        </p>
        <p>
          (g) forge any TCP-IP packet header or any part of the header
          information or otherwise putting Information in a header designed to
          mislead recipients as to the origin of any content transmitted through
          the Website ("spoofing";);
        </p>
      </div>
    </div>
  );
};

export default Policy;
