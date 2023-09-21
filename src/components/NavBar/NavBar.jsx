import MenuBtn from '../../Ui/MenuBtn/MenuBtn';
import Nav from '../Nav/Nav';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <MenuBtn />
        <img className={styles.logo} src="./img/logo.svg" alt="logo" />
        <Nav />
        <ul className={styles.leng}>
          <li>En</li>
          <li>Ua</li>
          <li>De</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
