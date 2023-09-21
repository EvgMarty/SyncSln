import styles from './ParagraphW.module.scss';

const ParagraphW = ({ children }) => {
  return <p className={styles.paragraphW}>{children}</p>;
};

export default ParagraphW;
