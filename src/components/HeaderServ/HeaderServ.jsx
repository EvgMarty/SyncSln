import styles from './HeaderServ.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const HeaderServ = (props) => {
  const { img, title, text, page } = props;

  return (
    <header className={styles.header}>
      <img
        className={styles.bgHeader}
        src="./img/header/bg.svg"
        alt=""
      />

      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page={page} />
        <img className={styles.group} src="./img/header/Group.svg" alt="" />
        <img className={styles.groupR} src="./img/header/Group.svg" alt="" />
        <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
        <img className={styles.headerTitle} src={img} alt="" />
        <h1>{title}</h1>
        <span className={styles.paragraph}>{text}</span>
      </div>
    </header>
  );
};

export default HeaderServ;
