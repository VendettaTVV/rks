import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './header';
import BodyComponent from './body';
import FooterComponent from './footer';
import { Route, Routes } from 'react-router-dom';
import ContactComponent from './body/Contact.js';
import WorkComponent from './body/Works';
import InfoComponent from './body/AbutUs';
import Features from './body/Services';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        < Route path='/' element={
          <BodyComponent />
        } />
        {/* < Route path='/services/glass' element={
          <GlassComponent />
        } />
        < Route path='/services/bodywork' element={
          <BodyWorkComponent />
        } />
        < Route path='/services/paintwork' element={S
          <PaintComponent />
        } />
        < Route path='/services/towing' element={
          <TowingComponent />
        } />
        < Route path='/services/conditioner' element={
          <ConditionComponent />
        } />
        < Route path='/services/plastic' element={
          <PlasticComponent />
        } />
        < Route path='/services/custom' element={
          <CustomComponent />
        } />
        < Route path='/services/welding' element={
          <WeldingComponent />
        } />
        < Route path='/services/restoration' element={
          <RestorationComponent />
        } />
        < Route path='/services/tyre' element={
          <TyreComponent />
        } /> */}
        < Route path='/services' element={
          <Features />
        } />
        < Route path='/works' element={
          <WorkComponent />
        } />
        < Route path='/about' element={
          <InfoComponent />
        } />
        < Route path='/contact' element={
          <ContactComponent />
        } />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
