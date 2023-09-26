import styles from './SectionAD.module.scss';

const SectionAD = ({ children }) => {
  return (
    <div className={styles.sectionBlue}>
      <img className={styles.img} src="./img/tabCard/tabBg.svg" alt="" />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SectionAD;
