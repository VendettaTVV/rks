import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './Eesti_variant/header';
import BodyComponent from './Eesti_variant/body';
import ServiceComponent from './Eesti_variant/body/Services';
import WorkComponent from './Eesti_variant/body/Works';
import InfoComponent from './Eesti_variant/body/AbutUs';
import ContactComponent from './Eesti_variant/body/Contact';
import FooterComponent from './Eesti_variant/footer';
import UkHeaderComponent from './English_variant/header';
import UkBodyComponent from './English_variant/body';
import UkServiceComponent from './English_variant/body/Services';
import UkWorkComponent from './English_variant/body/Works';
import UkInfoComponent from './English_variant/body/AbutUs';
import UkContactComponent from './English_variant/body/Contact.js';
import UkFooterComponent from './English_variant/footer';
import RuHeaderComponent from './Russian_variant/header';
import RuBodyComponent from './Russian_variant/body';
import RuServiceComponent from './Russian_variant/body/Services';
import RuWorkComponent from './Russian_variant/body/Works';
import RuInfoComponent from './Russian_variant/body/AbutUs';
import RuContactComponent from './Russian_variant/body/Contact';
import RuFooterComponent from './Russian_variant/footer';


function App() {
  return (
    <>

      <Routes>
        < Route path="/rks/" element={
          <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
          </>
        } />
        < Route path="/rks/services" element={
          <>
            <HeaderComponent />
            <ServiceComponent />
            <FooterComponent />
          </>
        } />
        < Route path="/rks/works" element={
          <>
            <HeaderComponent />
            <WorkComponent />
            <FooterComponent />
          </>
        } />
        < Route path="/rks/about" element={
          <>
            <HeaderComponent />
            <InfoComponent />
            <FooterComponent />
          </>
        } />
        < Route path="/rks/contact" element={
          <>
            <HeaderComponent />
            <ContactComponent />
            <FooterComponent />
          </>
        } />
        < Route path="/rks/en" element={
          <>
            <UkHeaderComponent />
            <UkBodyComponent />
            <UkFooterComponent />
          </>
        } />
        < Route path="/rks/services/en" element={
          <>
            <UkHeaderComponent />
            <UkServiceComponent />
            <UkFooterComponent />
          </>
        } />
        < Route path="/rks/works/en" element={
          <>
            <UkHeaderComponent />
            <UkWorkComponent />
            <UkFooterComponent />
          </>
        } />
        < Route path="/rks/about/en" element={
          <>
            <UkHeaderComponent />
            <UkInfoComponent />
            <UkFooterComponent />
          </>
        } />
        < Route path="/rks/contact/en" element={
          <>
            <UkHeaderComponent />
            <UkContactComponent />
            <UkFooterComponent />
          </>
        } />
        < Route path="/rks/ru" element={
          <>
            <RuHeaderComponent />
            <RuBodyComponent />
            <RuFooterComponent />
          </>
        } />
        < Route path="/rks/services/ru" element={
          <>
            <RuHeaderComponent />
            <RuServiceComponent />
            <RuFooterComponent />
          </>
        } />
        < Route path="/rks/works/ru" element={
          <>
            <RuHeaderComponent />
            <RuWorkComponent />
            <RuFooterComponent />
          </>
        } />
        < Route path="/rks/about/ru" element={
          <>
            <RuHeaderComponent />
            <RuInfoComponent />
            <RuFooterComponent />
          </>
        } />
        < Route path="/rks/contact/ru" element={
          <>
            <RuHeaderComponent />
            <RuContactComponent />
            <RuFooterComponent />
          </>
        } />

      </Routes>

    </>
  );
}

export default App;
