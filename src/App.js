import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './header';
import BodyComponent from './body';
import FooterComponent from './footer';
import { Route, Routes } from 'react-router-dom';
import ContactComponent from './body/Contact.js';
import GlassComponent from './body/Services/AutoGlass';
import BodyWorkComponent from './body/Services/Bodywork';
import PaintComponent from './body/Services/Painwork';
import TowingComponent from './body/Services/Towing';
import ConditionComponent from './body/Services/Conditioner';
import PlasticComponent from './body/Services/PlasticParts';
import CustomComponent from './body/Services/Custom';
import WeldingComponent from './body/Services/Welding';
import RestorationComponent from './body/Services/Restoration';
import TyreComponent from './body/Services/Tyre';
import WorkComponent from './body/Works';
import InfoComponent from './body/AbutUs';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        < Route path='/' element={
          <BodyComponent />
        } />
        < Route path='/services/glass' element={
          <GlassComponent />
        } />
        < Route path='/services/bodywork' element={
          <BodyWorkComponent />
        } />
        < Route path='/services/paintwork' element={
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
