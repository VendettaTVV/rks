import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './header';
import BodyComponent from './body';
import FooterComponent from './footer';
import { Route, Routes } from 'react-router-dom';
import ContactComponent from './body/Contact.js';
import WorkComponent from './body/Works';
import InfoComponent from './body/AbutUs';
import ServiceComponent from './body/Services';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        < Route path="/" element={
          <BodyComponent />
        } />
        < Route path="/services" element={
          <ServiceComponent />
        } />
        < Route path="/works" element={
          <WorkComponent />
        } />
        < Route path="/about" element={
          <InfoComponent />
        } />
        < Route path="/contact" element={
          <ContactComponent />
        } />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
