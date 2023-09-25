import styles from './HeaderCloud.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const HeaderCloud = () => {
  return (
    <header className={styles.header}>
      <img className={styles.bgHeader} src="./img/header/bg.svg" alt="" />

      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <img className={styles.groupR} src="./img/header/Group.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page="Cloud Services" />
        <img className={styles.group} src="./img/header/Group.svg" alt="" />

        <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
        <img
          className={styles.headerTitle}
          src="./img/servHeader/Cloud.svg"
          alt=""
        />
        <h1>Cloud Services</h1>
        <span className={styles.paragraph}>
          If it touches the Cloud, we can do it. Cloudtime365 possesses high
          proficiency in Designing, Re-designing, Technical Advisory, and
          supervision of customers’ cloud solutions, as well as creating brand
          new ones from the scratch.
        </span>
      </div>
    </header>
  );
};

export default HeaderCloud;
