import { Link } from 'react-router-dom';
import styles from './CardServ.module.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CardServ = ({ service }) => {
  const { img, title, link, li_1, li_2, li_3 } = service;
  return (
    <Link to={link}>
      <div className={styles.card}>
        <img className={styles.imgSer} src={img} alt="" />
        <span className={styles.title}>{title}</span>
        <ul className={styles.list}>
          <li>{li_1}</li>
          <li>{li_2}</li>
          <li>{li_3}</li>
        </ul>
        <div className={styles.circle}>
          <MdKeyboardArrowRight className={styles.arrowRight} />
        </div>
      </div>
    </Link>
  );
};

export default CardServ;
