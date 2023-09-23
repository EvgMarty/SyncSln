import styles from './SectionGray.module.scss';

const SectionGray = ({ children }) => {
  return (
    <div className={styles.sectionBlue}>
      <img className={styles.group} src="./img/header/Group.svg" alt="" />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default SectionGray;
