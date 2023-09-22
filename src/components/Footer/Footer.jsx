import { Link } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import styles from './Footer.module.scss';

const Footer = () => {
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
              <Link to="about-us">Company</Link>
            </li>
            <li>
              <Link to="contacts">Contacts</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.titleFooter}>Contacts</div>
          <ul className={styles.siteContacts}>
            <li>
              <IoMdMail />
              <a href="mailto:info@cloudtime365.com">info@cloudtime365.com</a>
            </li>
            <li>
              <BsFillTelephoneFill />
              <a href="tel:+380502997480">+38 (050) 29-97-480</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%AD%D0%BD%D1%82%D1%83%D0%B7%D0%B8%D0%B0%D1%81%D1%82%D0%BE%D0%B2,+31,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4422811,30.5828727,14.66z/data=!4m6!3m5!1s0x40d4cf8b2a37fe91:0xeb28c7dc78275ed2!8m2!3d50.4420743!4d30.6020629!16s%2Fg%2F1vnrjjsc?entry=ttu"
                target="_blank"
              >
                31-11 Entuziastiv St., Kyiv, Ukraine
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomFoot}>
        <div className={styles.wrap}>
          <div>
            <p>All rights reserved © 2018-2021</p>
          </div>
          <ul className={styles.linkList}>
            <li>
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
