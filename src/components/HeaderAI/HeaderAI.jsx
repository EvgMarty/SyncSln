import styles from './HeaderAI.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const HeaderAI = () => {
  return (
    <header className={styles.header}>
      <img className={styles.bgHeader} src="./img/header/bg.svg" alt="" />

      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <img className={styles.groupR} src="./img/header/Group.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page="Software Architecture" />
        <img className={styles.group} src="./img/header/Group.svg" alt="" />

        <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
        <img
          className={styles.headerTitle}
          src="./img/servHeader/Ai.svg"
          alt=""
        />
        <h1>AI services</h1>
        <span className={styles.paragraph}>
          Employing Artificial Intelligence is smart and efficient way to reduce
          routine processes. However, AI allows huge amount of date to be
          aggregated in seconds and came up with a unique solution, saving
          tremendous amount of time to be spent on research.
        </span>
      </div>
    </header>
  );
};

export default HeaderAI;
