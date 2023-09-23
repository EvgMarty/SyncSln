import Cloud from '../Cloud/Cloud';
import CloudMin from '../CloudMin/CloudMin';
import TitleW from '../TitleW/TitleW';
import styles from './ChooseUs.module.scss';

const ChooseUs = () => {
  return (
    <div className={styles.chose}>
      <img
        className={styles.chooseBgL}
        src="./img/choose/chooseBgL.svg"
        alt=""
      />
      <img
        className={styles.chooseBgR}
        src="./img/choose/chooseBgR.svg"
        alt=""
      />
      <div className={styles.container}>
        <TitleW>Why Choose us</TitleW>
        <div className={styles.cloudWrapTop}>
          <Cloud
            img="./img/choose/cloud_1.svg"
            text="Supercharge your business with an industry cloud platform solution that embraces a modern microservice approach, leaving behind outdated monolithic software architectures."
          />
          <Cloud
            img="./img/choose/cloud_2.svg"
            text="At Integronic, we specialize in seamless system integrations, enabling flawless interactions among various services, software, and hardware components."
          />
          <Cloud
            img="./img/choose/cloud_3.svg"
            text="When you choose Integronic, you gain access to innovative and scalable solutions that can conquer even the most intricate challenges faced by your business."
          />
          <Cloud
            img="./img/choose/cloud_4.svg"
            text="Leverage our expertise in platform-as-a-code solutions to build tailored IT infrastructures for your products. With Integronic, you can effortlessly enhance your offerings with cutting-edge AI and Machine Learning capabilities."
          />
          <Cloud
            img="./img/choose/cloud_5.svg"
            text="Get in touch with us today to unlock the transformative power of Integronic and empower your business to thrive as a resilient and highly efficient system, well-equipped to meet future demands"
          />
        </div>
        <div className={styles.cloudWrapBot}>
          <CloudMin
            before="2345"
            number="100"
            title="Zettabytes"
            text="By 2025, there will be over 100 zettabytes of data stored in the cloud"
          />
          <CloudMin
            before="2345"
            number="95%"
            title="Workloads"
            text="According to 74% of global IT decision-makers, 95% of all workloads will be in the cloud within the next five years. (LogicMonitor, 2020)"
          />
          <CloudMin
            before="2345"
            number="$371.4"
            title="Billion total market worth"
            text="In 2020, the total worth of the market was $371.4 billion. With a compound annual growth rate (CAGR) of 17.5 percent, it’s projected that the market will amount to $832.1 billion by 2025."
          />
          <CloudMin
            before="2345"
            number="35%"
            title="Year-on-year growth"
            text="In the first quarter of 2021, cloud services infrastructure spending increased to $41.8 billion on a global level. Compared to the same period in 2020, this was a 35 percent year-on-year growth and a five percent quarter-on-quarter rise"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
