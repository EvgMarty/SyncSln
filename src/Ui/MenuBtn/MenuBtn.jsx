import styles from './MenuBtn.module.scss';

const MenuBtn = () => {
  return (
    <div className={`${styles.menuBg} ${styles.open}`}>
      <span className={styles.menuBtn}></span>
    </div>
  );
};

export default MenuBtn;
