import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = ({ openMenu, closeMenu }) => {
  return (
    <ul className={`${styles.nav} ${openMenu ? styles.active : ''}`}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? ` ${styles.link} ${styles.activeLink}` : styles.link
          }
          to="/"
          onClick={() => closeMenu()}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          to="services"
          onClick={() => closeMenu()}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          to="a"
          onClick={() => closeMenu()}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          to="blog"
          onClick={() => closeMenu()}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          to="contacts"
          onClick={() => closeMenu()}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
