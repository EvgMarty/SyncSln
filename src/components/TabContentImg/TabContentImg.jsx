import styles from './TabContentImg.module.scss';
import TitleBl from '../TitleBl/TitleBl';

const TabContentImg = (props) => {
  const { text, title, content, active } = props;
  return (
    <div
      className={
        active ? `${styles.contentWrap}` : `${styles.contentWrap_hidden}`
      }
    >
      <TitleBl>{title}</TitleBl>
      <span className={styles.text}>{text}</span>

      <ul className={styles.flexList}>
        {content.map((item, index) => {
          return (
            <li className={styles.flexContent} key={index}>
              <img className={styles.liImg} src={item.img} alt="" />
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabContentImg;
