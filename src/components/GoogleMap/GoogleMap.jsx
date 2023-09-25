import styles from './GoogleMap.module.scss';

const GoogleMap = () => {
  return (
    <div>
      <iframe
        className={styles.googleMap}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78634.88306040734!2d7.5668067!3d51.9824546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9bbd61d53f7df%3A0xf6fa81a1b836ef12!2sSchr%C3%A4derheide%2055%2C%2048157%20M%C3%BCnster%2C%20Germany!5e0!3m2!1sen!2sua!4v1695639694073!5m2!1sen!2sua"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
