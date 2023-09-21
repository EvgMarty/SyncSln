import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import MainLayouts from '../../layouts/MainLayouts';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Blog from '../../pages/Blog/Blog';
import Contacts from '../../pages/Contacts/Contacts';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Services/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
