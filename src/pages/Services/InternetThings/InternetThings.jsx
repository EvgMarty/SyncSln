import styles from './InternetThings.module.scss';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';
import HeaderIoT from '../../../components/HeaderIoT/HeaderIoT';

const InternetThings = () => {
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
          />
          <TabCard
            img="./img/tabCard/IoT/IoT-consulting.svg"
            title="IoT consulting"
            text="Sometimes, the slightest hint can change the game."
          />
          <TabCard
            img="./img/tabCard/IoT/IoT-on-the-edge.svg"
            title="IoT on the edge"
            text="Combine and engage innovative solutions together to gain unique adaptive tool to solve issues on the go."
          />
        </WrapFlex>
      </SectionSimple>
    </>
  );
};

export default InternetThings;
