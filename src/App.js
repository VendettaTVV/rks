import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './English_variant/header';
import BodyComponent from './English_variant/body';
import FooterComponent from './English_variant/footer';
import { Route, Routes } from 'react-router-dom';
import ContactComponent from './English_variant/body/Contact.js';
import WorkComponent from './English_variant/body/Works';
import InfoComponent from './English_variant/body/AbutUs';
import ServiceComponent from './English_variant/body/Services';

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
