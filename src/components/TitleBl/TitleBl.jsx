import styles from './TitleBl.module.scss'

const TitleBl = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default TitleBl;
