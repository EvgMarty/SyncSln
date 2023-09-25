import styles from './Footer.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  const navigate = useNavigate();

  //скрол к секции о комании
  const scrollToAboutUs = () => {
    navigate('/');
    const servicesSection = document.getElementById('aboutUs');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //скрол к секции сервисы
  const scrollToServices = () => {
    navigate('/');
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoFoot}>
          <img src="./img/logoFooter.svg" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <div className={styles.titleFooter}>Site Map</div>
          <ul className={styles.siteMap}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div onClick={scrollToServices}>Company</div>
            </li>
            <li>
              <Link to="contacts">Contacts</Link>
            </li>
            <li>
              <div onClick={scrollToServices}>Services</div>
            </li>
            <li>
              <div onClick={scrollToAboutUs}>Imprint</div>
            </li>
            <li>
              <Link to="terms-of-service">Terms and conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.titleFooter}>Contacts</div>
          <ul className={styles.siteContacts}>
            <li>
              <IoMdMail />
              <a href="mailto:info@syncsln.com">info@syncsln.com</a>
            </li>
            <li>
              <BsFillTelephoneFill />
              <a href="tel:+4925176025-196">+49 251 76 025-196</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/place/Schr%C3%A4derheide+55,+48157+M%C3%BCnster,+Germany/@51.9824546,7.5668067,12.31z/data=!4m6!3m5!1s0x47b9bbd61d53f7df:0xf6fa81a1b836ef12!8m2!3d52.0268112!4d7.6694391!16s%2Fg%2F11cpb45y86?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schräderheide 55,48157 Münster Germany
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomFoot}>
        <div className={styles.wrap}>
          <div>
            <p>All rights reserved © 2023</p>
          </div>
          <ul className={styles.linkList}>
            <li>
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
