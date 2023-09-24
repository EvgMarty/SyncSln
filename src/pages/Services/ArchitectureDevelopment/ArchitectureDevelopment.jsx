import styles from './ArchitectureDevelopment.module.scss';
import HeaderServ from '../../../components/HeaderServ/HeaderServ';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';

const ArchitectureDevelopment = () => {
  return (
    <>
      <HeaderServ
        img="./img/servHeader/ArchiDev.svg"
        page="Architecture & Development"
        title="Architecture & Development"
        text="Strong digital presence is a must in modern business. Website not only a sign of the existence, but a powerful tool for operation, marketing, and business scalation. Well designed and developed web app with balanced architecture is one of the best ways to accelerate your performance, underline your advanced status and proficiency."
      />
      <SectionSimple>
        <div className={styles.titleTab}>
          “SyncSln” supplies professional services in:
        </div>

        <WrapFlex>
          <TabCard
            img="./img/tabCard/ArcDev/webDevelopmentB.svg"
            title="Web Development"
            text="We develop Web and mobile applications, digital platforms"
          />
          <TabCard
            img="./img/tabCard/ArcDev/softwareArchitectureB.svg"
            title="Software Architecture"
            text="You need a plan to make your dream come true, Blueprint to make a great comfortable facility"
          />
        </WrapFlex>
      </SectionSimple>
    </>
  );
};

export default ArchitectureDevelopment;
