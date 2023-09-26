import styles from './ArchitectureDevelopment.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderArchDev from '../../../components/HeaderArchDev/HeaderArchDev';
import TabContent from '../../../components/TabContent/TabContent';

import { useTabCardState } from '../../../utils/useTabCardState';

const webDev = [
  '.Net',
  'Java',
  'JS',
  'HTML, CSS',
  'Angular',
  'SWIFT',
  'React',
  'Node JS',
  'Xamarin',
];

const softArc = [
  'Software Architecture Design and Implementation',
  'Architectural Analysis',
  'Architecture Evaluation & Evolution',
  'Documentation',
  'Technical Supervision',
];

const ArchitectureDevelopment = () => {
   const { active, handleCardClick } = useTabCardState(1);

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
            onClick={() => handleCardClick(1)}
            active={active === 1}
          />
          <TabCard
            img="./img/tabCard/ArcDev/softwareArchitecture.svg"
            title="Software Architecture"
            text="You need a plan to make your dream come true, Blueprint to make a great comfortable facility"
            onClick={() => handleCardClick(2)}
            active={active === 2}
          />
        </WrapFlex>

        <TabContent
          title="Web Development"
          text="We develop Web and mobile applications, digital platforms, enterprise applications using following tech-stack"
          list={webDev}
          active={active === 1}
        />
        <TabContent
          title="Software Architecture"
          text="You need a plan to make your dream come true, Blueprint to make a great comfortable facility, and architecture design for your solution to delight your customers, employees, you personally , and cause no troubles during operation. We would be glad to help you with"
          list={softArc}
          active={active === 2}
        />
      </SectionSimple>
    </>
  );
};

export default ArchitectureDevelopment;
