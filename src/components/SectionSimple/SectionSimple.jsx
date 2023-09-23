import styles from './SectionSimple.module.scss';

const SectionSimple = ({ children }) => {
  return (
    <div className={styles.sectionBlue}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SectionSimple ;
