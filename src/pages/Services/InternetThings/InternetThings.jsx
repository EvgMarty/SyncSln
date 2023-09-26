import styles from './InternetThings.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderIoT from '../../../components/HeaderIoT/HeaderIoT';
import SectionAD from '../../../components/SectionAD/SectionAD';
import TabContent from '../../../components/TabContent/TabContent';

import { useTabCardState } from '../../../utils/useTabCardState';

const iOtDev = [
  'Devices & Device communication',
  'Device provisioning',
  'Message processing & Analytics',
  'IoT Central Solutions',
  'Solution testing & Diagnostics and monitoring',
  'IoT software enhancement',
  'IoT acceleration',
  'IoT analytics',
  'Digital Twins',
  'Condition monitoring',
  'Asset Tracking solutions',
  'Equipment monitoring',
  'BOPIS Solutions',
  'User app development',
];

const iOtCon = [
  'Insight and business integration',
  'IoT Security considerations',
  'IoT Reference architecture design & Implementation',
];

const iOtEdge = [
  'IoT and data analytics',
  'IoT using Cosmos DB',
  'Connected Factory Hierarchy Service',
  'Predictive maintenance with IoT',
  'Computer vision on the edge'
];

const InternetThings = () => {
  const { active, handleCardClick } = useTabCardState(1);
  return (
    <>
      <HeaderIoT />
      <SectionSimple>
        <div className={styles.titleTab}></div>

        <WrapFlex>
          <TabCard
            img="./img/tabCard/IoT/Full-cycle-IoT-development.svg"
            title="Full-cycle IoT development"
            text="We are happy to join your IoT solution development on the any stage and guide it to perfection"
            onClick={() => handleCardClick(1)}
            active={active === 1}
          />
          <TabCard
            img="./img/tabCard/IoT/IoT-consulting.svg"
            title="IoT consulting"
            text="Sometimes, the slightest hint can change the game."
            onClick={() => handleCardClick(2)}
            active={active === 2}
          />
          <TabCard
            img="./img/tabCard/IoT/IoT-on-the-edge.svg"
            title="IoT on the edge"
            text="Combine and engage innovative solutions together to gain unique adaptive tool to solve issues on the go."
            onClick={() => handleCardClick(3)}
            active={active === 3}
          />
        </WrapFlex>
      </SectionSimple>

      <SectionAD>
        {/* контент */}
        <TabContent
          title="Full-cycle IoT development"
          text="We are happy to join your IoT solution development on the any stage and guide it to perfection. We design and implement:"
          list={iOtDev}
          active={active === 1}
        />

        <TabContent
          title="IoT consulting"
          text="Sometimes, the slightest hint can change the game. Let us share our experience in:"
          list={iOtCon}
          active={active === 2}
        />

        <TabContent
          title="IoT on the edge"
          text="Combine and engage innovative solutions together to gain unique adaptive tool to solve issues on the go. By this we mean:"
          list={iOtEdge}
          active={active === 3}
        />
      </SectionAD>
    </>
  );
};

export default InternetThings;
