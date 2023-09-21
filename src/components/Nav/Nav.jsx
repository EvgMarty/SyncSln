import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
const Nav = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? ` ${styles.link} ${styles.activeLink}` : styles.link
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          to="/"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          to="about-us"
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
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
