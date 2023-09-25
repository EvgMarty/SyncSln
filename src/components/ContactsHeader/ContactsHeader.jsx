import styles from './ContactsHeader.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const ContactsHeader = () => {
  return (
    <div className={styles.contHead}>
      <img
        className={styles.contBg}
        src="./img/contacts/contactsBg.svg"
        alt=""
      />
      <img
        className={styles.ellipseR}
        src="./img/contacts/ellipseR.svg"
        alt=""
      />
      <img
        className={styles.ellipse}
        src="./img/contacts/Ellipse.svg"
        alt=""
      />
      <img className={styles.cloudL} src="./img/contacts/cloudL.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page="Contacts" />
      </div>
    </div>
  );
};

export default ContactsHeader;
