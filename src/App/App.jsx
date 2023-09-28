import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Contacts from '../pages/Contacts/Contacts';
import Home from '../pages/Home/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsService from '../pages/TermsService/TermsService';
import ScrollToTop from '../utils/ScrollToTop';
import ArchitectureDevelopment from '../pages/Services/ArchitectureDevelopment/ArchitectureDevelopment';
import CloudServices from '../pages/Services/CloudServices/CloudServices';
import InternetThings from '../pages/Services/InternetThings/InternetThings';
import SoftwareArchitecture from '../pages/Services/SoftwareArchitecture/SoftwareArchitecture';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-and-conditions" element={<TermsService />} />

              <Route
                path="architecture-development"
                element={<ArchitectureDevelopment />}
              />
              <Route path="cloud" element={<CloudServices />} />
              <Route
                path="software-architecture"
                element={<SoftwareArchitecture />}
              />
              <Route path="internet-of-things" element={<InternetThings />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
