import styles from './TabContent.module.scss';
import TitleBl from '../TitleBl/TitleBl';

const TabContent = (props) => {
  const { text, title, list, active } = props;
  return (
    <div
      className={
        active ? `${styles.contentWrap}` : `${styles.contentWrap_hidden}`
      }
    >
      <TitleBl>{title}</TitleBl>
      <span className={styles.text}>{text}</span>

      <ul className={styles.flexList}>
        {list.map((li, index) => {
          return (
            <li className={styles.flexContent} key={index}>
              {li}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabContent;
