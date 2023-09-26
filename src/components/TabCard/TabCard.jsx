import styles from './TabCard.module.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

const TabCard = (props) => {
  const { img, title, text, onClick, active } = props;

  return (
    <div
      className={active ? `${styles.tabCard_active}` : `${styles.tabCard}`}
      onClick={onClick}
    >
      <img className={styles.corner} src="./img/tabCard/corner.svg" alt="" />
      <img className={styles.cardImg} src={img} alt="" />
      <div className={styles.rightWrap}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardText}>{text}</span>
      </div>
      <div className={styles.circle}>
        <MdKeyboardArrowRight className={styles.arrowRight} />
      </div>
    </div>
  );
};

export default TabCard;
