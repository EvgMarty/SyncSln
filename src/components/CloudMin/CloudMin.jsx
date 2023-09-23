import styles from './CloudMin.module.scss';

const CloudMin = ({ text, title, number, before }) => {
  return (
    <div className={styles.cloud}>
      <div className={styles.cloudTop}>
        <span className={styles.number} data-number={before}>
          {number}
        </span>
        <span className={styles.title}>{title}</span>
      </div>
      <img className={styles.cloudBg} src="./img/choose/CloudMini.svg" alt="" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default CloudMin;
<div></div>;
