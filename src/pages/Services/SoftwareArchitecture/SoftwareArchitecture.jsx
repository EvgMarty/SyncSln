import styles from './SoftwareArchitecture.module.scss';
import HeaderServ from '../../../components/HeaderServ/HeaderServ';
import SectionSimple from '../../../components/SectionSimple/SectionSimple';
import WrapFlex from '../../../components/WrapFlex/WrapFlex';
import TabCard from '../../../components/TabCard/TabCard';

const SoftwareArchitecture = () => {
  return (
    <>
      <HeaderServ
        img="./img/servHeader/Ai.svg"
        page="Software Architecture"
        title="AI services"
        text="Employing Artificial Intelligence is smart and efficient way to reduce routine processes. However, AI allows huge amount of date to be aggregated in seconds and came up with a unique solution, saving tremendous amount of time to be spent on research."
      />
      <SectionSimple>
        <div className={styles.titleTab}>
          Our company provides services in following directions
        </div>
      </SectionSimple>

      <WrapFlex>
        <TabCard />
      </WrapFlex>
    </>
  );
};

export default SoftwareArchitecture;
