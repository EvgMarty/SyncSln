import Cloud from '../Cloud/Cloud';
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
        <div className={styles.cloudWrapBot}></div>
      </div>
    </div>
  );
};

export default ChooseUs;
