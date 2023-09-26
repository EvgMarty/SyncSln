import styles from './CloudServices.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderCloud from '../../../components/HeaderCloud/HeaderCloud';
import TabContent from '../../../components/TabContent/TabContent';
import SectionCloud from '../../../components/SectionCloud/SectionCloud';

import { useTabCardState } from '../../../utils/useTabCardState';

const cloudDev = [
  'Web Applications',
  'Serverless applications implementation',
  'IaaS solutions',
  'Cloud security',
  'Event-based solutions',
  'Message-based solution',
  'Monitoring and optimization',
  'Caching and content delivery solutions',
  'Systems monitoring',
];

const cloudArch = [
  'Azure Active Directory solutions',
  'Governance and compliance',
  'Administration of Cloud Resources',
  'Virtual Networks',
  'Intersite connectivity',
  'Network Traffic',
  'Virtual Machines',
  'Kubernetes instances',
  'Storages',
  'Systems monitoring',
  'Private access to the cloud infrastructure',
  'Network monitoring',
  'Security',
  'Design compute solutions',
  'Design Network Solutions',
  'Design solutions for database',
  'Design Data integration',
  'Logging monitoring',
  'High Availability',
  'Cost optimization',
  'Design web, cloud-native, container-based apps, etc.',
  'Deployment automation',
  'Design',
];

const cloudMig = [
  'Design for migration',
  'Migration Implementation',
  'Migration Security',
];

const hybCloud = [
  'Design & Implement Hybrid Networking',
  'Implementing & Managing Hybrid Identities',
  'Disaster recovery',
  'Data Recovery',
  'System Recovery',
  'Virtual networking',
  'Hybrid networking',
  'Azure Express Route',
];

const dataCloud = [
  'Relational data solutions',
  'Non-relational data solutions',
  'Data warehouse and warehouse analytics',
  'Data exploration and transformation',
  'Ingesting and loading data',
  'Real-time stream processing solutions',
  'Administration data protection',
  'Optimizations',
  'Automation',
  'Load balancing solutions',
  'Network Security',
  'Data Transforming',
];

const CloudServices = () => {
  const { active, handleCardClick } = useTabCardState(1);
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
            onClick={() => handleCardClick(1)}
            active={active === 1}
          />
          <TabCard
            img="./img/tabCard/Cloud/cloudArchitecture.svg"
            title="Cloud architecture"
            text="Software Architecture is the chassis of your vehicle"
            onClick={() => handleCardClick(2)}
            active={active === 2}
          />
          <TabCard
            img="./img/tabCard/Cloud/cloudMigration.svg"
            title="Cloud migration"
            text="The necessity of having expensive space-consuming server hardware is long gone"
            onClick={() => handleCardClick(3)}
            active={active === 3}
          />
          <TabCard
            img="./img/tabCard/Cloud/hybridCoud.svg"
            title="Hybrid cloud"
            text="Sometimes specific issues demand unique solutions"
            onClick={() => handleCardClick(4)}
            active={active === 4}
          />
          <TabCard
            img="./img/tabCard/Cloud/cloudDataServices.svg"
            title="Cloud Data Services"
            text="A well-designed and implemented database is a key to performance and security"
            onClick={() => handleCardClick(5)}
            active={active === 5}
          />
        </WrapFlex>
      </SectionSimple>

      <SectionCloud>
        {/* контент */}
        <TabContent
          title="Cloud development"
          text="Cloud solutions demonstrate an extreme level of reliability, performance, and security. Power up your platform with tailor-made:"
          list={cloudDev}
          active={active === 1}
        />

        <TabContent
          title="Cloud architecture"
          text="Software Architecture is the chassis of your vehicle. A powerful engine does not guarantee high performance. Cloudtime365 designs the best match architecture for your solutions, whether it’s an existing or completely new solution."
          list={cloudArch}
          active={active === 2}
        />

        <TabContent
          title="Cloud migration"
          text="The necessity of having expensive space-consuming server hardware is long gone. Get your platform up-and-running 24/7/365 across the world. Moving can be a tough process, but when it is time to go Cloud, just leave it to us. We’re professionals in:"
          list={cloudMig}
          active={active === 3}
        />

        <TabContent
          title="Hybrid cloud"
          text="Sometimes specific issues demand unique solutions. Hybrid architecture unites various cloud solutions to work as a homogeneous whole in order to provide the best performance without any malfunctions. Make your system agile, secure, and extremely scalable. We offer:"
          list={hybCloud}
          active={active === 4}
        />

        <TabContent
          title="Cloud data services"
          text="A well-designed and implemented database is a key to performance and security. It is easy to operate, reliable, and saves your resources to be spent on new opportunities. “cloudtime365” is an expert in:"
          list={dataCloud}
          active={active === 5}
        />
      </SectionCloud>
    </>
  );
};

export default CloudServices;
