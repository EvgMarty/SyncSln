import ParagraphBl from '../ParagraphBl/ParagraphBl';
import TitleBl from '../TitleBl/TitleBl';
import styles from './Map.module.scss';

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
              <p>Germany, Münster</p>
            </div>
          </li>
          <li>
            <h3>E-mail</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/mail.svg" alt="" />
              </div>
              <p>info@itegronic.com</p>
            </div>
          </li>
          <li>
            <h3>Branches</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/tag.svg" alt="" />
              </div>
              <p>Spain, Valencia</p>
            </div>
          </li>
          <li>
            <h3>Phone</h3>
            <div className={styles.wrapInfo}>
              <div className={styles.circle}>
                <img src="./img/contacts/clock.svg" alt="" />
              </div>
              <p>+34 652 04 49 77</p>
              <p>+49 1523 2061840</p>
            </div>
          </li>
        </ul>
        <div className={styles.mapWrap}>
          <iframe
            className={styles.googleMap}
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20327.493003011507!2d30.5828727!3d50.4422811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf8b2a37fe91%3A0xeb28c7dc78275ed2!2z0YPQuy4g0K3QvdGC0YPQt9C40LDRgdGC0L7QsiwgMzEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695406102432!5m2!1sru!2sua"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
