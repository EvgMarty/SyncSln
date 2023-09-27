import styles from './ArchitectureDevelopment.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderArchDev from '../../../components/HeaderArchDev/HeaderArchDev';
import TabContent from '../../../components/TabContent/TabContent';

import { useTabCardState } from '../../../utils/useTabCardState';
import TabContentImg from '../../../components/TabContentImg/TabContentImg';

const webDev = [
  {
    img: './img/tabContent/NET.svg',
    text: '.Net',
  },
  {
    img: './img/tabContent/JAVA.svg',
    text: 'Java',
  },
  {
    img: './img/tabContent/JS.svg',
    text: 'JS',
  },
  {
    img: './img/tabContent/HTML.svg',
    text: 'HTML, CSS',
  },
  {
    img: './img/tabContent/ANGULAR.svg',
    text: 'Angular',
  },
  {
    img: './img/tabContent/SWIFT.svg',
    text: 'SWIFT',
  },
  {
    img: './img/tabContent/REACT.svg',
    text: 'React',
  },
  {
    img: './img/tabContent/NODE.svg',
    text: '.Node JS',
  },
  {
    img: './img/tabContent/XAMARIN.svg',
    text: 'Xamarin',
  },
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

        <TabContentImg
          title="Web Development"
          text="We develop Web and mobile applications, digital platforms, enterprise applications using following tech-stack"
          content={webDev}
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
