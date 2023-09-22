import Form from '../Form/Form';
import ParagraphW from '../ParagraphW/ParagraphW';
import TitleW from '../TitleW/TitleW';
import styles from './WriteToUs.module.scss';

const WriteToUs = () => {
  return (
    <div className={styles.contactUs}>
      <img className={styles.contactBg} src="./img/contactUs.svg" alt="" />
      <div className={styles.container}>
        <TitleW>Write To Us</TitleW>
        <ParagraphW>
          If you have any question, request or offer – write us here. Please,
          choose your category so we could process your mail effectively
        </ParagraphW>
        <Form />
      </div>
    </div>
  );
};

export default WriteToUs;
