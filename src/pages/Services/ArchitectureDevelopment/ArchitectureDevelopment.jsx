import styles from './ArchitectureDevelopment.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderArchDev from '../../../components/HeaderArchDev/HeaderArchDev';

const ArchitectureDevelopment = () => {
  return (
    <>
      <HeaderArchDev />
      <SectionSimple>
        <div className={styles.titleTab}>
          “SyncSln” supplies professional services in:
        </div>
        <WrapFlex>
          <TabCard
            img="./img/tabCard/ArcDev/webDevelopment.svg"
            title="Web Development"
            text="We develop Web and mobile applications, digital platforms"
          />
          <TabCard
            img="./img/tabCard/ArcDev/softwareArchitecture.svg"
            title="Software Architecture"
            text="You need a plan to make your dream come true, Blueprint to make a great comfortable facility"
          />
        </WrapFlex>
      </SectionSimple>
    </>
  );
};

export default ArchitectureDevelopment;
