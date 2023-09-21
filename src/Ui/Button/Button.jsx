import styles from './Button.module.scss';

const Button = ({ children, onClick, title, }) => {
  return (
    <button className={styles.btn} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
