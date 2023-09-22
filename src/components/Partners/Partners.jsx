import Button from '../../Ui/Button/Button';
import ParagraphBl from '../ParagraphBl/ParagraphBl';
import TitleBl from '../TitleBl/TitleBl';
import styles from './Partners.module.scss';

const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.partnBg}>
          <TitleBl>Our Partners</TitleBl>
        </div>
        <ParagraphBl>
          Gartner and Magic Quadrant are registered trademarks of Gartner, Inc.
          and/or its affiliates in the U.S. and internationally and is used
          herein with permission. All rights reserved.
        </ParagraphBl>
        <Button>Read analysts' reviews</Button>
      </div>
    </div>
  );
};

export default Partners;
