import styles from './CloudServices.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderCloud from '../../../components/HeaderCloud/HeaderCloud';

const CloudServices = () => {
  return (
    <>
      <HeaderCloud />

      <SectionSimple>
        <div className={styles.titleTab}>
          Our company provides services in following directions
        </div>
        <WrapFlex>
          <TabCard
            img="./img/tabCard/Cloud/cloudDevelopment.svg"
            title="Cloud development"
            text="Cloud solutions demonstrate an extreme level of reliability, performance, and security"
          />
          <TabCard
            img="./img/tabCard/Cloud/cloudArchitecture.svg"
            title="Cloud architecture"
            text="Software Architecture is the chassis of your vehicle"
          />
          <TabCard
            img="./img/tabCard/Cloud/cloudMigration.svg"
            title="Cloud migration"
            text="The necessity of having expensive space-consuming server hardware is long gone"
          />
          <TabCard
            img="./img/tabCard/Cloud/hybridCoud.svg"
            title="Hybrid cloud"
            text="Sometimes specific issues demand unique solutions"
          />
          <TabCard
            img="./img/tabCard/Cloud/cloudDataServices.svg"
            title="Cloud Data Services"
            text="A well-designed and implemented database is a key to performance and security"
          />
        </WrapFlex>
      </SectionSimple>
    </>
  );
};

export default CloudServices;
