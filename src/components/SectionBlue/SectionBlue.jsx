import styles from './SectionBlue.module.scss';

const SectionBlue = ({ children }) => {
  return (
    <div className={styles.sectionBlue}>
      <img
        className={styles.chooseBgL}
        src="./img/choose/chooseBgL.svg"
        alt=""
      />
      <img
        className={styles.chooseBgR}
        src="./img/choose/chooseBgR.svg"
        alt=""
      />

      <img className={styles.groupW} src="./img/header/GroupW.svg" alt="" />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SectionBlue;
