import styles from './Cloud.module.scss';

const Cloud = ({ text, img }) => {
  return (
    <div className={styles.cloud}>
      <div className={styles.cloudTop}>
        <img className={styles.headerImg} src={img} alt="" />
      </div>
      <img className={styles.cloudBg} src="./img/choose/CloudBig.svg" alt="" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Cloud;
<div></div>;
