import styles from './TitleW.module.scss';

const TitleW = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default TitleW;
