import { Link } from 'react-router-dom';
import styles from './SiteNav.module.scss';

const SiteNav = ({ page }) => {
  return (
    <ul className={styles.siteNav}>
      <li>
        <img src="./img/siteNav.svg" alt="" />
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>|</li>
      <li>{page}</li>
    </ul>
  );
};

export default SiteNav;
