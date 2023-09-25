import styles from './Map.module.scss';
import ParagraphBl from '../ParagraphBl/ParagraphBl';
import TitleBl from '../TitleBl/TitleBl';
import GoogleMap from '../GoogleMap/GoogleMap';

const Map = () => {
  return (
    <div className={styles.map}>
      <img
        className={styles.groupImgg}
        src="./img/contacts/cloudL.svg"
        alt=""
      />
      <div className={styles.container}>
        <img className={styles.groupImg} src="./img/header/Group.svg" alt="" />
        <TitleBl>Contacts</TitleBl>
        <ParagraphBl>Here are some more hints on how to find us</ParagraphBl>
        <ul className={styles.dataList}>
          <li>
            <h3>Adress</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/tag.svg" alt="" />
              </div>
              <p>Schräderheide 55 48157</p>
              <p>Münster Germany</p>
            </div>
          </li>
          <li>
            <h3>E-mail</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/mail.svg" alt="" />
              </div>
              <p>info@syncsln.com</p>
            </div>
          </li>
          <li>
            <h3>Branches</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/tag.svg" alt="" />
              </div>
              <p>Spain, Alicante</p>
              <p>Poland, Warsaw</p>
              <p>Ukraine, Kyiv</p>
            </div>
          </li>
          <li>
            <h3>Phone</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/clock.svg" alt="" />
              </div>
              <a href="tel:+4915232061-840">+49 152 32 061-840</a>
              <a href="tel:+4925176025-196">+49 251 76 025-196</a>
            </div>
          </li>
        </ul>
        <div className={styles.mapWrap}>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Map;
