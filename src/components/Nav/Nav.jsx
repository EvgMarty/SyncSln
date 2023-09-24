import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = ({ openMenu, closeMenu }) => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    navigate('/');
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Закройте меню после прокрутки
  };

  const scrollToAboutUs = () => {
    navigate('/');
    const servicesSection = document.getElementById('aboutUs');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Закройте меню после прокрутки
  };

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
        <div className={styles.link} onClick={scrollToServices}>
          Services
        </div>
      </li>
      <li>
        <div className={styles.link} onClick={scrollToAboutUs}>
          Abouy Us
        </div>
      </li>
      <li>
        <div className={styles.link} onClick={() => closeMenu()}>
          Blog
        </div>
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
