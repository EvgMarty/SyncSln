import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styes from './App.module.scss';
import MainLayouts from '../../layouts/MainLayouts';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Blog from '../../pages/Blog/Blog';
import Contacts from '../../pages/Contacts/Contacts';
import Home from '../../pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
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
