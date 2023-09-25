import styles from './HeaderIoT.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const HeaderIoT = () => {
  return (
    <header className={styles.header}>
      <img className={styles.bgHeader} src="./img/header/bg.svg" alt="" />

      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <img className={styles.groupR} src="./img/header/Group.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page="Internet of Things" />
        <img className={styles.group} src="./img/header/Group.svg" alt="" />

        <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
        <img
          className={styles.headerTitle}
          src="./img/servHeader/IoT.svg"
          alt=""
        />
        <h1>Internet of Things</h1>
        <span className={styles.paragraph}>
          Internet of Things is a collective term of online device treatment
          whether it is single asset or complex network. It provides excessive
          control, applies smart automation, and opening new opportunities to
          businesses on any stage.
        </span>
      </div>
    </header>
  );
};

export default HeaderIoT;
