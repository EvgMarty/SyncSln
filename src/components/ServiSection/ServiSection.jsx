import CardServ from '../CardServ/CardServ';
import ParagraphBl from '../ParagraphBl/ParagraphBl';
import TitleBl from '../TitleBl/TitleBl';
import styles from './ServiSection.module.scss';
import serviceObj from '../../data/serviceObj';

const ServiSection = () => {
  return (
    <div id="services" className={styles.serviSection}>
      <div className={styles.container}>
        <TitleBl>Our services</TitleBl>
        <ParagraphBl>
          We offer our clients cutting-edge turnkey software solutions in
          leading fields such as Cloud Solutions, AI & ML, and IoT. Moreover,
          the Integronic team possesses extensive experience in software
          architecture, enabling us to provide high-quality technical advisory
          and audit services at any stage of development, ensuring exceptional
          results
        </ParagraphBl>
        <div className={styles.wrapCard}>
          {serviceObj.map((service) => {
            return <CardServ service={service} key={service.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiSection;
