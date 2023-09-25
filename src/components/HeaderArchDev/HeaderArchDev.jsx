import styles from './HeaderArchDev.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const HeaderArchDev = () => {
  return (
    <header className={styles.header}>
      <img className={styles.bgHeader} src="./img/header/bg.svg" alt="" />

      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <img className={styles.groupR} src="./img/header/Group.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page="Architecture & Development" />
        <img className={styles.group} src="./img/header/Group.svg" alt="" />

        <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
        <img
          className={styles.headerTitle}
          src="./img/servHeader/ArchiDev.svg"
          alt=""
        />
        <h1>Architecture & Development</h1>
        <span className={styles.paragraph}>
          Strong digital presence is a must in modern business. Website not only
          a sign of the existence, but a powerful tool for operation, marketing,
          and business scalation. Well designed and developed web app with
          balanced architecture is one of the best ways to accelerate your
          performance, underline your advanced status and proficiency.
        </span>
      </div>
    </header>
  );
};

export default HeaderArchDev;
