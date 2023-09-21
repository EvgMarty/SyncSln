import styles from './MenuBtn.module.scss';

const MenuBtn = ({ openMenu, toggleMenu }) => {
  return (
    <div
      className={`${styles.menuBg} ${openMenu ? styles.open : ''}`}
      onClick={() => toggleMenu()}
    >
      <span className={styles.menuBtn}></span>
    </div>
  );
};

export default MenuBtn;
