import styles from './SectionCloud.module.scss';

const SectionCloud = ({ children }) => {
  return (
    <div className={styles.sectionBlue}>
      <img className={styles.img} src="./img/tabCard/tabBg.svg" alt="" />
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <img className={styles.cloudR}src="./img/header/cloud.svg" alt="" />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SectionCloud;
