import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import MainLayouts from '../../layouts/MainLayouts';
import Contacts from '../../pages/Contacts/Contacts';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Services/Services';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import TermsService from '../../pages/TermsService/TermsService';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsService />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
