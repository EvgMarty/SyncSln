import styles from './ParagraphBl.module.scss';

const ParagraphBl = ({ children }) => {
  return <p className={styles.paragraphBl}>{children}</p>;
};

export default ParagraphBl;
