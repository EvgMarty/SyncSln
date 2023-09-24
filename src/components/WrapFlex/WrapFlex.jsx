import styles from './WrapFlex.module.scss';

const WrapFlex = ({ children }) => {
  return <div className={styles.wrapFlex}>{children}</div>;
};

export default WrapFlex;
