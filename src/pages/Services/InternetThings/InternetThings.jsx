import styles from './InternetThings.module.scss';
import HeaderServ from '../../../components/HeaderServ/HeaderServ';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';

const InternetThings = () => {
  return (
    <>
      <HeaderServ
        img="./img/servHeader/IoT.svg"
        page="Internet of Things"
        title="Internet of Things"
        text="Internet of Things is a collective term of online device treatment whether it is single asset or complex network. It provides excessive control, applies smart automation, and opening new opportunities to businesses on any stage."
      />
      <SectionSimple>
        <div className={styles.titleTab}></div>
      </SectionSimple>

      <WrapFlex>
        <TabCard />
      </WrapFlex>
    </>
  );
};

export default InternetThings;
