import styles from './SectionPolicy.module.scss';

const SectionPolicy = ({ children }) => {
  return (
    <div className={styles.sectionPolicy}>
      <img className={styles.cloudL} src="./img/header/cloud.svg" alt="" />
      <img className={styles.cloudR} src="./img/header/cloud.svg" alt="" />
      <div className={styles.container}>
        <img className={styles.numImg} src="./img/header/365.svg" alt="" />
        {children}
      </div>
    </div>
  );
};

export default SectionPolicy;
