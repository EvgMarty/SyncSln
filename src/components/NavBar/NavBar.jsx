import styles from './NavBar.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MenuBtn from '../../Ui/MenuBtn/MenuBtn';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu === true) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [openMenu]);

  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <MenuBtn openMenu={openMenu} toggleMenu={toggleMenu} />
        <Link to="/">
          <img className={styles.logo} src="./img/logo.svg" alt="logo" />
        </Link>
        <Nav openMenu={openMenu} closeMenu={closeMenu} />
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
