import styles from './HeaderCoocePrivac.module.scss';
import SiteNav from '../SiteNav/SiteNav';

const HeaderCoocePrivac = (props) => {
  const { page, img } = props;

  return (
    <div className={styles.headerCoocePrivac}>
      <img
        className={styles.headBg}
        src="./img/coocePrivac/coocePrivacBg.svg"
        alt=""
      />
      <img className={styles.drop} src="./img/header/drop.svg" alt="" />
      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.group} src="./img/header/Group.svg" alt="" />
      <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
      <div className={styles.container}>
        <SiteNav page={page} />
        <img className={styles.headImg} src={img} alt="" />
      </div>
    </div>
  );
};

export default HeaderCoocePrivac;
