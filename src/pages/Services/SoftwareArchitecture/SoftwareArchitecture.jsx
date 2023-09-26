import styles from './SoftwareArchitecture.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderAI from '../../../components/HeaderAI/HeaderAI';
import SectionAD from '../../../components/SectionAD/SectionAD';
import TabContent from '../../../components/TabContent/TabContent';

import { useTabCardState } from '../../../utils/useTabCardState';

const solDev = [
  'AI Solutions',
  'Computer vision',
  'Conversational AI',
  'ML Solutions',
  'Developing AI Apps with cognitive services',
  'Building Speech Enabled Apps',
  'Creating Language Understanding solutions',
  'Computer vision',
  'Face Recognition',
  'Knowledge Mining',
  'Models training',
  'OCR',
  'Speech to text',
  'Entity recognition',
  'Speech Translation',
  'Sentiment analysis',
  'Text to speech',
  'Personalizer',
  'Speaker Recognition',
  'Conversational language understanding',
  'Custom Vision',
  'Question answering',
  'Anomaly Detector',
  'Content Moderator',
  'Monitoring models',
  'AI on-the-edge',
  'Deployment and Consuming models',
];

const botServ = [
  'Custom Bots',
  'Core Assistants',
  'Q&A Makers',
  'Enterprise Assistants',
  'Bot Framework Emulators',
  'Calendar Bots',
  'People Bots',
];

const SoftwareArchitecture = () => {
  const { active, handleCardClick } = useTabCardState(1);
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
            onClick={() => handleCardClick(1)}
            active={active === 1}
          />
          <TabCard
            img="./img/tabCard/AIML/botServices.svg"
            title="Bot Services"
            text="Leave common, predictable and boring tasks to bots."
            onClick={() => handleCardClick(2)}
            active={active === 2}
          />
        </WrapFlex>
      </SectionSimple>

      <SectionAD>
        {/* контент */}
        <TabContent
          title="AI & ML solutions development"
          text="Artificial Intelligence and Machine learning has lots of applications, and can be customized to any client’s need. Our experience covers a broad spectrum of aspects, namely"
          list={solDev}
          active={active === 1}
        />

        <TabContent
          title="Bot services"
          text="Leave common, predictable and boring tasks to bots. We help companies to build highly efficient"
          list={botServ}
          active={active === 2}
        />
      </SectionAD>
    </>
  );
};

export default SoftwareArchitecture;
