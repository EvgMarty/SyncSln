import ChooseUs from '../../components/ChooseUs/ChooseUs';
import ContactUs from '../../components/ContactUs/ContactUs';
import Header from '../../components/Header/Header';
import Partners from '../../components/Partners/Partners';
import ServiSection from '../../components/ServiSection/ServiSection';

const Home = () => {
  return (
    <>
      <Header />
      <ServiSection />
      <ChooseUs />
      <Partners />
      <ContactUs />
    </>
  );
};

export default Home;
