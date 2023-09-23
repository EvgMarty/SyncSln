import Button from '../../Ui/Button/Button';
import styles from './Header.module.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.bgHeader}
        src="./img/header/bg-header.svg"
        alt=""
      />
      <img className={styles.drop} src="./img/header/drop.svg" alt="" />

      <img className={styles.eclipseR} src="./img/header/eclipseR.svg" alt="" />
      <img className={styles.eclipseL} src="./img/header/eclipseL.svg" alt="" />
      <div className={styles.container}>
        <img className={styles.group} src="./img/header/Group.svg" alt="" />
        <img className={styles.cloud} src="./img/header/cloud.svg" alt="" />
        <img
          className={styles.headerTitle}
          src="./img/header/headerTitle.svg"
          alt=""
        />
        <h1>SyncSln</h1>
        <ul className={styles.list}>
          <li>Conducting Technical advisory & Audit to enhance productivity</li>
          <li>Employing Cloud Solutions to solve business challenges</li>
          <li>Applying AI & ML to utilize specific demands</li>
        </ul>
        <Button customClass="mt">
          Contact Us <MdKeyboardArrowRight className={styles.arrowRight} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
