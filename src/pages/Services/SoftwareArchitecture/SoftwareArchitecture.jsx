import styles from './SoftwareArchitecture.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderAI from '../../../components/HeaderAI/HeaderAI';

const SoftwareArchitecture = () => {
  return (
    <>
      <HeaderAI />

      <SectionSimple>
        <div className={styles.titleTab}>
          Our company provides services in following directions
        </div>
        <WrapFlex>
          <TabCard
            img="./img/tabCard/AIML/AIML.svg"
            title="AI & ML solutions development"
            text="Artificial Intelligence and Machine learning has lots of applications"
          />
          <TabCard
            img="./img/tabCard/AIML/botServices.svg"
            title="Bot Services"
            text="Leave common, predictable and boring tasks to bots."
          />
        </WrapFlex>
      </SectionSimple>
    </>
  );
};

export default SoftwareArchitecture;
