import Form from '../Form/Form';
import ParagraphW from '../ParagraphW/ParagraphW';
import TitleW from '../TitleW/TitleW';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <img className={styles.contactBg} src="./img/contactUs.svg" alt="" />
      <div className={styles.container}>
        <TitleW>Contact Us</TitleW>
        <ParagraphW>
          If you have any question, request or offer – write us here. I consent
          to the processing of data in accordance with the data protection
          declaration.
        </ParagraphW>
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
