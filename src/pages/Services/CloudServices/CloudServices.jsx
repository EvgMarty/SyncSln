import styles from './CloudServices.module.scss';
import HeaderServ from '../../../components/HeaderServ/HeaderServ';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';

const CloudServices = () => {
  return (
    <>
      <HeaderServ
        img="./img/servHeader/Cloud.svg"
        page="Cloud Services"
        title="Cloud Services"
        text="If it touches the Cloud, we can do it. Cloudtime365 possesses high proficiency in Designing, Re-designing, Technical Advisory, and supervision of customers’ cloud solutions, as well as creating brand new ones from the scratch."
      />
      <SectionSimple>
        <div className={styles.titleTab}>
          Our company provides services in following directions
        </div>
      </SectionSimple>

      <WrapFlex>
        <TabCard />
      </WrapFlex>
    </>
  );
};

export default CloudServices;
